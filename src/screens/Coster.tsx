import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import CosterInput from 'starseeker-components/CosterInput/CosterInput';
import CosterOutput from 'starseeker-components/CosterOutput/CosterOutput';
import {axiosRequest} from 'starseeker-lib/functions';
import {CostInputs, CostResult} from 'starseeker-types/types';
import {API_ENDPOINT} from '@env';

function Coster({
  requestUrl,
  maxPassengers,
}: {
  requestUrl: string;
  maxPassengers: number;
}): JSX.Element {
  const [costResult, setCostResult] = useState<CostResult | null>(null);
  const [costInputs, setCostInputs] = useState<CostInputs | null>(null);

  async function getCost(costInputs: CostInputs) {
    setCostResult(null);
    const responseData = await axiosRequest(
      `${API_ENDPOINT}/transport/${costInputs.distance}?passengers=${costInputs.passengers}&parking=${costInputs.parkingDays}`,
      'GET',
    );
    setCostInputs(costInputs);
    setCostResult(responseData.data);
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
