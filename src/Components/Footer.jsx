import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Footer() {
  const [commitDate, setCommitDate] = useState('')
  useEffect(() => {
    axios
      .get('https://api.github.com/repos/tanachuns/tanachuns.github.io/commits')
      .then((res) => {
        setCommitDate(res.data[0].commit.committer.date.split('T')[0])
      })
  }, [])
  return (
    <footer className="flex justify-between items-center bg-sea text-black p-3">
      <p className="text-xs">Last Updated: {commitDate}</p>
    </footer>
  )
}
