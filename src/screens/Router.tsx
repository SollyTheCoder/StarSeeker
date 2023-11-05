import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import RouterInput from 'starseeker-components/RouterInput/RouterInput';
import RouterOutput from 'starseeker-components/RouterOutput/RouterOutput';
import {axiosRequest} from 'starseeker-lib/functions';
import {
  GateInfo,
  GateListItem,
  RouteInputs,
  RouteResult,
} from 'starseeker-types/types';
import {API_ENDPOINT} from '@env';

function Router(): JSX.Element {
  const [gateList, setGateList] = useState<GateListItem[] | null>(null);
  const [routeInputs, setRouteInputs] = useState<RouteInputs | null>(null);
  const [routeResult, setRouteResult] = useState<RouteResult | null>(null);

  async function getJourney(routeInputs: RouteInputs) {
    setRouteResult(null);
    const responseData = await axiosRequest(
      `${API_ENDPOINT}/gates/${routeInputs.fromGate}/to/${routeInputs.toGate}`,
      'GET',
    );
    setRouteInputs(routeInputs);
    setRouteResult(responseData.data);
  }

  async function getGates() {
    const responseData = await axiosRequest(`${API_ENDPOINT}/gates`, 'GET');
    setGateList(
      responseData.data.map((gateInfo: GateInfo, i: number) => ({
        key: i,
        value: gateInfo.code,
      })),
    );
  }

  useEffect(() => {
    getGates();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <View style={styles.container}>
          <RouterInput gateList={gateList} submitCallback={getJourney} />
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
