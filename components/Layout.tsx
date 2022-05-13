import { Fragment } from "react"

import Header from "./Header"
import MlTutorial from "shared/components/tutorial/tutorial"

const Layout: React.FC = ({ children }) => {
  return (
    <Fragment>
      <MlTutorial />
      <div className="ms-layout">
        <div className="ms-layout__bg"></div>
        <div className="ms-layout__header">
          <Header />
        </div>
        <div className="ms-layout__content">{children}</div>
      </div>
    </Fragment>
  )
}

export default Layout
