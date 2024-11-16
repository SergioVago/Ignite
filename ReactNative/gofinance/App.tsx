import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/theme';
import { Dashboard } from './src/screens/Dashboard';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from './src/components/SafeAreaView';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({ 
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  
  if(!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
          <Dashboard onLayout={onLayoutRootView}/>

          <StatusBar style="light"  />
      </SafeAreaView>
    </ThemeProvider>
  );
}
