import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { HiExternalLink } from 'react-icons/hi'

import React, { ReactElement, useEffect, useRef } from 'react'
import { renderCanvas } from '@/components/renderCanvas'

import Link from '@/components/Link/'

export default function Hero({ welcome }) {
  const ref = useRef()
  const { theme, resolvedTheme } = useTheme()

  useEffect(() => {
    renderCanvas()
    ref.current?.classList.add('transition-in')
  }, [])

  return (
    <div ref={ref} className="mx-auto mt-16 mb-32 flex max-w-5xl items-center justify-between">
      <canvas className="bg-skin-base pointer-events-none absolute inset-0" id="canvas" />
      <div>
        <h1 className="pb-6 text-3xl font-bold sm:text-6xl">Zhong Leiyang</h1>
        <p>A teenager who loves web development</p>
        <div>
          <ul className="flex gap-x-2 text-sm text-typeface-secondary dark:text-typeface-secondary-dark">
            <li>#react</li>
            <li>#next.js</li>
            <li>#tailwind</li>
          </ul>
        </div>
        <div className="mt-8">
          <div className="inline-flex flex-col items-start gap-x-4 gap-y-3 sm:flex-row">
            <Link
              href="https://blog.csdn.net/shengshengshiwo/"
              className="border-b-2 border-transparent duration-300 hover:border-brand"
            >
              CSDN
            </Link>
            <Link
              href="https://github.com/zhLeon521/"
              className="border-b-2 border-transparent duration-300 hover:border-brand"
            >
              Github
            </Link>
            <Link
              href="https://www.yuque.com/blueheart/"
              className="border-b-2 border-transparent duration-300 hover:border-brand"
            >
              Yuque
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden sm:block">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.7 }}
          style={{ height: '130px', width: '130px', position: 'relative' }}
        >
          <Image
            src={
              theme === 'dark' || resolvedTheme === 'dark'
                ? '/static/images/logo/logo-white.png'
                : '/static/images/avatar.png'
            }
            alt="Avatar"
            layout="fill"
            objectFit="contain"
            className="select-none rounded-full"
          />
        </motion.div>
      </div>
    </div>
  )
}
