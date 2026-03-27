import { useState, useEffect } from 'react'
import type { ClockCard } from '../../../types'

interface Props {
  card: ClockCard
}

export default function ClockWidget({ card }: Props) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = () => {
    return time.toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit',
      second: card.format === 'digital' ? '2-digit' : undefined,
      hour12: false
    })
  }

  const formatDate = () => {
    return time.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long'
    })
  }

  return (
    <div className="clock-widget">
      {card.title && <div className="clock-widget__title">{card.title}</div>}
      <div className="clock-widget__time">{formatTime()}</div>
      {card.showDate && <div className="clock-widget__date">{formatDate()}</div>}
      <style>{`
        .clock-widget {
          padding: 16px;
          background: var(--surface-container);
          border-radius: 16px;
          text-align: center;
        }
        .clock-widget__title {
          font-size: 12px;
          color: var(--on-surface-variant);
          margin-bottom: 8px;
        }
        .clock-widget__time {
          font-size: 32px;
          font-weight: 500;
          color: var(--on-surface);
          font-variant-numeric: tabular-nums;
        }
        .clock-widget__date {
          font-size: 12px;
          color: var(--on-surface-variant);
          margin-top: 4px;
        }
      `}</style>
    </div>
  )
}
