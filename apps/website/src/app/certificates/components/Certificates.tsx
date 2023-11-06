'use client'

import {listStyle} from '@/shared/tailwind'

const Component = () => {
  return (
    <>
      <div>Certificates:</div>
      <ul className={listStyle}>
        <li>The Ultimate React Native Series: Fundamentals;</li>
        <li>Introduction to Mobile Development;</li>
        <li>
          Project Initiation: Starting a Successful Project.Authorized by
          Google;
        </li>
        <li>Smart Contracts. Authorized by University at Buffalo;</li>
        <li>Blockchain Basics. Authorized by University at Buffalo;</li>
        <li>Containerized Applications on AWS. Authorized by AWS;</li>
        <li>Foundations of Project Management. Authorized by Google;</li>
        <li>
          Introduction to TensorFlow for Artificial Intelligence, Machine
          Learning, and Deep Learning. Authorized by DeepLearning.AI;
        </li>
        <li>
          M101JS: MongoDB for Node.js Developers. Authorized by MongoDB
          University;
        </li>
        <li>
          Hadoop Platform and Application Framework. Authorized by University of
          California;
        </li>
      </ul>
    </>
  )
}

export default Component
