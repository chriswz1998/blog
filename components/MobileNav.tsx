'use client'
import { usePathname } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { CiMenuFries } from 'react-icons/ci'
import Link from 'next/link'
const links = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'services',
    path: '/services'
  },
  {
    name: 'resume',
    path: '/resume'
  },
  {
    name: 'work',
    path: '/work'
  },
  {
    name: 'contact',
    path: '/contact'
  }
]

const MobileNav = () => {
  const pathName = usePathname()
  return (
    <Sheet>
      <SheetTrigger className={'flex justify-center items-center'}>
        <CiMenuFries className={'text-[32px] text-accent'} />
      </SheetTrigger>
      <SheetContent className={'flex flex-col'}>
        <div className={'mt-32 mb-40 text-center text-2xl'}>
          <Link href={'/'}>
            <h1 className={'text-4xl font-semibold'}>
              Wang<span className={'text-accent'}>.</span>
            </h1>
          </Link>
        </div>
        <nav className={'flex flex-col items-center gap-8'}>
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.path}
              className={`
          ${pathName === link.path && 'text-accent border-b-2 border-accent'}
           capitalize text-xl hover:text-accent transition-all
           `}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
export default MobileNav
