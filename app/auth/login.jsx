import {Text, View} from "react-native";
import {
   Box,
   Button,
   Center,
   FormControl,
   Heading,
   HStack,
   Input,
   NativeBaseProvider,
   VStack
} from "native-base";
import {Link} from "expo-router";
import useToast from "../../hooks/useToast";
import {useState} from "react";
import {validateEmail, validatePassword} from "../../utils";

export default function Login() {
   const toast = useToast()
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")

   const onSubmit = () => {
      const emailError = validateEmail(email);
      const passwordError = validatePassword(password);

      if (emailError || passwordError) {
         toast(emailError || passwordError, "warning");
         return;
      }

      console.log(email, password)
   };

   return <>
      <Center w="100%">
         <Box safeArea p="2" py="8" w="90%" maxW="290">
            <VStack space={3} mt="5">
               <FormControl>
                  <FormControl.Label>E-Posta</FormControl.Label>
                  <Input isRequired={true} onChangeText={(val) => setEmail(val)}/>
               </FormControl>
               <FormControl>
                  <FormControl.Label>Şifre</FormControl.Label>
                  <Input type="password" onChangeText={(val) => setPassword(val)}/>
               </FormControl>
               <Button mt="2" colorScheme="indigo" onPress={onSubmit}>
                  Giriş Yap
               </Button>
               <HStack mt="6" justifyContent="center">
                  <Text fontSize="sm" color="coolGray.600" _dark={{
                     color: "warmGray.200"
                  }}>
                     Henüz hesabım yok.{" "}
                  </Text>
                  <Link className={"underline"} _text={{
                     color: "indigo.500",
                     fontWeight: "medium",
                     fontSize: "sm",
                  }} href="/auth/register">
                     Kayıt Ol
                  </Link>
               </HStack>
            </VStack>
         </Box>
      </Center>
   </>
}