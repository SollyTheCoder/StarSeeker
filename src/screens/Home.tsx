import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import GatesInfo from 'starseeker-components/GatesInfo/GatesInfo';
import {axiosRequest} from 'starseeker-lib/functions';
import {GateInfo} from 'starseeker-types/types';
import {API_ENDPOINT} from '@env';

function Home(): JSX.Element {
  const [gateArray, setGateArray] = useState<GateInfo[] | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  async function getData() {
    const responseData = await axiosRequest(`${API_ENDPOINT}/gates`, 'GET');
    if (responseData.status !== 200) {
      return setErrorMessage('There was an issue retrieving gate information');
    }
    setGateArray(responseData.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <View style={styles.container}>
          <Text>{errorMessage}</Text>
          <GatesInfo gateArray={gateArray} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundStyle: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default Home;
