import { mode } from "@chakra-ui/theme-tools"
import { extendTheme } from "@chakra-ui/react"
const styles = {
  global: (props: any) => ({
    body: {
      color: mode("gray.100", "black")(props),
      bg: mode("#21222D", "#F5F6FA")(props)
    }
  })
}
const colors = {
  main: {
    900: "#363B48",
    800: "#474B58",
    700: "#4F535B",
    600: "#2B313B"
  },
  green: {
    400: "hsl(123, 71%, 40%)",
    600: "hsl(123, 66%, 45%)"
  },
  red: {
    400: "hsl(355deg, 100%, 64%)",
    600: "hhsl(355deg, 95%, 69%)"
  }
}
const components = {}

const theme = extendTheme({
  components,
  styles,
  colors
})

export default theme
