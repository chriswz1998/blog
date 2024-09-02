import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

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
            <form
              className={'flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'}
            >
              <h2 className={'text-4xl text-accent'}>
                Let&apos;s work together
              </h2>
              <p className={'text-white/60'}>
                Web Development Web DevelopmentWeb DevelopmentWeb DevelopmentWeb
                DevelopmentWeb
              </p>
              <div className={'grid grid-cols-1 gap-6 md:grid-cols-2'}>
                <Input type={'firstname'} placeholder={'Firstname'} />
                <Input type={'lastname'} placeholder={'Lastname'} />
                <Input type={'email'} placeholder={'Email'} />
                <Input type={'phone'} placeholder={'Phone'} />
              </div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={'Select a service'} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={'est'}>Web Development</SelectItem>
                  <SelectItem value={'cst'}>UI/UX Design</SelectItem>
                  <SelectItem value={'mst'}>Logo Design</SelectItem>
                </SelectContent>
              </Select>
              <Textarea
                className={'h-[200px]'}
                placeholder={'type your message here.'}
              />
              <Button className={'max-w-40'} size={'md'}>
                Send message
              </Button>
            </form>
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
    </section>
  )
}
