'use client'

import {FC} from 'react'

import {listStyle} from './shared'

const Skills: FC = () => {
  return (
    <>
      <div className="font-bold">Skills</div>
      <ul className={listStyle}></ul>
    </>
  )
}

export default Skills
