import EmailIcon from '@/components/icons/email-icon'
import GithubIcon from '@/components/icons/github-icon'
import LinkedinIcon from '@/components/icons/linkedin-icon'
import Link from 'next/link'

interface SocialMediaButton {
  text: string
  type: 'social' | 'email'
  platform: 'github' | 'linkedin' | 'email'
  link?: string
  email?: string
}

export default function SocialMediaButton({
  text,
  type,
  platform,
  email,
  link,
}: SocialMediaButton) {
  let href = ''

  if (type === 'email') {
    href = `mailto:${email}`
  } else if (type === 'social' && link) {
    href = link
  } else {
    href = '#'
  }

  return (
    <Link href={href} className="flex relative group items-center">
      {/* Circulo com icon */}
      <div className="bg-gray-800 z-10 rounded-full flex items-center justify-center w-16 h-16">
        {platform === 'github' && <GithubIcon size={36} />}

        {platform === 'linkedin' && <LinkedinIcon size={36} />}

        {platform === 'email' && <EmailIcon size={36} />}
      </div>

      {/* Div com texto */}
      <div className="max-w-0 group-hover:max-w-96 transition-all duration-500 overflow-hidden absolute left-8 bg-gray-700 h-12 flex items-center rounded-full">
        {type === 'email' && (
          <span className="ml-6 px-4 whitespace-nowrap">{text}</span>
        )}

        {type === 'social' && (
          <span className="ml-6 px-4 whitespace-nowrap">{text}</span>
        )}
      </div>

      {/* Placeholder */}
      <div className="max-w-0 opacity-0 group-hover:max-w-96 transition-all duration-500">
        {type === 'email' && <span className="px-4">{text}</span>}

        {type === 'social' && <span className="px-4">{text}</span>}
      </div>
    </Link>
  )
}
