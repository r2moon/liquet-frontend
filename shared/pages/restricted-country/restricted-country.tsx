import React, { Fragment } from "react"
import type { NextPage } from "next"

import MsStatusCard from "shared/components/status-card/status-card"

export const RestrictedCountry: NextPage = () => {
  return (
    <Fragment>
      <div className="ms-restricted">
        <MsStatusCard />
      </div>
    </Fragment>
  )
}
