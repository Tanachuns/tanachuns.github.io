import React from 'react'

export default function Footer() {
  return (
    <footer className="flex justify-between items-center bg-sea text-black p-3">
      <p className="text-xs">last updated: {Date()}</p>
    </footer>
  )
}
