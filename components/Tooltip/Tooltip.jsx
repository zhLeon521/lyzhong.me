import Tippy, { TippyProps } from '@tippyjs/react'

export const Tooltip = (props) => {
  const { content, ...rest } = props

  return <Tippy content={content} {...rest} />
}
