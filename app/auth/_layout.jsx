import {router, Slot, Stack, Tabs} from "expo-router";
import {Text, TouchableOpacity} from "react-native";
import {ArrowBackIcon, Button, IconButton} from "native-base";
import {Ionicons} from "@expo/vector-icons";

export default function AuthLayout() {
   return <>
      <Stack>
         <Stack.Screen
            name="index"
            options={{
               headerShown: false,
               title: ""
            }}
         />
         <Stack.Screen
            name="login"
            options={{
               title: "Giriş Yap",
               /*headerLeft: () => (
                  <TouchableOpacity onPress={() => router.navigate("/auth")}>
                     <Ionicons name="arrow-back" size={24} color="black"/>
                  </TouchableOpacity>
               ),*/
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