import {Redirect, Slot, Stack} from "expo-router";

import "../global.css"
import store from "../src/stores";
import {extendTheme, NativeBaseProvider} from "native-base";
import Toast from "react-native-toast-message";
import {Provider} from "react-redux";
import {Text} from "react-native";
import {useUser} from "../src/stores/hooks";
import {useFonts} from "expo-font";
import {useEffect} from "react";
import {SplashScreen} from "expo-router";

export default function AppLayout() {
   return <>
      <Provider store={store}>
         <NativeBaseProvider>
            <AuthCheck>
               <Stack>
                  <Stack.Screen
                     name="(tabs)"
                     options={{
                        title: "Anasayfa",
                        headerShown: false
                     }}
                  />
                  <Stack.Screen
                     name="players"
                     options={{
                        title: "Oyuncular",
                     }}
                  />
                  <Stack.Screen
                     name="matches/index"
                     options={{
                        title: "Maçlar",
                     }}
                  />
               </Stack>
            </AuthCheck>
            <Toast topOffset={110}/>
         </NativeBaseProvider>
      </Provider>
   </>
}

function AuthCheck({children}) {
   const user = useUser()

   if (!user) {
      return <>
         <Redirect href={"/"}/>
         <Stack>
            <Stack.Screen
               name="index"
               options={{
                  title: "",
                  headerShown: false
               }}
            />
            <Stack.Screen
               name="auth/login"
               options={{
                  title: "Giriş Yap"
               }}
            />
            <Stack.Screen
               name="auth/register"
               options={{
                  title: "Kayıt Ol"
               }}
            />
         </Stack>
      </>
   }

   return <>
      <Redirect href={"/(tabs)"}/>
      {children}
   </>
}