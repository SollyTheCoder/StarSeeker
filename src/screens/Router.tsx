import React, {useCallback, useContext, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import RouterInput from 'starseeker-components/RouterInput/RouterInput';
import RouterOutput from 'starseeker-components/RouterOutput/RouterOutput';
import {axiosRequest} from 'starseeker-lib/functions';
import {
  GateInfo,
  GateListItem,
  RouteInputs,
  RouteResult,
} from 'starseeker-types/types';
import {ApiContext} from '../context/ApiContext';

function Router(): JSX.Element {
  const [gateList, setGateList] = useState<GateListItem[] | null>(null);
  const [routeInputs, setRouteInputs] = useState<RouteInputs | null>(null);
  const [routeResult, setRouteResult] = useState<RouteResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const api = useContext(ApiContext);

  async function getJourney(routeInputs: RouteInputs) {
    setRouteResult(null);
    const responseData = await axiosRequest(
      `${api}/gates/${routeInputs.fromGate}/to/${routeInputs.toGate}`,
      'GET',
    );
    if (responseData.status !== 200) {
      return setErrorMessage('There was an issue retrieving route information');
    }
    setRouteInputs(routeInputs);
    setRouteResult(responseData.data);
  }

  const getGates = useCallback(async () => {
    const responseData = await axiosRequest(`${api}/gates`, 'GET');
    if (responseData.status !== 200) {
      return setErrorMessage('There was an issue retrieving gates for routing');
    }
    setGateList(
      responseData.data.map((gateInfo: GateInfo, i: number) => ({
        key: i,
        value: gateInfo.code,
      })),
    );
  }, [api]);

  useEffect(() => {
    getGates();
  }, [getGates]);

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <View style={styles.container}>
          <RouterInput gateList={gateList} submitCallback={getJourney} />
          <Text>{errorMessage}</Text>
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
