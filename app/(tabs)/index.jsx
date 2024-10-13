import {SafeAreaView, Text, View} from "react-native";
import {Link, Tabs} from "expo-router";
import {FontAwesome} from "@expo/vector-icons";
import Account from "./account";

export default function Home() {
   /*return <Account/>*/
   return <>
      <SafeAreaView className={"h-full w-screen bg-pink-500"}>
         <Link href={"/account"}>asdasdsada</Link>
      </SafeAreaView>
   </>
}