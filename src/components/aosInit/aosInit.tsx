'use client'

import { useEffect } from 'react'
import AOS from 'aos'


export function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    })
  }, [])

  return null
}