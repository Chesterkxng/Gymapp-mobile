import { Stack } from "expo-router";
import "@/config/calendarLocale";

export default function RootLayout() {
  return <Stack 
      screenOptions={{
        headerShown: false,
      }}
  />;
}
