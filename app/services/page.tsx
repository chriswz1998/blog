import Link from 'next/link'
import { BsArrowDownRight } from 'react-icons/bs'

const services = [
  {
    num: '01',
    title: 'Frontend Development',
    description:
      'Web Development Web DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb',
    href: ''
  },
  {
    num: '02',
    title: 'Backend Development',
    description:
      'Web Development Web DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb',
    href: ''
  },
  {
    num: '03',
    title: 'UI/UX Design',
    description:
      'Web Development Web DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb',
    href: ''
  },
  {
    num: '04',
    title: 'Logo Design',
    description:
      'Web Development Web DevelopmentWeb DevelopmentWeb DevelopmentWeb DevelopmentWeb',
    href: ''
  }
]

export default function ServicesPage() {
  return (
    <section
      className={'min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'}
    >
      <div className={'container mx-auto'}>
        <div className={'grid grid-cols-1 md:grid-cols-2 gap-[60px]'}>
          {services.map((service, index) => (
            <div
              key={index}
              className={'flex-1 flex flex-col justify-center gap-6 group'}
            >
              <div className={'w-full flex justify-between items-center'}>
                <div
                  className={
                    'text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'
                  }
                >
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className={
                    'w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'
                  }
                >
                  <BsArrowDownRight className={'text-primary text-3xl'} />
                </Link>
              </div>
              <h2
                className={
                  'text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'
                }
              >
                {service.title}
              </h2>
              <p className={'text-white/60'}>{service.description}</p>
              <div className={'border-b bg-white/20 w-full'}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}