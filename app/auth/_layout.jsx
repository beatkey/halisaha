import {router, Slot, Stack, Tabs} from "expo-router";
import {Text, TouchableOpacity} from "react-native";
import {ArrowBackIcon, Button, IconButton} from "native-base";
import {Ionicons} from "@expo/vector-icons";

export default function AuthLayout() {
   return <>
      <Stack
         screenOptions={{
            headerStyle: {backgroundColor: "#000"}, // İsteğe bağlı: başlık arka plan rengi
            headerTintColor: "#fff", // İsteğe bağlı: başlık metni rengi
            animationEnabled: true, // Geçiş animasyonunu etkinleştir
         }}
      >
         <Stack.Screen
            name="index"
            options={{
               title: "",
               headerShown: false, // Başlığı gizle
            }}
         />
         <Stack.Screen
            name="login"
            options={{
               title: "Giriş Yap",
               headerLeft: () => (
                  <TouchableOpacity onPress={() => router.navigate("/auth")}>
                     <Ionicons name="arrow-back" size={24} color="white" />
                  </TouchableOpacity>
               ),
            }}
         />
         <Stack.Screen
            name="register"
            options={{
               title: "Kayıt Ol",
            }}
         />
      </Stack>
   </>
}