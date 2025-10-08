import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { MD3DarkTheme, MD3LightTheme, Provider as PaperProvider } from "react-native-paper";
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const CombinedLightTheme = {
    ...DefaultTheme,
    ...MD3LightTheme,
    colors: {
      ...DefaultTheme.colors,
      ...MD3LightTheme.colors,
      primary: "#6200ee",
      background: "#f6f6f6",
      text: "#000",
    },
  };

  const CombinedDarkTheme = {
    ...DarkTheme,
    ...MD3DarkTheme,
    colors: {
      ...DarkTheme.colors,
      ...MD3DarkTheme.colors,
      primary: "#BB86FC",
      background: "#121212",
      text: "#fff",
    },
  };

  return (
    <PaperProvider theme={colorScheme === "dark" ? CombinedDarkTheme : CombinedLightTheme}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </PaperProvider>
  );
}
