import {SafeAreaView, Text, View} from "react-native";
import {Button} from "native-base";
import {Link} from "expo-router";

export default function Players() {
   const players = [
      {
         id: 1,
         name: "Apo",
         position: "Defans"
      },
      {
         id: 2,
         name: "Merto",
         position: "Yedek"
      },
      {
         id: 3,
         name: "Emre",
         position: "Sol Açık"
      }
   ]

   return <>
      <SafeAreaView>
         <View className={"p-4"}>
            <Link href={"/players/addPlayer"} asChild>
               <Button>
                  Oyuncu Ekle
               </Button>
            </Link>
         </View>

         <View className={"px-4"}>
            {players.map((val, index) => {
               return <Link href={`/players/playerDetail?id=${val.id}`}>
                  <View className={"w-full flex flex-row justify-between bg-white rounded-lg p-2 mb-3"}>
                     <View>
                        <Text>{val.name}</Text>
                     </View>
                     <View className={"flex-row gap-1"}>
                        <Text>Pozisyon:</Text>
                        <Text>{val.position}</Text>
                     </View>
                  </View>
               </Link>
            })}
         </View>
      </SafeAreaView>
   </>
}