import {ImageBackground, Text, View} from "react-native";
import {Button, Image} from "native-base";
import {Link} from "expo-router";

export default function Account() {
   return <>
      <View className={"flex-1 bg-[#0c1828]"}>
         <View>
            <Image
               source={{uri: "https://iasbh.tmgrup.com.tr/8983b9/650/344/0/48/1000/574?u=https://isbh.tmgrup.com.tr/sbh/2017/12/11/besiktasin-zorlu-fiksturu-1513001379056.jpg"}}
               className={"w-full h-60 absolute"}
               alt={""}
            />
            <View className={"flex flex-row items-center mt-44"}>
               <View className={"w-40 h-40 border-[6px] border-[#0c1828] bg-white rounded-full overflow-hidden ml-6"}>
                  <Image
                     source={{uri: "https://cdn.fifacm.com/content/media/imgs/fifa21/players/p20775.png?v=22"}}
                     className={"w-full h-full"}
                     alt={""}
                  />
               </View>
               <View className={"flex-1 px-5 pt-12"}>
                  <Text className={"text-white text-2xl font-bold line-clamp-1"}>Ricardo Quaresmckxzmckxzmcmkza</Text>
                  <Text className={"text-white font-poppins-regular line-clamp-1"}>Sol Açık</Text>
               </View>
            </View>
         </View>

         <View className={"mt-3 px-7"}>
            <Link href={"/(tabs)/account/editProfile"} asChild>
               <Button className={"!bg-white"}>
                  <Text className={"text-black"}>Profili Düzenle</Text>
               </Button>
            </Link>
         </View>
      </View>
   </>
}