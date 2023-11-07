import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import BottomNavigation from 'starseeker-navigation/BottomNavigation';
import {ApiContext} from './src/context/ApiContext';
import {API_ENDPOINT} from '@env';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <ApiContext.Provider value={API_ENDPOINT}>
        <BottomNavigation />
      </ApiContext.Provider>
    </NavigationContainer>
  );
}

export default App;
