import { useState, useEffect, useCallback } from "react"

const useDocumentDimensions = () => {
  const hasDocument = typeof document !== "undefined"
  const getDocumentDimensions = useCallback(() => {
    const fullWidth = hasDocument ? document.documentElement.offsetHeight : undefined
    const fullHeight = hasDocument ? document.documentElement.offsetHeight : undefined
    return { fullWidth, fullHeight }
  }, [hasDocument])
  const [windowDimensions, setWindowDimensions] = useState(getDocumentDimensions())
  useEffect(() => {
    if (hasDocument) {
      const handleResize = () => {
        setWindowDimensions(getDocumentDimensions())
      }
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [hasDocument, getDocumentDimensions])

  return windowDimensions
}

export default useDocumentDimensions
