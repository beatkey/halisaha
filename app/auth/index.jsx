import {Alert, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Heading, NativeBaseProvider} from "native-base";
import {Link} from "expo-router";

export default function Index() {
   return <>
      <View className={"w-screen h-screen flex"}>
         <ImageBackground
            source={require("../../assets/bg.jpg")}
            className={"w-full h-full"}
            resizeMode={"cover"}
         >
            <View className={"h-full bg-black/50 pb-32 gap-3 flex justify-end items-center"}>
               <Text className={"mb-auto text-white text-5xl font-bold mt-64 tracking-[4px]"}>
                  HALISAHA
               </Text>
               <Link href={"/auth/login"} asChild>
                  <TouchableOpacity
                     activeOpacity={0.7}
                     className="border-white border rounded-lg w-10/12"
                  >
                     <Text className="text-white text-center font-bold py-4">Giriş Yap</Text>
                  </TouchableOpacity>
               </Link>

               <Link href={"/auth/register"} asChild>
                  <TouchableOpacity
                     activeOpacity={0.7}
                     className="border-white border rounded-lg w-10/12"
                  >
                     <Text className="text-white text-center font-bold py-4">Üye Ol</Text>
                  </TouchableOpacity>
               </Link>
            </View>
         </ImageBackground>
      </View>
   </>
}