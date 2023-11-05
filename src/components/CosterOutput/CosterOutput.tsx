import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CostInputs, CostResult} from 'starseeker-types/types';

type CosterOutputProps = {
  costResult: CostResult | null;
  costInputs: CostInputs | null;
};

function CosterOutput({
  costResult,
  costInputs,
}: CosterOutputProps): React.JSX.Element {
  console.log(costResult);
  console.log(costInputs);
  if (costResult == null || costInputs == null) {
    return <></>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <View style={styles.input}>
          <EvilIcons size={25} name="location" />
          <Text>{costInputs.distance}</Text>
        </View>
        <View style={styles.input}>
          <Ionicons size={25} name="person" />
          <Text>{costInputs.passengers}</Text>
        </View>
        <View style={styles.input}>
          <MaterialCommunityIcons size={25} name="parking" />
          <Text>{costInputs.parkingDays}</Text>
        </View>
      </View>
      <View style={styles.resultContainer}>
        <View style={styles.result}>
          <View style={styles.resultLine}>
            <MaterialCommunityIcons size={25} name="ufo-outline" />
            <Text style={styles.resultTextIcon}>
              {costResult.recommendedTransport.name}
            </Text>
          </View>
          <View style={styles.resultLine}>
            <Text style={styles.resultTextIndent}>
              {costResult.recommendedTransport.ratePerAu} per AU
            </Text>
          </View>
          <View style={styles.resultLine}>
            <Text style={styles.resultTextIndent}>
              {costResult.recommendedTransport.capacity} capacity
            </Text>
          </View>
        </View>

        <View style={styles.result}>
          <View style={styles.resultLine}>
            <MaterialIcons size={25} name="attach-money" />
            <Text style={styles.resultTextIcon}>
              {costResult.journeyCost} {costResult.currency}
            </Text>
          </View>
        </View>

        <View style={styles.result}>
          <View style={styles.resultLine}>
            <MaterialCommunityIcons size={25} name="parking" />
            <Text style={styles.resultTextIcon}>
              {costResult.parkingFee} {costResult.currency}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#06d6a0',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 15,
    marginTop: 15,
  },
  inputs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    flexDirection: 'row',
  },
  result: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  resultLine: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  resultContainer: {flexDirection: 'column', justifyContent: 'flex-start'},
  resultTextIcon: {
    marginLeft: 10,
    justifyContent: 'flex-start',
  },
  resultTextIndent: {
    marginLeft: 35,
    justifyContent: 'flex-start',
  },
});

export default CosterOutput;
