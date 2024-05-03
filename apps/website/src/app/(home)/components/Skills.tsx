'use client'

import {FC} from 'react'

import {listStyle} from './shared'

const Skills: FC = () => {
  return (
    <>
      <div className="font-bold">Skills</div>
      <ul className={listStyle}>
        <li>Nodejs: Typescript, Nestjs, Express, Hapi, etherjs, web3js</li>
        <li>
          React: Typescript, Nextjs, Vercel, Redux, GraphQL, React Native;
        </li>
        <li>Cloud Development: AWS, Azure, Google Cloud;</li>
        <li>
          Blockchain: Solidity, Etherium, Algorand, Cosmos, Elrond, Polygon,
          ZkSync, Hardhat, Foundry;
        </li>
        <li>
          Database Systems: PostgreSQL, MySQL, MSSQL, NoSQL, MongoDB,
          OpenSearch, Elastic Search;
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
