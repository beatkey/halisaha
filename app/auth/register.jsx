import {Box, Button, Center, FormControl, Heading, HStack, Input, NativeBaseProvider, VStack} from "native-base";
import {Text} from "react-native";
import {Link} from "expo-router";

export default function Register() {
   return <>
      <Center w="100%">
         <Box safeArea p="2" w="90%" maxW="290" py="8">
            <VStack space={3} mt="5">
               <FormControl>
                  <FormControl.Label>E-Posta</FormControl.Label>
                  <Input />
               </FormControl>
               <FormControl>
                  <FormControl.Label>Şifre</FormControl.Label>
                  <Input type="password" />
               </FormControl>
               <FormControl>
                  <FormControl.Label>Şifreni Doğrula</FormControl.Label>
                  <Input type="password" />
               </FormControl>
               <Button mt="2" colorScheme="indigo">
                  Kayıt Ol
               </Button>
               <HStack mt="6" justifyContent="center">
                  <Text fontSize="sm" color="coolGray.600" _dark={{
                     color: "warmGray.200"
                  }}>
                     Hesabım var.{" "}
                  </Text>
                  <Link className={"underline"} _text={{
                     color: "indigo.500",
                     fontWeight: "medium",
                     fontSize: "sm",
                  }} href="/auth/login">
                     Giriş Yap
                  </Link>
               </HStack>
            </VStack>
         </Box>
      </Center>
   </>
}