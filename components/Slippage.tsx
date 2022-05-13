import { Box, Text, Flex, InputGroup, InputRightAddon, Input } from "@chakra-ui/react"
import { SLIPPAGE_REGEX } from "common"
import { SlippageType } from "common/types"
import { Dispatch, SetStateAction } from "react"

const Slippage: React.FC<{ slippage: SlippageType; setSlippage: Dispatch<SetStateAction<SlippageType>> }> = ({
  slippage,
  setSlippage
}) => {
  const onCustomSlippage = (slippage: SlippageType) => {
    const match = slippage.val.match(SLIPPAGE_REGEX)
    if (match) {
      setSlippage(slippage)
    }
  }
  return (
    <Box className="ms-slippage">
      <Text>Slippage Tolerance</Text>
      <Box className="ms-slippage__wrap">
        <Flex
          className={`ms-slippage__item${slippage.type === 0 ? ` ms-slippage__item--active` : ``}`}
          onClick={() => {
            setSlippage({ type: 0, val: "0.1" })
          }}
        >
          <Text m="auto 0">0.1%</Text>
        </Flex>
        <Flex
          className={`ms-slippage__item${slippage.type === 1 ? ` ms-slippage__item--active` : ``}`}
          onClick={() => {
            setSlippage({ type: 1, val: "0.5" })
          }}
        >
          <Text m="auto 0">0.5%</Text>
        </Flex>
        <Flex
          className={`ms-slippage__item${slippage.type === 2 ? ` ms-slippage__item--active` : ``}`}
          onClick={() => {
            setSlippage({ type: 2, val: "1" })
          }}
        >
          <Text m="auto 0">1%</Text>
        </Flex>
        <Flex className="ms-slippage__item ms-slippage__item--custom">
          <Text p="0 0.5rem 0 0">Custom</Text>
          <InputGroup size="sm">
            <Input
              className="ms-input ms-input--small"
              value={slippage.val}
              onChange={(event) => onCustomSlippage({ type: 3, val: event.currentTarget.value })}
            />
            {/* eslint-disable-next-line react/no-children-prop */}
            <InputRightAddon className="ms-input-addon ms-input-addon--small" children="%" />
          </InputGroup>
        </Flex>
      </Box>
    </Box>
  )
}

export default Slippage
