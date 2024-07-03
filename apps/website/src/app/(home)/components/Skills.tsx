'use client'

import {FC} from 'react'

import {listStyle} from './shared'

const Skills: FC = () => {
  return (
    <>
      <div className="font-bold">Skills</div>
      <ul className={listStyle}>
        <li>
          Nodejs: Typescript, Nestjs, Express, Hapi, etherjs, web3js,
          zksync-ethers;
        </li>
        <li>
          React: Typescript, Nextjs, Vercel, Redux, GraphQL, React Native;
        </li>
        <li>Cloud Development: AWS, Azure, Google Cloud;</li>
        <li>Blockchain EVM / Etherium: Solidity, Hardhat, Foundry;</li>
        <li>
          Blockchain Custody Wallet: Cosmos, Algorand, Binance Smart Chain,
          Elrond, Polygon;
        </li>
        <li>
          Machine Learning / Artificial Intelligence: Vercel AI SDK, Gemini Pro,
          ChatGPT, Large Language Models, Generative AI
        </li>
        <li>
          Databases: PostgreSQL, MySQL, MSSQL, NoSQL, MongoDB, OpenSearch,
          Elastic Search;
        </li>
        <li>
          Containers and orchestration: Docker, Kubernetes, OpenShift, Vagrant,
          TerraForm;
        </li>
      </ul>
    </>
  )
}

export default Skills
