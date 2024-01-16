import React from 'react'

export default function Hero() {
  return (
    <div className="flex justify-center items-center h-[95vh]">
      <div className=" text-6xl font-bold">
        <p>
          <b className="text-warning">Full</b> the Stacks
        </p>
        <p>
          <b className="text-warning">Fill</b> your dream.
        </p>
        <p>
          <a
            className=" text-lg hover:text-danger "
            href="https://tanathemonkseal-blog.vercel.app/"
          >
            > Blogs
          </a>
        </p>
      </div>
    </div>
  )
}
