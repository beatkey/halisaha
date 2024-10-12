import {Alert, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NativeBaseProvider} from "native-base";
import {Link} from "expo-router";

export default function Auth() {
   return <>
      <NativeBaseProvider>
         <View className={"w-screen h-screen flex"}>
            <ImageBackground
               source={require("../../assets/bg.jpg")}
               className={"w-full h-full"}
               resizeMode={"cover"}
            >
               <View className={"h-full pb-32 gap-3 flex justify-end items-center"}>
                  <Link href={"/auth/login"} asChild>
                     <TouchableOpacity
                        activeOpacity={0.7}
                        className="bg-white rounded-lg w-10/12"
                     >
                        <Text className="text-black text-center font-bold py-4">Giriş Yap</Text>
                     </TouchableOpacity>
                  </Link>

                  <Link href={"/auth/register"} asChild>
                     <TouchableOpacity
                        activeOpacity={0.7}
                        className="bg-white rounded-lg w-10/12"
                     >
                        <Text className="text-black text-center font-bold py-4">Üye Ol</Text>
                     </TouchableOpacity>
                  </Link>
               </View>
            </ImageBackground>
         </View>
      </NativeBaseProvider>
   </>
}