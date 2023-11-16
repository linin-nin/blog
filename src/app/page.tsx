"use client"

import Header from "@/components/Header"
import Hero from "@/components/Hero"
import { useLayoutEffect } from "react"
// import LocomotiveScroll from 'locomotive-scroll'

export default function Home() {

  useLayoutEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <main className="contianer">
      <Header/>
      <Hero/>
    </main>
  )
}
