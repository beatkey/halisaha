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
               headerShown: false
            }}
         />
      </Stack>
   </>
}