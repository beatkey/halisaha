import {Link, Slot, Stack} from "expo-router";
import {Text} from "react-native";

export default function _Layout() {
   return <>
      <Stack>
         <Stack.Screen
            name="index"
            options={{
               headerShown: false,
            }}
         />
         <Stack.Screen
            name="editProfile"
            options={{
               title: "Profili Düzenle",
               presentation: "modal",
            }}
         />
      </Stack>
   </>
}