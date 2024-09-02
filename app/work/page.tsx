'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperClass } from 'swiper'
import Image from 'next/image'
import 'swiper/css'
import WorkSliderBtns from '@/components/WorkSliderBtns'

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    description:
      'Web Development Web DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb',
    stack: [{ name: 'Html 5' }, { name: 'CSS 3' }, { name: 'JavaScript' }],
    image: '/assets/work/thumb1.png',
    live: '',
    github: ''
  },
  {
    num: '02',
    category: 'fullstack',
    title: 'project 2',
    description:
      'Web Development Web DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb',
    stack: [{ name: 'Html 5' }, { name: 'CSS 3' }, { name: 'JavaScript' }],
    image: '/assets/work/thumb2.png',
    live: '',
    github: ''
  },
  {
    num: '03',
    category: 'fullstack',
    title: 'project 3',
    description:
      'Web Development Web DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb',
    stack: [{ name: 'Html 5' }, { name: 'CSS 3' }, { name: 'JavaScript' }],
    image: '/assets/work/thumb3.png',
    live: '',
    github: ''
  }
]

export default function WorkPage() {
  const [project, setProject] = useState(projects[0])
  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex
    setProject(projects[currentIndex])
  }
  return (
    <section
      className={'min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'}
    >
      <div className="container mx-auto">
        <div className={'flex flex-col xl:flex-row xl:gap-[30px]'}>
          <div
            className={
              'w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'
            }
          >
            <div className={'flex flex-col gap-[30px] h-[50%]'}>
              <div
                className={
                  'text-8xl leading-none font-extrabold text-transparent text-outline'
                }
              >
                {project.num}
              </div>
              <h2
                className={
                  'text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'
                }
              >
                {project.category}
              </h2>
              <p className={'text-white/60'}>{project.description}</p>
              <ul className={'flex gap-4'}>
                {project.stack.map((item, i) => (
                  <li key={i} className={'text-xl text-accent'}>
                    {item.name}
                    {i !== projects.length - 1 && ','}
                  </li>
                ))}
              </ul>
              <div className={'border border-white/20'}></div>
              <div className={'flex items-center gap-4'}>
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className={
                          'w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'
                        }
                      >
                        <BsArrowUpRight
                          className={
                            'text-white text-3xl group-hover:text-accent'
                          }
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className={
                          'w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'
                        }
                      >
                        <BsGithub
                          className={
                            'text-white text-3xl group-hover:text-accent'
                          }
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className={'w-full xl:w-[50%]'}>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className={'xl:h-[520px] mb-12'}
              onSlideChange={(swiper) => handleSlideChange(swiper)}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className={'w-full'}>
                    <div
                      className={
                        'h-[460px] relative group flex justify-center items-center bg-pink-50/20'
                      }
                    >
                      <div className={'relative w-full h-full'}>
                        <Image
                          src={item.image}
                          alt={''}
                          fill
                          className={'object-cover'}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
              <WorkSliderBtns
                containerStyles={
                  'flex gap-2 absolute right-0 bottom-[calc(50%_ - _22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none'
                }
                btnStyles={
                  'bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all'
                }
                iconStyles={''}
              />
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}