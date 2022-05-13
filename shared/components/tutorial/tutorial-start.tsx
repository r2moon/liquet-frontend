import React, { ReactElement, useCallback, useEffect, useState } from "react"

import Translation from "shared/data/translation"

export type MlTutorialStartProps = {
  tutorialStep: number
  navigateTo: (step: number) => void
}
export interface MlAgreementProps {
  terms: boolean
}

function MlTutorialStart({ tutorialStep, navigateTo }: MlTutorialStartProps): ReactElement {
  const [touched, setTouched] = useState(false)
  const [errors, setErrors] = useState({
    notApproved: false
  })
  const [data, setData] = useState({
    terms: false
  } as MlAgreementProps)

  const checkData = useCallback((): boolean => {
    const agreementNotApproved = !!data.terms
    setErrors((prevState) => ({
      ...prevState,
      notApproved: !agreementNotApproved
    }))
    return agreementNotApproved
  }, [data.terms])
  const changeData = (terms: boolean): void => {
    setData({
      terms
    })
  }
  const agreeAndStart = (): void => {
    setTouched(true)
    if (checkData()) {
      // TODO: We should store this value based in walletID too
      localStorage.setItem(`isTermsAccepted`, `true`)
      navigateTo(tutorialStep + 1)
    }
  }

  useEffect(() => {
    if (touched) checkData()
  }, [data, touched, checkData])

  return (
    <div className="ml-tutorial__dialog ml-card">
      <div className="ml-tutorial__step__content">
        <h2 className="ml-tutorial__step__title">{Translation.en.page.tutorial.stepList.step0.title}</h2>
        <ul className="ml-tutorial__step__info-list">
          {Object.values(Translation.en.page.tutorial.stepList.step0.description).map((info, index) => (
            <li
              key={index}
              className="ml-tutorial__step__info-item"
              dangerouslySetInnerHTML={{ __html: info }}
            />
          ))}
        </ul>
        <p className="ml-tutorial__step__agreement">
          <label className="ml-checkbox-field">
            <span
              className="ml-checkbox-field__text"
              dangerouslySetInnerHTML={{ __html: Translation.en.page.tutorial.stepList.step0.agreement_html }}
            />
            <input
              type="checkbox"
              className="ml-checkbox-field__input"
              aria-label={Translation.en.page.tutorial.stepList.step0.agreement_html}
              onChange={(e) => changeData(e.target.checked)}
              checked={data.terms}
              required
            />
            <span className="ml-checkbox-field__checkmark"></span>
            <span
              className={`ml-checkbox-field__error${
                errors.notApproved ? ` ml-checkbox-field__error--active` : ``
              }`}
            >
              {Translation.en.page.tutorial.stepList.step0.agreementError}
            </span>
          </label>
        </p>
      </div>
      <div className="ml-tutorial__step__action">
        <button className="ml-button ml-button--small ml-tutorial__button" onClick={() => agreeAndStart()}>
          {Translation.en.page.tutorial.stepList.step0.action}
        </button>
      </div>
    </div>
  )
}

export default MlTutorialStart
