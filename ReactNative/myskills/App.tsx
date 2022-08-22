import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import KeepAwake from 'react-native-keep-awake';
import { StatusBar } from 'react-native';
import { Home } from './src/pages/Home';

export default function App() {
  KeepAwake.activate();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />

      <Home />
    </GestureHandlerRootView>
  );
}
