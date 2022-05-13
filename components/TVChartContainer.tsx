import { useEffect } from "react"
import {
  widget,
  ChartingLibraryWidgetOptions,
  LanguageCode
} from "../public/static/charting_library/charting_library"
import { getDatafeed } from "../utils/subgraph/datafeed"

interface ChartContainerProps {
  symbol: ChartingLibraryWidgetOptions["symbol"] // AMM address
  interval: ChartingLibraryWidgetOptions["interval"]
  libraryPath: ChartingLibraryWidgetOptions["library_path"]
  chartsStorageUrl: ChartingLibraryWidgetOptions["charts_storage_url"]
  chartsStorageApiVersion: ChartingLibraryWidgetOptions["charts_storage_api_version"]
  clientId: ChartingLibraryWidgetOptions["client_id"]
  userId: ChartingLibraryWidgetOptions["user_id"]
  fullscreen: ChartingLibraryWidgetOptions["fullscreen"]
  autosize: ChartingLibraryWidgetOptions["autosize"]
  studiesOverrides: ChartingLibraryWidgetOptions["studies_overrides"]
  containerId: ChartingLibraryWidgetOptions["container_id"]
  selectedToken: string
}

function getLanguageFromURL(): LanguageCode | null {
  const regex = new RegExp("[\\?&]lang=([^&#]*)")
  const results = regex.exec(location.search)
  return results === null ? null : (decodeURIComponent(results[1].replace(/\+/g, " ")) as LanguageCode)
}

const TVChartContainer = ({
  symbol,
  interval,
  containerId,
  libraryPath,
  chartsStorageUrl,
  chartsStorageApiVersion,
  clientId,
  userId,
  fullscreen,
  autosize,
  studiesOverrides,
  selectedToken
}: ChartContainerProps) => {
  useEffect(() => {
    const widgetOption: ChartingLibraryWidgetOptions = {
      symbol: symbol as string,
      datafeed: getDatafeed(selectedToken),
      interval: interval as ChartingLibraryWidgetOptions["interval"],
      container_id: containerId as ChartingLibraryWidgetOptions["container_id"],
      library_path: libraryPath as string,
      container: "",
      locale: getLanguageFromURL() || "en",
      disabled_features: ["header_saveload", "header_compare"],
      enabled_features: ["study_templates"],
      charts_storage_url: chartsStorageUrl,
      charts_storage_api_version: chartsStorageApiVersion,
      client_id: clientId,
      user_id: userId,
      fullscreen: fullscreen,
      autosize: autosize,
      studies_overrides: studiesOverrides,
      theme: "Dark",
      overrides: {}
    }
    const newTvWidget = new widget(widgetOption)

    newTvWidget.onChartReady(() => {
      newTvWidget.headerReady().then(() => {
        const button = newTvWidget.createButton()
        button.setAttribute("title", "Click to show a notification popup")
        button.classList.add("apply-common-tooltip")
        button.addEventListener("click", () =>
          newTvWidget.showNoticeDialog({
            title: "Notification",
            body: "TradingView Charting Library API works correctly",
            callback: () => ({})
          })
        )
        button.innerHTML = "Check API"
      })
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [symbol])

  return <div style={{ height: "100%" }} id={containerId} className={"TVChartContainer"} />
}

export default TVChartContainer
