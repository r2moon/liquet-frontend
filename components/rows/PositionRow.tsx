import { Box, Flex, Text, useDisclosure, Center } from "@chakra-ui/react"
import { useState } from "react"

import { useAppSelector } from "redux/hooks"
import { format } from "../../utils/math"
import MarginMgtModal from "../modals/MarginMgt"
import CloseModal from "../modals/ClosePosition"
import Screenshot from "../modals/Screenshot"
import Translation from "shared/data/translation"

export const PositionRow: React.FC<{ tab: number }> = ({ tab }) => {
  const { isOpen: isOpenMarginMgt, onOpen: onOpenMarginMgt, onClose: onCloseMarginMgt } = useDisclosure() // from chakra ui modal
  const { isOpen: isOpenClosePos, onOpen: onOpenClosePos, onClose: onCloseClosePos } = useDisclosure() // from chakra ui modal
  const { isOpen: isOpenScreenshot, onOpen: onOpenScreenshot, onClose: onCloseScreenshot } = useDisclosure()
  const positions = useAppSelector((state) => state.PositionState)

  const [positionForMarginMgt, setPositionForMarginMgt] = useState<any>()
  const [positionToClose, setPositionToClose] = useState<any>()
  const [positionToScreenshot, setPositionToScreenshot] = useState<any>()

  const renderPositionInfo = () => {
    return Object.values(positions).map(
      (position, index) =>
        position.size.gt(0) && (
          <Flex
            className={`ms-table__row${index % 2 ? ` ms-table__row--even` : ``}`}
            flexDirection="row"
            key={position.asset}
          >
            <Flex w="150px" flexDirection="row">
              <label className="ms-helper__only-mobile">{Translation.en.page.trade.header.actions}</label>
              <Center
                className="ms-button ms-button--action"
                onClick={() => {
                  setPositionForMarginMgt(position)
                  onOpenMarginMgt()
                }}
              >
                Margin
              </Center>
              <Center
                className="ms-button ms-button--action"
                onClick={() => {
                  setPositionToClose(position)
                  onOpenClosePos()
                }}
              >
                Close
              </Center>
            </Flex>
            <Text fontSize="12px" w="10%" m="auto 0">
              <label className="ms-helper__only-mobile">{Translation.en.page.trade.header.asset}</label>
              {position.asset}
            </Text>
            <Text
              fontSize="12px"
              w="10%"
              color={position.side === "short" ? "red.400" : "green.400"}
              fontWeight="bold"
              m="auto 0"
            >
              <label className="ms-helper__only-mobile">{Translation.en.page.trade.header.side}</label>
              {position.side === "short" ? "SHORT" : "LONG"}
            </Text>
            <Text fontSize="12px" w="10%" m="auto 0">
              <label className="ms-helper__only-mobile">{Translation.en.page.trade.header.posSize}</label>
              {format(position.size, 4)}
            </Text>
            <Text fontSize="12px" w="10%" m="auto 0">
              <label className="ms-helper__only-mobile">{Translation.en.page.trade.header.leverage}</label>
              {format(position.leverage)} X
            </Text>
            <Text fontSize="12px" w="10%" m="auto 0">
              <label className="ms-helper__only-mobile">{Translation.en.page.trade.header.entryPrice}</label>
              {format(position.entryPrice)}
            </Text>
            <Text fontSize="12px" w="10%" m="auto 0">
              <label className="ms-helper__only-mobile">{Translation.en.page.trade.header.liqPrice}</label>
              {position.liquidationPrice.gt(0) ? format(position.liquidationPrice) : "-"}
            </Text>
            <Text fontSize="12px" w="10%" m="auto 0">
              <label className="ms-helper__only-mobile">{Translation.en.page.trade.header.margin}</label>
              {format(position.margin)}
            </Text>
            <Text fontSize="12px" w="10%" m="auto 0">
              <label className="ms-helper__only-mobile">{Translation.en.page.trade.header.marginRatio}</label>
              {format(position.marginRatio)} %
            </Text>
            <Text fontSize="12px" w="10%" m="auto 0" color={position.pnl.gt(0) ? "green.400" : "red.400"}>
              <label className="ms-helper__only-mobile">{Translation.en.page.trade.header.pnl}</label>
              {format(position.pnl, 4)}
            </Text>
          </Flex>
        )
    )
  }

  return (
    <Box className="ms-table ms-table--card-on-mobile" display={tab !== 0 ? "none" : "block"}>
      {positionForMarginMgt && (
        <MarginMgtModal isOpen={isOpenMarginMgt} onClose={onCloseMarginMgt} position={positionForMarginMgt} />
      )}
      {positionToClose && (
        <CloseModal isOpen={isOpenClosePos} onClose={onCloseClosePos} position={positionToClose} />
      )}
      {positionToScreenshot && (
        <Screenshot isOpen={isOpenScreenshot} onClose={onCloseScreenshot} position={positionToScreenshot} />
      )}
      <Flex className="ms-table__header ms-helper__not-mobile" flexDirection="row">
        <Text fontSize="12px" w="150px">
          {Translation.en.page.trade.header.actions}
        </Text>
        <Text fontSize="12px" w="10%">
          {Translation.en.page.trade.header.asset}
        </Text>
        <Text fontSize="12px" w="10%">
          {Translation.en.page.trade.header.side}
        </Text>
        <Text fontSize="12px" w="10%">
          {Translation.en.page.trade.header.posSize}
        </Text>
        <Text fontSize="12px" w="10%">
          {Translation.en.page.trade.header.leverage}
        </Text>
        <Text fontSize="12px" w="10%">
          {Translation.en.page.trade.header.entryPrice}
        </Text>
        <Text fontSize="12px" w="10%">
          {Translation.en.page.trade.header.liqPrice}
        </Text>
        <Text fontSize="12px" w="10%">
          {Translation.en.page.trade.header.margin}
        </Text>
        <Text fontSize="12px" w="10%">
          {Translation.en.page.trade.header.marginRatio}
        </Text>
        <Text fontSize="12px" w="10%">
          {Translation.en.page.trade.header.pnl}
        </Text>
        <Text fontSize="12px" w="10%">
          {Translation.en.page.trade.header.share}
        </Text>
      </Flex>
      <Box className="ms-table__content">{renderPositionInfo()}</Box>
    </Box>
  )
}
