import React, { useEffect } from 'react'

const useTestUseSyncExternalStore = () => {

  const [state1, setState1] = React.useState("state1")

  let time = new Date().toLocaleTimeString()
  setInterval(() => {
    time = new Date().toLocaleTimeString()
    notifiers.forEach(notify => notify())
  }, 1000)

  let notifiers = new Set<() => void>()

  React.useSyncExternalStore(notify => {
    notifiers.add(notify)
    return () => notifiers.delete(notify)
  }, () => time)

  return {
    time,
    state1
  }
}

export default useTestUseSyncExternalStore