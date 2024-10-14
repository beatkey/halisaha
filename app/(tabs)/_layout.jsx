import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Stack, Tabs} from 'expo-router';
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function TabLayout() {
   return (
      <Tabs screenOptions={{tabBarActiveTintColor: 'blue'}}>
         <Tabs.Screen
            name="index"
            options={{
               title: 'Anasayfa',
               headerShown: false,
               tabBarIcon: ({color}) => <FontAwesome size={28} name="home" color={color}/>,
            }}
         />
         <Tabs.Screen
            name="account"
            options={{
               title: 'Hesabım',
               headerShown: false,
               tabBarIcon: ({color}) => <MaterialCommunityIcons size={28} name="account" color={color}/>,
            }}
         />
      </Tabs>
   );
}