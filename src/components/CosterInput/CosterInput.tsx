import Slider from '@react-native-community/slider';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {CostInputs} from 'starseeker-types/types';

type CosterInputProps = {
  submitCallback: (inputs: CostInputs) => void;
  maxPassengers: number;
};

function CosterInput({
  submitCallback,
  maxPassengers,
}: CosterInputProps): React.JSX.Element {
  const [distance, setDistance] = useState('0');
  const [passengers, setPassengers] = useState(1);
  const [parkingDays, setParkingDays] = useState('0');

  function requestResult() {
    const distanceValue = Number(distance);
    const parkingDaysValue = Number(parkingDays);

    if (isNaN(distanceValue) || isNaN(parkingDaysValue)) return;
    if (distanceValue < 0 || parkingDaysValue < 0) {
      return;
    }

    submitCallback({
      distance: distanceValue,
      passengers,
      parkingDays: parkingDaysValue,
    });
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.distanceInputContainer}>
          <EvilIcons size={25} name="location" />
          <TextInput
            style={styles.distanceInput}
            keyboardType="numeric"
            onChangeText={setDistance}
            value={distance}
            maxLength={10}
          />
        </View>
        <View style={styles.passengersInputContainer}>
          <View style={styles.passengersIconsContainer}>
            <Text>{passengers}</Text>
            <Ionicons size={25} name="person" />
          </View>
          <Slider
            style={{width: 200, height: 40}}
            minimumValue={1}
            maximumValue={5}
            step={1}
            onValueChange={value => setPassengers(value)}
            minimumTrackTintColor="#FFFFFF"
            maximumTrackTintColor="#000000"
          />
        </View>
        <View style={styles.parkingDaysInputContainer}>
          <MaterialCommunityIcons size={25} name="parking" />
          <TextInput
            style={styles.parkingDaysInput}
            keyboardType="numeric"
            onChangeText={setParkingDays}
            value={parkingDays}
            maxLength={10}
          />
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
  distanceInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginLeft: 15,
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

export default CosterInput;
