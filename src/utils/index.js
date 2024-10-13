export const validateEmail = (email) => {
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const isValidLength = email.length >= 1 && email.length <= 100;

   if (!emailPattern.test(email)) {
      return "Geçersiz email formatı!";
   }

   if (email.length < 1) {
      return "Email adresi en az 1 karakter olmalıdır.";
   }

   if (email.length > 100) {
      return "Email adresi en fazla 100 karakter olmalıdır.";
   }

   return null;
};

export const validatePassword = (password) => {
   const isValidLength = password.length >= 1 && password.length <= 100;

   if (password.length < 1) {
      return "Şifre en az 1 karakter olmalıdır.";
   }

   if (password.length > 100) {
      return "Şifre en fazla 100 karakter olmalıdır.";
   }

   return null;
};