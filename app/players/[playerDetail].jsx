import {Text} from "react-native";
import {useLocalSearchParams} from "expo-router";

export default function PlayerDetail() {
   const {id} = useLocalSearchParams()

   return <>
      <Text>asda {id}</Text>
   </>
}