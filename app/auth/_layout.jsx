import {router, Slot, Stack, Tabs} from "expo-router";
import {Text} from "react-native";
import {ArrowBackIcon, Button} from "native-base";

export default function AuthLayout() {
   return <>
      <Stack
         screenOptions={{
            headerStyle: { backgroundColor: "#6200ee" }, // İsteğe bağlı: başlık arka plan rengi
            headerTintColor: "#fff", // İsteğe bağlı: başlık metni rengi
            animationEnabled: true, // Geçiş animasyonunu etkinleştir
         }}
      >
         <Stack.Screen
            name="index"
            options={{
               headerShown: false, // Başlığı gizle
            }}
         />
         <Stack.Screen
            name="login"
            options={{
               title: "Settings",
               headerLeft: () => (
                  <Button onPress={() => router.push("/auth")} colorScheme="secondary">
                     Back
                  </Button>
               ),
            }}
         />
      </Stack>
   </>
}