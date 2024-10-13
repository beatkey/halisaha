import {useToast as useT} from "native-base";
import Toast from 'react-native-toast-message';

export default function useToast() {
   const t = useT();
   const id = "toast"

   return (title, type = "default") => {
      Toast.show({
         type: 'error',
         text1: 'Hello',
      });
   };
}