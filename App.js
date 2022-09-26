import { useCallback } from 'react'
import { View } from 'react-native'
import { ThemeProvider } from 'styled-components'
import { NavigationContainer } from '@react-navigation/native'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import { Router } from './src/router'
import { theme } from './src/theme'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    'AvenirNext-DemiBold': require('./assets/fonts/AvenirNext-DemiBold.ttf'),
    'AvenirNext-Bold': require('./assets/fonts/AvenirNext-Bold.ttf'),
    'AvenirNext-Medium': require('./assets/fonts/AvenirNext-Medium.ttf'),
    'AvenirNext-Regular': require('./assets/fonts/AvenirNext-Regular.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </View>
    </ThemeProvider>
  )
}
