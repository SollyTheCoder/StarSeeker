import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import RouterInput from 'starseeker-components/RouterInput/RouterInput';
import RouterOutput from 'starseeker-components/RouterOutput/RouterOutput';
import {RouteResultTemp} from 'starseeker-types/temp';
import {RouteInputs, RouteResult} from 'starseeker-types/types';

function Router(): JSX.Element {
  const [routeInputs, setRouteInputs] = useState<RouteInputs | null>(null);
  const [routeResult, setRouteResult] = useState<RouteResult | null>(null);

  function getJourney(routeInputs: RouteInputs) {
    setRouteInputs(routeInputs);
    setRouteResult(RouteResultTemp);
  }
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <View style={styles.container}>
          <RouterInput submitCallback={getJourney} />
          <RouterOutput routeResult={routeResult} routeInputs={routeInputs} />
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

export default Router;
