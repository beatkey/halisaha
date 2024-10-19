import {Link, Slot, Stack} from "expo-router";
import {Text} from "react-native";

export default function _Layout() {
   return <>
      <Stack>
         <Stack.Screen
            name="index"
            options={{
               title: "Oyuncular",
               headerShown: false,
            }}
         />
         <Stack.Screen
            name="addPlayer"
            options={{
               title: "Oyuncu Ekle",
               presentation: "modal"
            }}
         />
         <Stack.Screen
            name="[playerDetail]"
            options={{
               title: "Oyuncu Detayı",
               presentation: "modal"
            }}
         />
      </Stack>
   </>
}