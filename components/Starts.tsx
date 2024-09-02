'use client'

import CountUp from 'react-countup'

const starts = [
  {
    num: 12,
    text: 'Years of experience'
  },
  {
    num: 26,
    text: 'Project completed'
  },
  {
    num: 8,
    text: 'Technologies mastered'
  },
  {
    num: 500,
    text: 'Code commits'
  }
]

const Starts = () => {
  return (
    <section className={'pt-4 pb-12 xl:pt-0 xl:pb-0'}>
      <div className="container mx-auto">
        <div
          className={'flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'}
        >
          {starts.map((start, index) => {
            return (
              <div
                key={index}
                className={
                  'flex-1 flex gap-4 items-center justify-center xl:justify-start'
                }
              >
                <CountUp
                  end={start.num}
                  duration={2}
                  delay={1}
                  className={'text-4xl xl:text-6xl font-extrabold'}
                />
                <p
                  className={`${start.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'} leading-snug text-white/80`}
                >
                  {start.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Starts
