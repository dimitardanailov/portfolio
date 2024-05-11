'use client'

import {listStyle} from './shared'

const Content = () => {
  return (
    <>
      <div className="font-bold">Expertise:</div>
      <ul className={listStyle}>
        <li>Javascript: Typescript, ReactJS, Nextjs, Nestjs, Expressjs;</li>
        <li>AWS: ECS, EKS, ES3, Servless Development;</li>
        <li>DevOps: Docker, Kubernetes, Linux, Terraform;</li>
        <li>Excellent English communication, both written and verbal;</li>
        <li>
          Blockchain: etherjs, web3js, ethereum, solidity, hardhat, foundry,
          algorand and cosmos;
        </li>
      </ul>
    </>
  )
}

export default Content
