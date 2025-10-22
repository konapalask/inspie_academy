import { useEffect, useState, useRef, useCallback } from 'react'

/**
 * use12HourCountdown
 * - Returns { hours, minutes, seconds, totalSeconds }
 * - Accepts optional options:
 *    - keyPrefix: prefix used for localStorage key (default 'examBanner')
 *    - onReset: callback called when the countdown completes and a new 12-hr cycle starts
 */
export default function use12HourCountdown(options = {}) {
  const { keyPrefix = 'examBanner', onReset } = options
  const resetKey = `${keyPrefix}ResetTime`
  const twelveHoursMs = 12 * 60 * 60 * 1000

  const getLastReset = useCallback(() => {
    const stored = localStorage.getItem(resetKey)
    if (!stored) {
      const now = Date.now()
      localStorage.setItem(resetKey, String(now))
      return now
    }
    const parsed = parseInt(stored, 10)
    if (Number.isNaN(parsed)) {
      const now = Date.now()
      localStorage.setItem(resetKey, String(now))
      return now
    }
    return parsed
  }, [resetKey])

  const computeRemainingSeconds = useCallback(() => {
    const lastReset = getLastReset()
    const now = Date.now()
    const elapsed = now - lastReset
    // milliseconds remaining in current 12-hour cycle
    const msRemaining = twelveHoursMs - (elapsed % twelveHoursMs)
    // If msRemaining is exactly twelveHoursMs, that means a fresh cycle (i.e., at start)
    // Convert to total whole seconds remaining (floor)
    const totalSeconds = Math.floor(msRemaining / 1000)
    return { totalSeconds, msRemaining }
  }, [getLastReset])

  const [{ hours, minutes, seconds, totalSeconds }, setTime] = useState(() => {
    const { totalSeconds } = computeRemainingSeconds()
    const h = Math.floor(totalSeconds / 3600)
    const m = Math.floor((totalSeconds % 3600) / 60)
    const s = totalSeconds % 60
    return { hours: h, minutes: m, seconds: s, totalSeconds }
  })

  const onResetRef = useRef(onReset)
  useEffect(() => { onResetRef.current = onReset }, [onReset])

  useEffect(() => {
    let stopped = false
    let intervalId = null
    let timeoutId = null

    const tick = () => {
      const { totalSeconds: ts, msRemaining } = computeRemainingSeconds()

      // If exactly 0 or negative (shouldn't be negative but guard), trigger reset
      if (ts <= 0) {
        // set new reset time and call callback
        const now = Date.now()
        localStorage.setItem(resetKey, String(now))
        // recompute after reset
        const { totalSeconds: newTs } = computeRemainingSeconds()
        const h = Math.floor(newTs / 3600)
        const m = Math.floor((newTs % 3600) / 60)
        const s = newTs % 60
        setTime({ hours: h, minutes: m, seconds: s, totalSeconds: newTs })
        if (typeof onResetRef.current === 'function') {
          try { onResetRef.current() } catch (err) { /* ignore */ }
        }
        return
      }

      const h = Math.floor(ts / 3600)
      const m = Math.floor((ts % 3600) / 60)
      const s = ts % 60
      setTime({ hours: h, minutes: m, seconds: s, totalSeconds: ts })
    }

    // Align first tick to next full second boundary for smooth seconds decrement
    const now = Date.now()
    const msToNextSecond = 1000 - (now % 1000)
    timeoutId = setTimeout(() => {
      if (stopped) return
      tick()
      intervalId = setInterval(() => {
        tick()
      }, 1000)
    }, msToNextSecond)

    return () => {
      stopped = true
      if (timeoutId) clearTimeout(timeoutId)
      if (intervalId) clearInterval(intervalId)
    }
  }, [computeRemainingSeconds, resetKey])

  // Expose a manual reset (useful for testing or "reset now" button)
  const resetNow = useCallback(() => {
    const now = Date.now()
    localStorage.setItem(resetKey, String(now))
    const { totalSeconds } = computeRemainingSeconds()
    const h = Math.floor(totalSeconds / 3600)
    const m = Math.floor((totalSeconds % 3600) / 60)
    const s = totalSeconds % 60
    setTime({ hours: h, minutes: m, seconds: s, totalSeconds })
    if (typeof onResetRef.current === 'function') {
      try { onResetRef.current() } catch (err) { /* ignore */ }
    }
  }, [computeRemainingSeconds, resetKey])

  return { hours, minutes, seconds, totalSeconds, resetNow }
}
