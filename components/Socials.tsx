import { FaGithub, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'

const socials = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/chriswz1998'
  },
  {
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/wang-chris-b393691a7/'
  }
]

const Socials = ({
  containerStyles,
  iconStyles
}: {
  containerStyles: string
  iconStyles: string
}) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.path}
          target="_blank" // 新标签页打开链接
          rel="noopener noreferrer"
          className={iconStyles}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  )
}

export default Socials
