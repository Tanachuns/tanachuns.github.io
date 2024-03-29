'use client'
import { useState } from 'react'

export default function Header() {
  const [bannerState, setBannerState] = useState(0)
  const banngerStyles = [
    {
      element: 'Test1',
      bg: 'sky',
      rad: 'rtsky',
    },
    {
      element: 'Test2',
      bg: 'sand',
      rad: 'rtsan',
    },
    {
      element: 'Test3',
      bg: 'sage',
      rad: 'rtsage',
    },
    {
      element: 'Test4',
      bg: 'mango',
      rad: 'rtmango',
    },
  ]

  const changeBanner = () => {
    if (bannerState === banngerStyles.length - 1) {
      setBannerState(0)
    } else {
      setBannerState((prev) => prev + 1)
    }
  }
  return (
    <header
      className={`flex items-center justify-center h-[500px] bg-${banngerStyles[bannerState].bg} shadow-2xl  overflow-hidden  rounded-md`}
    >
      <div className="wheelbox top-[10%] right-[50%] sm:right-[85%] absolute flex items-center justify-center ">
        <div className="bg-black w-1 h-10 relative  bottom-10 left-[50px] shadow-md z-10 rounded-full"></div>
        <div
          id="door-wheel"
          title="Click Me!"
          onClick={changeBanner}
          className={`rounded-full w-24 h-24 flex justify-center items-center  shadow-2xl border border-gray-500 ${banngerStyles[bannerState].rad}`}
        ></div>
      </div>
      <h1 className="text-9xl font-bold">
        {banngerStyles[bannerState].element}
      </h1>
    </header>
  )
}
