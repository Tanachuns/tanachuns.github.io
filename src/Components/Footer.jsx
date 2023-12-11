import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Footer() {
  const [commitDate, setCommitDate] = useState('')
  useEffect(() => {
    axios
      .get('https://api.github.com/repos/tanachuns/tanachuns.github.io/commits')
      .then((res) => {
        setCommitDate(new Date(res.data[0].commit.committer.date).toString())
      })
  }, [])
  return (
    <footer className="flex justify-between items-center bg-sky text-black p-3">
      <p className="text-sm">Last Updated: {commitDate}</p>
    </footer>
  )
}