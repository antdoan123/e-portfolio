import React, { useState } from 'react'
import { useSprings, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'



const cards = [
  { id: 1, title: 'Contact Me', color: '#E91E63' },
  { id: 2, title: 'My Projects', color: '#9C27B0' },
  { id: 3, title: 'About me', color: '#3F51B5' },
  { id: 4, title: 'Welcome to Anthony Website', links: "/", description: 'Swipe left to continue', color: '#2196F3' },
]

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})
const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function Freelancing() {
  const [gone, setGone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, setProps] = useSprings(cards.length, (index) => ({
    ...to(index),
    from: from(index),
  })) // Create a bunch of springs using the helpers above
  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2
    const dir = xDir < 0 ? -1 : 1
    if (!down && trigger) setGone((gone) => gone.add(index))
    setProps((i) => {
      if (index !== i) return
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0)
      const scale = down ? 1.1 : 1
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      }
    })
    if (!down && gone.size === cards.length)
      setTimeout(() => {
        setGone(new Set())
        setProps((i) => to(i))
      }, 600)
  })
  return (
    <div className=''>

      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div className="absolute inset-0 flex items-center justify-center " key={cards[i].id} style={{ x, y }}>
          <animated.div
            {...bind(i)}
            className=" w-[200px] h-[300px] p-4 rounded-lg shadow-lg "
            style={{
              transform: trans(rot, scale),
              backgroundImage: `linear-gradient(135deg, ${cards[i].color} 0%, #ffffff 100%)`,
            }}
          >
            <div className="flex items-center justify-center text-xl font-bold text-black">{cards[i].title}</div>
            <div className="flex items-center justify-center text-lg font-bold text-gray-500 text-center mt-2">{cards[i].description}</div>
            <a href={cards[i].links} className="flex items-end justify-end">View More</a>
          </animated.div>
        </animated.div>
      ))}
    </div>
  )
}
export default Freelancing