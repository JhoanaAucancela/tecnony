import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useFonts, Nunito_200ExtraLight, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import AppLoading from 'expo-app-loading';
import {Asset} from 'expo-asset';
import EStyleSheet from 'react-native-extended-stylesheet';
import * as Application from 'expo-application';
import AppNavigation from './src/navigations/AppNavigation';
require("./src/theme");
import { RootSiblingParent } from 'react-native-root-siblings';
import { AuthProvider } from './src/providers/AuthProvider';

export default function App({ appName }) {
  let [fontsLoaded] = useFonts({
   Nunito_200ExtraLight, Nunito_400Regular, Nunito_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <RootSiblingParent>
      <AuthProvider />
    </RootSiblingParent>
   // <Information />
  );

  //return <AppNavigation />;

}

App.defaultProps = {
  //appName: Application.name,
  appName: "Tecnony",
}

const _cacheResourcesAsync = () => {
  const images = [
    require('./assets/logo.png'),
  ];

  const cacheImages = images.map(image => {
    return Asset.fromModule(image).downloadAsync();
  });

  return Promise.all(cacheImages);

}

const style = EStyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$white',
  },

  text: {

    color: '$black',
    fontFamily: '$400Regular',


  },
})