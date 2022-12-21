import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthContextClass } from './@types/auth';
import { AuthContext, useProvideAuth } from './hooks/useAuthProvider';


import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const auth = useProvideAuth()

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <AuthContext.Provider value={auth}>
        <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
        </SafeAreaProvider>
      </AuthContext.Provider>
    );
  }
}
