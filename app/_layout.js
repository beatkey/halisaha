import {Slot} from "expo-router";
import {NativeBaseProvider} from "native-base";

import "../global.css"

export default function AppLayout() {
   return <>
      <NativeBaseProvider>
         <Slot/>
      </NativeBaseProvider>
   </>
}
