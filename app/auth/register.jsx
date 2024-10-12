import {Box, Button, Center, FormControl, Heading, HStack, Input, NativeBaseProvider, VStack} from "native-base";

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
            </VStack>
         </Box>
      </Center>
   </>
}