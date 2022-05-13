import { ExternalRoutes } from "shared/pages/routes"

/*
  NOTE:
  This object sole purpose is to gather the static strings together 
  and serve as a base for a possible future multi language support.
*/
export const Translation = {
  en: {
    common: {
      next: `Next`,
      cancel: `Cancel`,
      download: `Download`,
      leverage: `Leverage`,
      perpetual: `Perpetual`,
      pnlAmount: `PNL Amount`,
      price: `Price`
    },
    error: {},
    menu: {},
    header: {},
    footer: {},
    social: {
      telegram: `Telegram`,
      twitter: `Twitter`,
      discord: `Discord`,
      medium: `Medium`
    },
    component: {
      screenshot: {
        entryPrice: `Entry Price`,
        markPrice: `Mark Price`,
        timeStamp: `Time Stamp`,
        optionalInfo: `Optional information to share`
      }
    },
    page: {
      tutorial: {
        finish: `Finish tutorial`,
        stepList: {
          step0: {
            title: `Welcome to MatrixPerp!`,
            description: {
              info1_html: `MatrixPerp is a decentralized perpetual contract protocol using virtual AMMs to provide guaranteed liquidity.`,
              info2_html: `If you encounter bugs, please report them in the feedback channel in <a href='${ExternalRoutes.social.discord}' target='_blank' rel='noopener noreferrer'>our Discord</a>.`,
              info3_html: `If you’re new to Defi or trading derivatives, here is a <a href='${ExternalRoutes.document.perpTutorial}' target='_blank' rel='noopener noreferrer'>tutorial</a> on how to use MatrixPerp.`,
              info4_html: `For more technical information, please read our <a href='${ExternalRoutes.document.perpDocs}' target='_blank' rel='noopener noreferrer'>official documentation</a>.`
            },
            agreement_html: `I have agreed to the <a href='${ExternalRoutes.document.termsOfUse}' target='_blank' rel='noopener noreferrer'>Terms of Service</a>.`,
            agreementError: `Please accept the Terms and Services`,
            action: `Start tutorial`
          },
          step1: {
            title: `Connect Your Wallet`,
            description: `To get started, please click connect your MetaMask wallet by clicking “Connect Wallet.” Please make sure you are on the Polygon Network.`
          },
          step2: {
            title: `Select a Trading Pair`,
            description: `Please select a trading pair you would like to long or short from the dropdown menu.`
          },
          step3: {
            title: `Enter the Amount You’d Like to Trade`,
            description: `Please enter the amount you’d like to trade. Adjusting the collateral will also alter the amount you trade.`
          },
          step4: {
            title: `Adjust Your Leverage`,
            description: `Use the slider bar to adjust the leverage you’d like to trade with. Up to 10x leverage.`
          },
          step5: {
            title: `Adjust Your Slippage`,
            description: `Adjust the slippage tolerance to ensure trade execution.`
          },
          step6: {
            title: `Review Your Transaction`,
            description: `Please review your transaction details and click “Approve” to execute your transaction. Follow the instructions within your MetaMask and wait for a confirmation.`
          },
          step7: {
            title: `Review Your Positions & Trade History`,
            description: `You can view your open positions, adjust your margin, and your trade history here.`
          }
        }
      },
      restricted: {
        title: `We are sorry...`,
        description: `The page you're trying to access is restricted in your country.`,
        community: `Please join our community if you want to learn more:`
      },
      trade: {
        header: {
          actions: `Actions`,
          asset: `Asset`,
          side: `Side`,
          posSize: `Pos.Size`,
          leverage: `Leverage`,
          entryPrice: `Entry Price`,
          liqPrice: `Liq.Price(est.)`,
          margin: `Margin`,
          marginRatio: `Margin Ratio`,
          pnl: `PNL`,
          time: `Time`,
          marketPair: `Market Pair`,
          price: `Price`,
          txFee: `TX Fee`,
          realizedPnl: `Realized PNL`,
          fundingRate: `Funding Rate`
        }
      }
    }
  }
}

export default Translation
