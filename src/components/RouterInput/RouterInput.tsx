import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {RouteInputs} from 'starseeker-types/types';

type RouterInputProps = {
  submitCallback: (inputs: RouteInputs) => void;
};

function RouterInput({submitCallback}: RouterInputProps): React.JSX.Element {
  const [fromGate, setFromGate] = useState('');
  const [toGate, setToGate] = useState('');
  const gateList = [
    {key: '1', value: 'Gate 1'},
    {key: '2', value: 'Gate 2'},
    {key: '3', value: 'Gate 3'},
    {key: '4', value: 'Gate 4'},
    {key: '5', value: 'Gate 5'},
    {key: '6', value: 'Gate 6'},
    {key: '7', value: 'Gate 7'},
  ];

  function requestResult() {
    if (toGate == '' || fromGate == '') return;
    submitCallback({
      toGate,
      fromGate,
    });
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons
            style={styles.icon}
            size={25}
            name="ray-start"
          />
          <View style={styles.dropdownContainer}>
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
          <View style={styles.dropdownContainer}>
            <SelectList setSelected={setToGate} data={gateList} save="value" />
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.goButton} onPress={() => requestResult()}>
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
  parkingDaysInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginLeft: 15,
  },
  distanceInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 7,
  },
  parkingDaysInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 7,
  },
  passengersInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  passengersIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
