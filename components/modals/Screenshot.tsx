import { Modal, ModalOverlay, ModalContent, ModalFooter, ModalBody } from "@chakra-ui/react"
import { useCallback, useRef, useState } from "react"
import { useAppSelector } from "redux/hooks"
import { Position } from "common/types"
import moment from "moment"
import * as htmlToImage from "html-to-image"

import { format } from "utils/math"
import Translation from "shared/data/translation"
import WhiteLogo from "../../assets/svg/white-logo.svg"
import MatrixPerpQrCode from "../../assets/svg/matrix-perp-qr-code.svg"
import SharePerpLogo from "../../assets/svg/share-perp-logo.svg"

export type ScreenshotProps = {
  isOpen: boolean
  onClose: () => void
  position: Position
}

export type ScreenshotOptionItem = {
  key: string
  label: string
}
export interface ScreenshotShareInfoProps {
  [key: string]: boolean
}

const DEFAULT_STABLE_PAIR = `USDC`

const Screenshot: React.FC<ScreenshotProps> = ({ isOpen, onClose, position }: ScreenshotProps) => {
  const shareCardRef = useRef<HTMLDivElement>(null)
  const { variableData } = useAppSelector((state) => state.ProtocolState)
  const { asset, side, leverage, entryPrice, pnl, margin } = position
  const { markPrice } = variableData
  const [shareInfo, setShareInfo] = useState({
    leverage: true,
    pnlAmount: true,
    price: true
  } as ScreenshotShareInfoProps)
  const optionList: ScreenshotOptionItem[] = [
    {
      key: `leverage`,
      label: Translation.en.common.leverage
    },
    {
      key: `pnlAmount`,
      label: Translation.en.common.pnlAmount
    },
    {
      key: `price`,
      label: Translation.en.common.price
    }
  ]
  const getCurrentDateTime = (): string => {
    return moment().format(`MM/DD/YYYY hh:mm`)
  }
  const changeShareInfo = (key: string): void => {
    const currentData = JSON.parse(JSON.stringify(shareInfo))
    const changedData = Object.assign(currentData, { [key]: !shareInfo[key] })
    setShareInfo(changedData)
  }
  const download = useCallback(() => {
    if (shareCardRef.current === null) {
      return
    }
    htmlToImage
      .toPng(shareCardRef.current, {
        cacheBust: true
      })
      .then((dataUrl) => {
        const link = document.createElement(`a`)
        link.download = `matrix-perp-share-card.png`
        link.href = dataUrl
        link.click()
      })
  }, [shareCardRef])
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent className={`ml-screenshot`}>
        <ModalBody>
          <div ref={shareCardRef} className="ml-screenshot__card">
            <div className="ml-screenshot__content">
              <WhiteLogo className="ml-screenshot__logo" />
              <p className="ml-screenshot__details">
                <span className="ml-screenshot__details__item ml-screenshot__details__item--highlighted">
                  {side}
                </span>
                <span className="ml-screenshot__details__item">
                  {Translation.en.common.leverage} {shareInfo.leverage ? `${format(leverage)}x` : `***`}
                </span>
                <span className="ml-screenshot__details__item">
                  {asset}
                  {DEFAULT_STABLE_PAIR} {Translation.en.common.perpetual}
                </span>
              </p>
              <p className={`ml-screenshot__gains${pnl.lt(0) ? ` ml-screenshot__gains--negative` : ``}`}>
                <span className="ml-screenshot__gains__ratio">{format(pnl.mul(100).div(margin))}%</span>
                <span className="ml-screenshot__gains__value">
                  ({shareInfo.pnlAmount ? format(pnl) : `*****`} {DEFAULT_STABLE_PAIR})
                </span>
              </p>
              <ul className="ml-screenshot__prices">
                <li className="ml-screenshot__prices__item">
                  <span className="ml-screenshot__label">
                    {Translation.en.component.screenshot.entryPrice}
                  </span>
                  <span className="ml-screenshot__value">
                    {shareInfo.price ? format(entryPrice) : `*****`}
                  </span>
                </li>
                <li className="ml-screenshot__prices__item">
                  <span className="ml-screenshot__label">
                    {Translation.en.component.screenshot.markPrice}
                  </span>
                  <span className="ml-screenshot__value">
                    {shareInfo.price ? format(markPrice) : `*****`}
                  </span>
                </li>
              </ul>
              <MatrixPerpQrCode className="ml-screenshot__qr-code" />
            </div>
            <div className="ml-screenshot__side">
              <SharePerpLogo className="ml-screenshot__visual" />
              <p className="ml-screenshot__datetime ml-screenshot__label">
                <span>{Translation.en.component.screenshot.timeStamp}:</span>
                <time dateTime={getCurrentDateTime()}>{getCurrentDateTime()}</time>
              </p>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="ml-screenshot__options">
            <label className="ml-screenshot__options__label">
              {Translation.en.component.screenshot.optionalInfo}
            </label>
            <ul className="ml-screenshot__options__list">
              {optionList.map((option, index) => {
                return (
                  <li key={index} className="ml-screenshot__options__field">
                    <label className="ml-checkbox-field">
                      <span className="ml-checkbox-field__text">{option.label}</span>
                      <input
                        type="checkbox"
                        className="ml-checkbox-field__input"
                        aria-label={Translation.en.page.tutorial.stepList.step0.agreement_html}
                        onChange={() => changeShareInfo(option.key)}
                        checked={shareInfo[option.key]}
                        required
                      />
                      <span className="ml-checkbox-field__checkmark"></span>
                    </label>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="ml-screenshot__action">
            <button className="ml-button ml-button--small ml-button--modal ml-button--alt" onClick={onClose}>
              {Translation.en.common.cancel}
            </button>
            <button className="ml-button ml-button--small ml-button--modal" onClick={download}>
              {Translation.en.common.download}
            </button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default Screenshot
