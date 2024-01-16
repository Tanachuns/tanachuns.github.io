import axios from 'axios'
import React, { useEffect, useState } from 'react'
import timeLog from '../Services/LogService'

export default function Footer() {
  const [commitDate, setCommitDate] = useState('')
  useEffect(() => {
    axios
      .get(
        'https://api.github.com/repos/tanachuns/tanachuns.gisdsub.io/commits'
      )
      .then((res) => {
        const commitDate = new Date(
          res.data[0].commit.committer.date
        ).toString()
        timeLog('getLastCommit', commitDate)
        setCommitDate(commitDate)
      })
      .catch((ex) => {
        {
          timeLog('getLastCommit exception', ex)
        }
      })
  }, [])
  return (
    <footer className="flex justify-between items-center bg-wash  text-white p-3">
      <p className="text-sm">Last Updated: {commitDate}</p>
    </footer>
  )
}
