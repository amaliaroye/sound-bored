import React from 'react'
import Button from './Button'

const TYPES = [
  'all-is-well',
  'be-cool',
  'be-kind',
  'believe-in-you',
  'do-your-best',
  'dream-big',
  'everything-will-be-ok',
  'go-with-your-gut',
  'good-vibes',
  'great-things-await',
  'its-a-good-day',
  'keep-fighting',
  'keep-going',
  'kindness-spreads',
  'love-yourself',
  'never-stop-growing',
  'stay-strong',
  'take-care',
  'you-are-doing-great',
  'you-got-this',
]

export default function App() {
  return (
    <div>
      {TYPES.map((type, i) => {
        return <Button type={type} key={i} />
      })}
    </div>
  )
}
