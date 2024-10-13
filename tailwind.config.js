/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'poppins-black': ['Poppins-Black', 'system-ui'],
        'poppins-black-italic': ['Poppins-BlackItalic', 'system-ui'],
        'poppins-bold': ['Poppins-Bold', 'system-ui'],
        'poppins-bold-italic': ['Poppins-BoldItalic', 'system-ui'],
        'poppins-extra-bold': ['Poppins-ExtraBold', 'system-ui'],
        'poppins-extra-bold-italic': ['Poppins-ExtraBoldItalic', 'system-ui'],
        'poppins-extra-light': ['Poppins-ExtraLight', 'system-ui'],
        'poppins-extra-light-italic': ['Poppins-ExtraLightItalic', 'system-ui'],
        'poppins-italic': ['Poppins-Italic', 'system-ui'],
        'poppins-light': ['Poppins-Light', 'system-ui'],
        'poppins-light-italic': ['Poppins-LightItalic', 'system-ui'],
        'poppins-medium': ['Poppins-Medium', 'system-ui'],
        'poppins-medium-italic': ['Poppins-MediumItalic', 'system-ui'],
        'poppins-regular': ['Poppins-Regular', 'system-ui'],
        'poppins-semi-bold': ['Poppins-SemiBold', 'system-ui'],
        'poppins-semi-bold-italic': ['Poppins-SemiBoldItalic', 'system-ui'],
        'poppins-thin': ['Poppins-Thin', 'system-ui'],
        'poppins-thin-italic': ['Poppins-ThinItalic', 'system-ui'],
      },
    },
    fontFamily: {
      sans: ['poppins-regular', 'system-ui'],
    },
  },
  plugins: [],
}