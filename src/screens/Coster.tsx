import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import CosterInput from 'starseeker-components/CosterInput/CosterInput';
import CosterOutput from 'starseeker-components/CosterOutput/CosterOutput';
import {CostResultTemp} from 'starseeker-types/temp';
import {CostInputs, CostResult} from 'starseeker-types/types';

function Coster({
  requestUrl,
  maxPassengers,
}: {
  requestUrl: string;
  maxPassengers: number;
}): JSX.Element {
  const [costResult, setCostResult] = useState<CostResult | null>(null);
  const [costInputs, setCostInputs] = useState<CostInputs | null>(null);
  function getCost(costInputs: CostInputs) {
    setCostInputs(costInputs);
    setCostResult(CostResultTemp);
  }

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <View style={styles.container}>
          <CosterInput submitCallback={getCost} maxPassengers={5} />
          <CosterOutput costResult={costResult} costInputs={costInputs} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
  backgroundStyle: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default Coster;
