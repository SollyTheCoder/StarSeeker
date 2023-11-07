import React, {useContext, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import CosterInput from 'starseeker-components/CosterInput/CosterInput';
import CosterOutput from 'starseeker-components/CosterOutput/CosterOutput';
import {axiosRequest} from 'starseeker-lib/functions';
import {CostInputs, CostResult} from 'starseeker-types/types';
import {ApiContext} from 'starseeker-context/ApiContext';

function Coster(): JSX.Element {
  const [costResult, setCostResult] = useState<CostResult | null>(null);
  const [costInputs, setCostInputs] = useState<CostInputs | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const api = useContext(ApiContext);

  async function getCost(costInputs: CostInputs) {
    setCostResult(null);
    const responseData = await axiosRequest(
      `${api}/transport/${costInputs.distance}?passengers=${costInputs.passengers}&parking=${costInputs.parkingDays}`,
      'GET',
    );
    if (responseData.status !== 200) {
      return setErrorMessage('There was an issue retrieving cost information');
    }
    setCostInputs(costInputs);
    setCostResult(responseData.data);
  }

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <View style={styles.container}>
          <CosterInput submitCallback={getCost} />
          <Text>{errorMessage}</Text>
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
