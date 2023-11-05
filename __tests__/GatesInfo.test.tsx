import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import GatesInfo from 'starseeker-components/GatesInfo/GatesInfo';

const gateArray = [
  {
    createdAt: 1698836493508,
    updatedAt: null,
    uuid: 'uuid1',
    name: 'Gate 1',
    links: [
      {hu: '1', code: 'Alpha'},
      {hu: '2', code: 'Bravo'},
      {hu: '3', code: 'Charlie'},
    ],
    code: 'G1',
  },
  {
    createdAt: 1698836493508,
    updatedAt: null,
    uuid: 'uuid2',
    name: 'Gate 2',
    links: [
      {hu: '4', code: 'Delta'},
      {hu: '5', code: 'Echo'},
      {hu: '6', code: 'Foxtrot'},
    ],
    code: 'G2',
  },
];

test('renders the GatesInfo component with gate information - unpressed', () => {
  const {getByText, queryByText} = render(<GatesInfo gateArray={gateArray} />);

  // Test that each gate name and code is present in the rendered component
  gateArray.forEach(gate => {
    expect(getByText(gate.name)).toBeTruthy();
    expect(getByText(gate.code)).toBeTruthy();
    expect(queryByText(gate.links[0].code)).toBeNull();
  });
});

test('renders the GatesInfo pressing functionality', () => {
  const {getByText, getByTestId, queryByText} = render(
    <GatesInfo gateArray={gateArray} />,
  );

  const gateTile1 = getByTestId('GateTileIndex0');
  fireEvent.press(gateTile1);

  // Test that each gate name and code is present in the rendered component
  expect(getByText(gateArray[0].name)).toBeTruthy();
  expect(getByText(gateArray[0].code)).toBeTruthy();
  expect(getByText(gateArray[0].links[0].code)).toBeTruthy();
  expect(getByText(gateArray[1].name)).toBeTruthy();
  expect(getByText(gateArray[1].code)).toBeTruthy();
  expect(queryByText(gateArray[1].links[0].code)).toBeNull();

  fireEvent.press(gateTile1);

  expect(getByText(gateArray[0].name)).toBeTruthy();
  expect(getByText(gateArray[0].code)).toBeTruthy();
  expect(queryByText(gateArray[0].links[0].code)).toBeNull();
});
