import { Box } from "@chakra-ui/react"

const Main: React.FC = ({ children }) => (
  <Box as="main" flex="1 0 auto">
    {children}
  </Box>
)

export default Main
