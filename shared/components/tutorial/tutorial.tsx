import React, { Fragment, ReactElement, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Image } from "@chakra-ui/react"

import { Routes } from "shared/pages/routes"
import Translation from "shared/data/translation"
import useDocumentDimensions from "shared/helper/dimension.helper"
import MlTutorialStart from "./tutorial-start"

export enum TutorialQueryState {
  Play = `play`,
  Finish = `finish`
}

export interface MlStepContentProps {
  stepContent: {
    title?: string
    description?: string
  }
}
export interface MlStepActionProps {
  action: (step: number) => void
  tutorialStep: number
  finish?: boolean
}

const MlStepContent = ({ stepContent }: MlStepContentProps): ReactElement => {
  return (
    <Fragment>
      <h2 className="ml-tutorial__step__title">{stepContent.title}</h2>
      <p className="ml-tutorial__step__description">{stepContent.description}</p>
    </Fragment>
  )
}

const MlStepAction = ({ action, tutorialStep, finish = false }: MlStepActionProps): ReactElement => {
  return (
    <Fragment>
      <button
        className={`ml-button ml-button--small ml-tutorial__button${!finish ? ` ml-button--alt` : ``}`}
        onClick={() => action(tutorialStep + 1)}
      >
        {finish ? Translation.en.page.tutorial.finish : Translation.en.common.next}
      </button>
      <div className="ml-tutorial__step__counter">
        <span className="ml-tutorial__step__counter__current">{tutorialStep}</span>
        <span className="ml-tutorial__step__counter__all">
          / {Object.keys(Translation.en.page.tutorial.stepList).length - 1}
        </span>
      </div>
    </Fragment>
  )
}

function MlTutorial(): ReactElement {
  const router = useRouter()
  const { tutorial } = router.query
  const isTradeInView = router.asPath === Routes.home || router.asPath.includes(Routes.trade)
  const [isCompleted, setIsCompleted] = useState(true)
  const [tutorialStep, setTutorialStep] = useState(0)
  const tutorialStyles = {
    height: useDocumentDimensions().fullHeight
  }

  const navigateTo = (step: number): void => {
    setTutorialStep(step)
  }
  const finishTutorial = (): void => {
    setIsCompleted(true)
    // TODO: We should store this value based in walletID too
    localStorage.setItem(`isTutorialCompleted`, `true`)
  }
  const resetTutorial = (): void => {
    localStorage.setItem(`isTutorialCompleted`, `false`)
    setIsCompleted(false)
  }

  useEffect(() => {
    switch (tutorial) {
      case TutorialQueryState.Play:
        resetTutorial()
        break
      case TutorialQueryState.Finish:
        finishTutorial()
        break
    }
  }, [tutorial])

  useEffect(() => {
    setIsCompleted(localStorage.getItem(`isTutorialCompleted`) === `true`)
    const isTermsAlreadyAccepted = localStorage.getItem(`isTermsAccepted`) === `true`
    if (isTermsAlreadyAccepted && tutorialStep === 0) navigateTo(1)
  }, [tutorialStep])

  if (isTradeInView && !isCompleted) {
    return (
      <div className={`ml-tutorial ml-tutorial--step-${tutorialStep}`} style={tutorialStyles}>
        <div className="ml-tutorial__overlay"></div>

        <div
          className={`ml-tutorial__step${
            tutorialStep === 0 ? ` ml-tutorial__step--active` : ``
          } ml-tutorial__step--dialog`}
        >
          <MlTutorialStart {...{ tutorialStep, navigateTo }} />
        </div>

        <div
          className={`ml-tutorial__step${
            tutorialStep === 1 ? ` ml-tutorial__step--active` : ``
          } ml-tutorial__step--dialog`}
        >
          <div className="ml-tutorial__dialog ml-card">
            <div className="ml-tutorial__step__content">
              <Image
                className="ml-tutorial__step__image"
                src="/images/tutorial/tutorial-wallet.png"
                alt="Wallet"
              />
              <MlStepContent {...{ stepContent: Translation.en.page.tutorial.stepList.step1 }} />
            </div>
            <div className="ml-tutorial__step__action">
              <MlStepAction {...{ tutorialStep, action: navigateTo }} />
            </div>
          </div>
        </div>

        <div className={`ml-tutorial__step${tutorialStep === 2 ? ` ml-tutorial__step--active` : ``}`}>
          <div className="ml-tutorial__helper ml-tutorial__helper--left-top ml-card">
            <div className="ml-tutorial__step__content">
              <MlStepContent {...{ stepContent: Translation.en.page.tutorial.stepList.step2 }} />
            </div>
            <div className="ml-tutorial__step__action ml-tutorial__step__action--inline">
              <MlStepAction {...{ tutorialStep, action: navigateTo }} />
            </div>
          </div>
        </div>

        <div className={`ml-tutorial__step${tutorialStep === 3 ? ` ml-tutorial__step--active` : ``}`}>
          <div className="ml-tutorial__helper ml-tutorial__helper--left-top ml-card">
            <div className="ml-tutorial__step__content">
              <MlStepContent {...{ stepContent: Translation.en.page.tutorial.stepList.step3 }} />
            </div>
            <div className="ml-tutorial__step__action ml-tutorial__step__action--inline">
              <MlStepAction {...{ tutorialStep, action: navigateTo }} />
            </div>
          </div>
        </div>

        <div className={`ml-tutorial__step${tutorialStep === 4 ? ` ml-tutorial__step--active` : ``}`}>
          <div className="ml-tutorial__helper ml-tutorial__helper--left-top ml-card">
            <div className="ml-tutorial__step__content">
              <MlStepContent {...{ stepContent: Translation.en.page.tutorial.stepList.step4 }} />
            </div>
            <div className="ml-tutorial__step__action ml-tutorial__step__action--inline">
              <MlStepAction {...{ tutorialStep, action: navigateTo }} />
            </div>
          </div>
        </div>

        <div className={`ml-tutorial__step${tutorialStep === 5 ? ` ml-tutorial__step--active` : ``}`}>
          <div className="ml-tutorial__helper ml-tutorial__helper--left-top ml-card">
            <div className="ml-tutorial__step__content">
              <MlStepContent {...{ stepContent: Translation.en.page.tutorial.stepList.step5 }} />
            </div>
            <div className="ml-tutorial__step__action ml-tutorial__step__action--inline">
              <MlStepAction {...{ tutorialStep, action: navigateTo }} />
            </div>
          </div>
        </div>

        <div className={`ml-tutorial__step${tutorialStep === 6 ? ` ml-tutorial__step--active` : ``}`}>
          <div className="ml-tutorial__helper ml-tutorial__helper--left-bottom ml-card">
            <div className="ml-tutorial__step__content">
              <MlStepContent {...{ stepContent: Translation.en.page.tutorial.stepList.step6 }} />
            </div>
            <div className="ml-tutorial__step__action ml-tutorial__step__action--inline">
              <MlStepAction {...{ tutorialStep, action: navigateTo }} />
            </div>
          </div>
        </div>

        <div className={`ml-tutorial__step${tutorialStep === 7 ? ` ml-tutorial__step--active` : ``}`}>
          <div className="ml-tutorial__helper ml-tutorial__helper--bottom-left ml-card">
            <div className="ml-tutorial__step__content">
              <MlStepContent {...{ stepContent: Translation.en.page.tutorial.stepList.step7 }} />
            </div>
            <div className="ml-tutorial__step__action ml-tutorial__step__action--inline">
              <MlStepAction {...{ tutorialStep, action: finishTutorial, finish: true }} />
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <Fragment />
  }
}

export default MlTutorial
