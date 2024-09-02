'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

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

const Nav = () => {
  const pathName = usePathname()
  return (
    <nav className={'flex gap-8'}>
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.path}
          className={`
          ${pathName === link.path && 'text-accent border-b-2 border-accent'}
           capitalize font-medium hover:text-accent transition-all
           `}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

export default Nav
