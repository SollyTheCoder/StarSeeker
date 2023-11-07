import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import {RouteInputs, RouteResult} from 'starseeker-types/types';

type RouterOutputProps = {
  routeResult: null | RouteResult;
  routeInputs: null | RouteInputs;
};

function RouterOutput({
  routeResult,
  routeInputs,
}: RouterOutputProps): React.JSX.Element {
  if (routeResult == null) {
    return <></>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <View style={styles.titleL}>
          <AntDesign size={25} name="rocket1" />
          <View style={styles.titleLText}>
            <Text style={styles.boldTitle}>{routeInputs?.fromGate}</Text>
            <Text style={styles.boldTitle}> - </Text>
            <Text style={styles.boldTitle}>{routeInputs?.toGate}</Text>
          </View>
        </View>
        <View style={styles.titleR}>
          <Text style={styles.boldTitle}>£{routeResult.totalCost}</Text>
        </View>
      </View>
      <View style={styles.routeContainer}>
        <View style={styles.journies}>
          {[...Array(routeResult.route.length - 1)].map((e, i) => (
            <View key={i} style={styles.journey}>
              <View style={styles.journeyPair}>
                <View style={styles.journeyPairStart}>
                  <Octicons size={25} name="dot" />
                  <Text style={styles.journeyPairText} key={i}>
                    {routeResult.route[i]}
                  </Text>
                </View>
                <View style={styles.journeyPairEnd}>
                  <Octicons size={25} name="dot-fill" />
                  <Text style={styles.journeyPairText} key={i}>
                    {routeResult.route[i + 1]}
                  </Text>
                </View>
              </View>

              <View style={styles.journeyNumber}>
                <Text style={styles.journeyNumberText}>Journey {i + 1}</Text>
              </View>
            </View>
          ))}
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
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  titleL: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  titleLText: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  titleR: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  boldTitle: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  routeContainer: {
    alignItems: 'flex-start',
    marginTop: 15,
    marginLeft: 37,
  },
  journies: {flexDirection: 'column', width: '100%'},
  journey: {
    flexDirection: 'row',
    marginVertical: 5,
    flex: 1,
    flexGrow: 1,
  },
  journeyPair: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  journeyPairStart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  journeyPairEnd: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  journeyPairText: {
    marginLeft: 10,
  },
  journeyNumber: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexGrow: 1,
  },
  journeyNumberText: {
    fontWeight: 'bold',
    marginRight: 25,
  },
});

export default RouterOutput;
