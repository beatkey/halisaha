import {Text} from "react-native";
import {Box, Button, Center, FormControl, Input, VStack} from "native-base";

export default function AddPlayer() {
   function onSubmit() {
      alert("dd")
   }

   return <>
      <Center>
         <Box p="2" w="90%">
            <VStack space={3} mt="5">
               <FormControl>
                  <FormControl.Label>Ad Soyad</FormControl.Label>
                  <Input/>
               </FormControl>
               <FormControl>
                  <FormControl.Label>Pozisyon</FormControl.Label>
                  <Input/>
               </FormControl>
               <Button mt="2" colorScheme="indigo" onPress={onSubmit}>
                  Ekle
               </Button>
            </VStack>
         </Box>
      </Center>
   </>
}