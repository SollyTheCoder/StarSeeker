import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import BottomNavigation from 'starseeker-navigation/BottomNavigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
}

export default App;
