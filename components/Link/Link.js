import Link from 'next/link'
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react'
import { HiExternalLink } from 'react-icons/hi'

const CustomLink = ({ href, children, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest}>{children}</a>
      </Link>
    )
  }

  if (isAnchorLink) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <a target="_blank" rel="noopener noreferrer" href={href} {...rest}>
      {children}
      <span>
        <HiExternalLink className="relative top-[-1px] ml-1 inline-block h-4 w-4 align-middle" />
      </span>
    </a>
  )
}

export default CustomLink
