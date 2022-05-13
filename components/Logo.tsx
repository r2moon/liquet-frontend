import React, { ReactElement } from "react"
import { useRouter } from "next/router"

import WhiteLogo from "../assets/svg/white-logo.svg"

export interface MsLogoProps {}

const HOME_URL = `https://vivo.finance`

function MsLogo({ ..._props }: MsLogoProps): ReactElement {
  const router = useRouter()
  const handleStakingRedirect = () => {
    if (router.isReady) {
      if (router.pathname === "/stake") {
        router.push("/trade/ftm")
      } else {
        router.push("/stake")
      }
    }
  }
  return (
    <div className="ms-logo">
      <a className="ms-logo__link" href={HOME_URL} target="_blank" rel="noopener noreferrer">
        <WhiteLogo className="ms-logo__icon" />
      </a>
      {/* <button onClick={handleStakingRedirect} className="ms-button ms-button--small">
        {router.pathname === "/stake" ? "Perpetual DEX" : "Stake"}
      </button> */}
    </div>
  )
}

export default MsLogo
