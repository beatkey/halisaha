import {Text, View} from "react-native";
import {NativeBaseProvider} from "native-base";

export default function Login() {
   return <>
      <NativeBaseProvider>
         <View className={"w-screen h-screen flex"}>
            <Text>logindsds</Text>
         </View>
      </NativeBaseProvider>
   </>
}