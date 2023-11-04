import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import GatesInfo from 'starseeker-components/GatesInfo/GatesInfo';
import {GateArray} from 'starseeker-types/temp';

function Home(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <View style={styles.container}>
          <GatesInfo gateArray={GateArray} />
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
