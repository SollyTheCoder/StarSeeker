import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import GatesInfo from 'starseeker-components/GatesInfo/GatesInfo';
import {axiosRequest} from 'starseeker-lib/functions';
import {GateInfo} from 'starseeker-types/types';

function Home({gatesEndpoint}: {gatesEndpoint: string}): JSX.Element {
  const [gateArray, setGateArray] = useState<GateInfo[] | null>(null);

  async function getData() {
    const responseData = await axiosRequest(
      'https://hstc-api.testing.keyholding.com/gates',
      'GET',
    );
    if (responseData.status !== 200) return;
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
