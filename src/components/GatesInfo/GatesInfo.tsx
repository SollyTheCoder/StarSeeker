import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {GateInfo} from 'starseeker-types/types';
import GateTile from './GateTile/GateTile';

function GatesInfo({
  gateArray,
}: {
  gateArray: GateInfo[] | null;
}): React.JSX.Element {
  if (gateArray == null) return <></>;
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <View style={styles.container}>
          {gateArray.map((v, i) => (
            <View key={i}>
              <GateTile gateInfo={v} index={i} />
            </View>
          ))}
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

export default GatesInfo;
