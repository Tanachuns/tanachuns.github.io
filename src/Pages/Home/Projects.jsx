import React from 'react'

export default function Projects() {
  return (
    <div className="h-auto my-40">
      <h1 className="text-5xl font-bold mb-10">Projects</h1>
      <Project
        name="Google"
        url="https://www.google.com/"
        backend="ASP.Net"
        frontend="ReactJS"
      />
      <Project
        name="Facebook"
        url="https://www.facebook.com"
        backend="Golang"
        frontend="VueJs"
      />
      <div className=" text-end">
        <a target="_blank" rel="noreferrer" href="https://github.com/Tanachuns">
          more
        </a>
      </div>
    </div>
  )
}

const Project = (props) => {
  return (
    <div className="flex justify-between items-center border-b-2 p-10">
      <p className="text-wash">{props.backend}</p>
      <a
        href={props.url}
        target="_blank"
        rel="noreferrer"
        className=" text-5xl hover:text-danger"
      >
        {props.name}
      </a>
      <p className="text-wash">{props.frontend}</p>
    </div>
  )
}
