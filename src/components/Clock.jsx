import { useEffect, useState } from 'react'
import { profile } from '../data/content'

function formatTime(tz) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  }).format(new Date())
}

export default function Clock() {
  const [time, setTime] = useState(() => formatTime(profile.timezone))

  useEffect(() => {
    const id = setInterval(() => setTime(formatTime(profile.timezone)), 1000)
    return () => clearInterval(id)
  }, [])

  return <span className="clock">{time}</span>
}
