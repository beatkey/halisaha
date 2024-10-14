import {Text} from "react-native";
import {Link, router} from "expo-router";
import {Box, Button, Center, FormControl, HStack, Input, VStack} from "native-base";
import {useUser} from "../../../src/stores/hooks";
import {validateEmail, validatePassword} from "../../../src/utils";
import {useState} from "react";
import useToast from "../../../src/hooks/useToast";

export default function EditProfile() {
   const toast = useToast()
   const user = useUser()
   const [password, setPassword] = useState("")

   const onSubmit = () => {
      console.log("dd")
      return;
      const passwordError = validatePassword(password);

      if (passwordError) {
         toast(passwordError, "warning");
         return;
      }

      console.log(email, password)
   };

   return <>
      <Center>
         <Box p="2" w="90%">
            <VStack space={3} mt="5">
               <FormControl>
                  <FormControl.Label>E-Posta</FormControl.Label>
                  <Input value={user?.email} isDisabled={true} />
               </FormControl>
               <FormControl>
                  <FormControl.Label>Ad Soyad</FormControl.Label>
                  <Input value={user?.name} />
               </FormControl>
               <FormControl>
                  <FormControl.Label>Pozisyon</FormControl.Label>
                  <Input value={user?.position} />
               </FormControl>
               <FormControl>
                  <FormControl.Label>Şifre</FormControl.Label>
                  <Input type="password" onChangeText={(val) => setPassword(val)}/>
               </FormControl>
               <Button mt="2" colorScheme="indigo" onPress={onSubmit}>
                  Güncelle
               </Button>
            </VStack>
         </Box>
      </Center>
   </>
}