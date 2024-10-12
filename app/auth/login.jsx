import {Text, View} from "react-native";
import {Box, Button, Center, FormControl, Heading, HStack, Input, NativeBaseProvider, VStack} from "native-base";
import {Link} from "expo-router";

export default function Login() {
   return <>
      <Center w="100%">
         <Box safeArea p="2" py="8" w="90%" maxW="290">
            <VStack space={3} mt="5">
               <FormControl>
                  <FormControl.Label>E-Posta</FormControl.Label>
                  <Input />
               </FormControl>
               <FormControl>
                  <FormControl.Label>Şifre</FormControl.Label>
                  <Input type="password" />
               </FormControl>
               <Button mt="2" colorScheme="indigo">
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