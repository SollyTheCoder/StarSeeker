import {act, fireEvent, render, waitFor} from '@testing-library/react-native';
import React from 'react';
import RouterInput from 'starseeker-components/RouterInput/RouterInput';
import {GateListItem} from 'starseeker-types/types';

const mockSubmitCallback = jest.fn();
const gateList: GateListItem[] = [
  {key: '1', value: 'Gate 1'},
  {key: '2', value: 'Gate 2'},
  {key: '3', value: 'Gate 3'},
];

test('Select inputs are pressable', async () => {
  const {getByText, findAllByText, queryByText} = render(
    <RouterInput gateList={gateList} submitCallback={mockSubmitCallback} />,
  );

  const gates = await findAllByText('Select option');

  // open select dropdown
  await act(() => {
    fireEvent.press(gates[0]);
  });

  // check gates appear
  await waitFor(() => {
    gateList.map(gate => {
      expect(getByText(gate.value)).toBeTruthy();
    });
  });

  const gateItem = await findAllByText(gateList[0].value);

  // select a gate
  await act(() => {
    fireEvent.press(gateItem[0]);
  });
  // delay 2 seconds as the list has a close animation
  await act(async () => {
    await new Promise(r => setTimeout(r, 2000));
  });

  // validate gate is selected and other gates have gone
  await waitFor(() => {
    expect(queryByText(gateList[0].value)).toBeTruthy();
    expect(queryByText(gateList[1].value)).toBeNull();
    expect(queryByText(gateList[2].value)).toBeNull();
  });
});

test('Go button calls submitCallback', async () => {
  const {getByText, findAllByText, getByTestId} = render(
    <RouterInput gateList={gateList} submitCallback={mockSubmitCallback} />,
  );

  const gates = await findAllByText('Select option');
  const goButton = getByTestId('RouterInputGo');

  // open select dropdown
  await act(() => {
    fireEvent.press(gates[0]);
  });
  await act(() => {
    fireEvent.press(getByText(gateList[0].value));
  });
  await act(async () => {
    await new Promise(r => setTimeout(r, 2000));
  });

  await act(() => {
    fireEvent.press(gates[1]);
  });
  await act(() => {
    fireEvent.press(getByText(gateList[1].value));
  });
  await act(async () => {
    await new Promise(r => setTimeout(r, 2000));
  });

  // open select dropdown
  await act(() => {
    fireEvent.press(goButton);
  });

  expect(mockSubmitCallback).toHaveBeenCalledWith({
    fromGate: gateList[0].value,
    toGate: gateList[1].value,
  });
});
