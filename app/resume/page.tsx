import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa'
import {
  SiDocker,
  SiFigma,
  SiNestjs,
  SiNextdotjs,
  SiTailwindcss
} from 'react-icons/si'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'

const about = {
  title: 'About me',
  description:
    'Web Development Web DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Chris Wang'
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+1) 236 9670 986'
    },
    {
      fieldName: 'Experiences',
      fieldValue: '4+ years'
    },
    {
      fieldName: 'Email',
      fieldValue: 'Chris.wz@icloud.com'
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Canada'
    },
    {
      fieldName: 'Skype',
      fieldValue: 'Chris.01'
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available'
    },
    {
      fieldName: 'Language',
      fieldValue: 'English, Chinese'
    }
  ]
}

const experiences = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description:
    'Web Development Web DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb',
  items: [
    {
      company: 'Personal Studio',
      position: 'Full stack Developer',
      duration: 'Aug 2023 - Present'
    },
    {
      company: 'Jack Technology Co.Ltd',
      position: 'Front End Developer',
      duration: 'Jui 2020 - 2023 Jui'
    }
  ]
}
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description:
    'Web Development Web DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb',
  items: [
    {
      institution: 'Okanagan College',
      degree: 'Computer Science',
      duration: 'Sep 2023 - Present'
    },
    {
      institution: 'Online Course',
      degree: 'Nest.js Development',
      duration: 'Sep 2022 - Apr 2023'
    },
    {
      institution: 'Online Course',
      degree: 'Node.js Development',
      duration: 'Apr 2022 - Aug 2022'
    },
    {
      institution: 'Online Course',
      degree: 'UI Design',
      duration: 'Sep 2021 - Apr 2022'
    },
    {
      institution: 'Codecademy',
      degree: 'Web Development',
      duration: 'Apr 2019 - Aug 2019'
    }
  ]
}
const skills = {
  title: 'My Skills',
  description:
    'Web Development Web DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5'
    },
    {
      icon: <FaCss3 />,
      name: 'css 3'
    },
    {
      icon: <FaJs />,
      name: 'javascript'
    },
    {
      icon: <FaReact />,
      name: 'react.js'
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js'
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css'
    },
    {
      icon: <FaNodeJs />,
      name: 'nest.js'
    },
    {
      icon: <SiNestjs />,
      name: 'nest.js'
    },
    {
      icon: <SiDocker />,
      name: 'docker'
    },
    {
      icon: <SiFigma />,
      name: 'figma'
    }
  ]
}

export default function ResumePage() {
  return (
    <div
      className={'min-h-[80vh] flex items-center justify-center py-12 xl:py-0'}
    >
      <div className={'container mx-auto'}>
        <Tabs
          defaultValue={'experience'}
          className={'flex flex-col w-full xl:flex-row gap-[60px]'}
        >
          <TabsList
            className={
              'flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'
            }
          >
            <TabsTrigger value={'experience'}>Experience</TabsTrigger>
            <TabsTrigger value={'education'}>Education</TabsTrigger>
            <TabsTrigger value={'skills'}>Skills</TabsTrigger>
            <TabsTrigger value={'about'}>About me</TabsTrigger>
          </TabsList>

          <div className={'min-h-[70vh] w-full'}>
            <TabsContent value={'experience'} className={'w-full'}>
              <div
                className={'flex flex-col gap-[30px] text-center xl:text-left'}
              >
                <h3 className={'text-4xl font-bold'}>{experiences.title}</h3>
                <p className={'max-w-[600px] text-white/60 mx-auto xl:mx-0'}>
                  {experiences.description}
                </p>
                <ScrollArea className={'h-[400px]'}>
                  <ul className={'grid grid-cols-1 gap-[30px] lg:grid-cols-2'}>
                    {experiences.items.map((item, index) => (
                      <li
                        key={index}
                        className={
                          'bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        }
                      >
                        <span className={'text-accent'}>{item.duration}</span>
                        <h3 className={'text-xl max-w-[260px] min-h-[60px]'}>
                          {item.position}
                        </h3>
                        <div className={'flex items-center gap-3'}>
                          <span
                            className={'w-[6px] h-[6px] rounded-full bg-accent'}
                          ></span>
                          <p className={'text-white/60'}>{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value={'education'} className={'w-full'}>
              <div
                className={'flex flex-col gap-[30px] text-center xl:text-left'}
              >
                <h3 className={'text-4xl font-bold'}>{education.title}</h3>
                <p className={'max-w-[600px] text-white/60 mx-auto xl:mx-0'}>
                  {education.description}
                </p>
                <ScrollArea className={'h-[400px]'}>
                  <ul className={'grid grid-cols-1 gap-[30px] lg:grid-cols-2'}>
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className={
                          'bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'
                        }
                      >
                        <span className={'text-accent'}>{item.duration}</span>
                        <h3 className={'text-xl max-w-[260px] min-h-[60px]'}>
                          {item.degree}
                        </h3>
                        <div className={'flex items-center gap-3'}>
                          <span
                            className={'w-[6px] h-[6px] rounded-full bg-accent'}
                          ></span>
                          <p className={'text-white/60'}>{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value={'skills'} className={'w-full h-full'}>
              <div className={'flex flex-col gap-[30px]'}>
                <div
                  className={
                    'flex flex-col gap-[30px] text-center xl:text-left'
                  }
                >
                  <h3 className={'text-4xl font-bold'}>{skills.title}</h3>
                  <p className={'max-w-[600px] text-white/60 mx-auto xl:mx-0'}>
                    {skills.description}
                  </p>
                  <ul
                    className={
                      'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'
                    }
                  >
                    {skills.skillList.map((item, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger
                              className={
                                'w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'
                              }
                            >
                              <div
                                className={
                                  'text-6xl group-hover:text-accent transition-all duration-300'
                                }
                              >
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className={'capitalize'}>{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value={'about'}
              className={'w-full text-center xl:text-left'}
            >
              <div className={'flex flex-col gap-[30px]'}>
                <h3 className={'text-4xl font-bold'}>{about.title}</h3>
                <p className={'max-w-[600px] text-white/60 mx-auto xl:mx-0'}>
                  {about.description}
                </p>
                <ul
                  className={
                    'grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'
                  }
                >
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className={
                        'flex items-center justify-center xl:justify-start gap-4'
                      }
                    >
                      <span className={'text-white/60'}>{item.fieldName}</span>
                      <span className={'text-xl'}>{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
          <div></div>
        </Tabs>
      </div>
    </div>
  )
}
