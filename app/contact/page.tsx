import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { ContactClient } from '@/app/contact/_components/client'
import { Toaster } from 'react-hot-toast'
const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+1) 236 9670 985'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'chris.wz@icloud.com'
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Kelowna, BC, Canada'
  }
]

export default function ContactPage() {
  return (
    <section className={'py-6'}>
      <div className="container mx-auto">
        <div className={'flex flex-col xl:flex-row gap-[30px]'}>
          <div className={'xl:h-[54%] order-2 xl:order-none'}>
            <ContactClient />
          </div>
          <div
            className={
              'flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'
            }
          >
            <ul className={'flex flex-col gap-10'}>
              {info.map((item, i) => (
                <li key={i} className={'flex items-center gap-6'}>
                  <div
                    className={
                      'w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'
                    }
                  >
                    <div className={'text-[28px]'}>{item.icon}</div>
                  </div>
                  <div className={'flex-1'}>
                    <p className={'text-white/60'}>{item.title}</p>
                    <h3 className={'text-xl'}>{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Toaster />
    </section>
  )
}
