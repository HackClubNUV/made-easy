// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"
// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    brand: {
      100: "#37474F",
      // ...
      900: "#EA4335",
    },
  },
})

export default theme;