import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {GateListItem, RouteInputs} from 'starseeker-types/types';

type RouterInputProps = {
  gateList: GateListItem[] | null;
  submitCallback: (inputs: RouteInputs) => void;
};

function RouterInput({
  gateList,
  submitCallback,
}: RouterInputProps): React.JSX.Element {
  const [fromGate, setFromGate] = useState('');
  const [toGate, setToGate] = useState('');

  function requestResult() {
    if (toGate === '' || fromGate === '') return;
    submitCallback({
      toGate,
      fromGate,
    });
  }

  if (gateList == null) return <></>;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            style={styles.icon}
            size={25}
            name="ray-start"
          />
          <View
            testID="SelectListContainerFromGate"
            style={styles.dropdownContainer}>
            <SelectList
              setSelected={setFromGate}
              data={gateList}
              save="value"
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            style={styles.icon}
            size={25}
            name="ray-end"
          />
          <View
            testID="SelectListContainerToGate"
            style={styles.dropdownContainer}>
            <SelectList setSelected={setToGate} data={gateList} save="value" />
          </View>
        </View>
      </View>
      <TouchableOpacity
        testID="RouterInputGo"
        style={styles.goButton}
        onPress={() => requestResult()}>
        <Text>Go!</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06d6a0',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 15,
  },
  inputContainer: {
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
  },
  dropdownContainer: {
    width: '80%',
  },
  goButton: {
    backgroundColor: 'gold',
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 15,
  },
});

export default RouterInput;
