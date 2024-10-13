import {Slot, Stack, useRouter} from "expo-router";
import {NativeBaseProvider} from "native-base";
import Toast from 'react-native-toast-message';

import "../global.css"
import {useEffect} from "react";

export default function AppLayout() {
   const router = useRouter();
   const isLoggedIn = false;

   if (isLoggedIn) {
      router.replace("/account");
   } else {
      router.replace("/auth");
   }

   return <>
      <NativeBaseProvider>
         <Stack>
            <Stack.Screen
               name="index"
               options={{
                  headerShown: false
               }}
            />
            <Stack.Screen
               name="auth"
               options={{
                  headerShown: false
               }}
            />
            <Stack.Screen
               name="account"
            />
         </Stack>
         <Toast topOffset={110}/>
      </NativeBaseProvider>
   </>
}
