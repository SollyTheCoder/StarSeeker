import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import RouterInput from 'starseeker-components/RouterInput/RouterInput';
import RouterOutput from 'starseeker-components/RouterOutput/RouterOutput';
import {
  axiosRequest,
  getRouteData,
  storeRouteData,
} from 'starseeker-lib/functions';
import {
  GateInfo,
  GateListItem,
  RouteInputs,
  RouteResult,
  SavedRoute,
} from 'starseeker-types/types';
import {API_ENDPOINT} from '@env';

function Router(): JSX.Element {
  const [gateList, setGateList] = useState<GateListItem[] | null>(null);
  const [routeInputs, setRouteInputs] = useState<RouteInputs | null>(null);
  const [routeResult, setRouteResult] = useState<RouteResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [savedRoutes, setSavedRoutes] = useState<SavedRoute[]>([]);
  const [pageRefresh, setPageRefresh] = useState<boolean>(false);

  async function getJourney(routeInputs: RouteInputs) {
    setRouteResult(null);
    const responseData = await axiosRequest(
      `${API_ENDPOINT}/gates/${routeInputs.fromGate}/to/${routeInputs.toGate}`,
      'GET',
    );
    if (responseData.status !== 200) {
      return setErrorMessage('There was an issue retrieving route information');
    }
    setRouteInputs(routeInputs);
    setRouteResult(responseData.data);
  }

  async function getGates() {
    const responseData = await axiosRequest(`${API_ENDPOINT}/gates`, 'GET');
    if (responseData.status !== 200) {
      return setErrorMessage('There was an issue retrieving gates for routing');
    }
    setGateList(
      responseData.data.map((gateInfo: GateInfo, i: number) => ({
        key: i,
        value: gateInfo.code,
      })),
    );
  }

  async function getSavedRoutes() {
    const responseData = await getRouteData();
    setSavedRoutes(responseData);
  }

  function saveRoute(newRoute: SavedRoute) {
    var newRoutes = [];
    if (savedRoutes == null) {
      newRoutes.push(newRoute);
    } else {
      newRoutes = [...savedRoutes, newRoute];
    }
    setSavedRoutes(newRoutes);
    storeRouteData(newRoutes);
    setPageRefresh(v => !v);
  }

  function deleteRoute(index: number) {
    setSavedRoutes(routes => {
      routes.splice(index, 1);
      return routes;
    });
    storeRouteData(savedRoutes);
    setPageRefresh(v => !v);
  }

  useEffect(() => {
    getGates();
  }, []);

  useEffect(() => {
    getSavedRoutes();
  }, [pageRefresh]);

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <View style={styles.container}>
          <RouterInput gateList={gateList} submitCallback={getJourney} />
          <Text>{errorMessage}</Text>
          <RouterOutput
            routeResult={routeResult}
            routeInputs={routeInputs}
            saveCallback={() =>
              saveRoute({
                routeInputs: routeInputs!,
                routeResult: routeResult!,
              })
            }
          />
          <Text>Saved:</Text>
          {savedRoutes?.map((v, i) => (
            <View key={i}>
              <RouterOutput
                routeResult={v.routeResult}
                routeInputs={v.routeInputs}
                deleteCallback={() => deleteRoute(i)}
              />
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
    marginBottom: 10,
  },
  backgroundStyle: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default Router;
