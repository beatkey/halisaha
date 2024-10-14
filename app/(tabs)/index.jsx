import {SafeAreaView, Text, View} from "react-native";
import {Link, Tabs} from "expo-router";
import {FontAwesome} from "@expo/vector-icons";
import Account from "./account";
import {useUser} from "../../src/stores/hooks";
import {Button} from "native-base";

export default function Home() {
   const user = useUser()

   return <>
      <SafeAreaView>
         <View className={"p-3"}>
            <Text>Merhaba {user?.name}</Text>
         </View>
         <View className={"flex flex-row gap-3 p-3"}>
            <Link href={"/players"} asChild>
               <Button className={"flex-1 h-24"}>
                  <Text className={"text-lg text-white font-semibold"}>
                     Oyuncular
                  </Text>
               </Button>
            </Link>
            <Link href={"/matches"} asChild>
               <Button className={"flex-1 h-24"}>
                  <Text className={"text-lg text-white font-semibold"}>
                     Maçlar
                  </Text>
               </Button>
            </Link>
         </View>
      </SafeAreaView>
   </>
}