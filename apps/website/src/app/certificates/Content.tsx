'use client'

import {Slogan} from '@/styled-components'

import styled from 'styled-components'

import {listStyle} from '@/shared/tailwind'

import {Keyword} from '@/components/SEO'
import TargetBlankLink from '@/components/TargetBlankLink'

function link(sufix: string) {
  const domain = 'https://ddanailov.dev/certificates/'

  return domain + sufix
}

const textClassName = 'hover:underline'

const Blockchain = () => {
  return (
    <>
      <h2>Blockchain and Defi</h2>
      <ul className={listStyle}>
        <li>
          <TargetBlankLink
            Element={
              <span className={textClassName}>
                Decentralized Finance (<Keyword word="DeFi" />)
              </span>
            }
            title="Decentralized Finance (DeFi)"
            href={link('defi/basics.pdf')}
          />
        </li>
        <li>
          <TargetBlankLink
            Element={
              <span className={textClassName}>
                <Keyword word="Smart Contracts" />. Authorized by University at
                Buffalo;
              </span>
            }
            title="Smart Contracts"
            href={link('smart-contracts/basics.pdf')}
          />
        </li>
        <li>
          <TargetBlankLink
            Element={
              <span className={textClassName}>
                <Keyword word="Blockchain" /> basics. Authorized by University
                at Buffalo;
              </span>
            }
            title="Blockchain Basics"
            href={link('blockchain/basics.pdf')}
          />
        </li>
      </ul>
    </>
  )
}

const WebMobile = () => {
  return (
    <>
      <h2>Web and Mobile Development(React specialization)</h2>

      <ul className={listStyle}>
        <li>
          <TargetBlankLink
            Element={
              <span className={textClassName}>
                The Ultimate
                <Keyword word="React Native" /> Series; Fundamentals;
              </span>
            }
            href={link('mobile/react-native-intro.pdf')}
            title="The Ultimate React Native Series: Fundamentals;"
          />
        </li>
        <li>
          <TargetBlankLink
            Element={
              <span className={textClassName}>
                Introduction to Mobile Development;
              </span>
            }
            href={link('intro.pdf')}
            title="Introduction to Mobile Development"
          />
        </li>
      </ul>
    </>
  )
}

const CloudDevelopment = () => {
  return (
    <>
      <h2>Cloud development and Containerization</h2>
      <ul className={listStyle}>
        <li>
          <TargetBlankLink
            Element={
              <span className={textClassName}>
                <Keyword word="Containerized" /> Applications on{' '}
                <Keyword word="AWS" />. Authorized by AWS;
              </span>
            }
            title="Containerized Applications on AWS."
            href={link('containerization/applications-aws.pdf')}
          />
        </li>
      </ul>
    </>
  )
}

const MachineLearning = () => {
  return (
    <>
      <h2>Machine Learning and Artificial Intelligence</h2>
      <ul className={listStyle}>
        <li>
          <TargetBlankLink
            Element={
              <span className={textClassName}>
                Introduction to TensorFlow for{' '}
                <Keyword word="Artificial Intelligence" />, Machine Learning,
                and Deep Learning. Authorized by DeepLearning.AI;
              </span>
            }
            title="Introduction to TensorFlow for Artificial Intelligence, Machine
            Learning, and Deep Learning."
            href={link('machine-learning/introduction-tensorFlow.pdf')}
          />
        </li>
      </ul>
    </>
  )
}

const DatabaseStorage = () => {
  return (
    <>
      <h2>Databases and Storages</h2>
      <ul className={listStyle}>
        <li>
          <TargetBlankLink
            title="M101JS: MongoDB for Node.js Developers"
            href={link('databases/mongo-101js.png')}
            Element={
              <span className={textClassName}>
                M101JS:
                <Keyword word="MongoDB" /> for <Keyword word="Node.js" />{' '}
                Developers. Authorized by MongoDB University;
              </span>
            }
          />
        </li>
        <li>
          <TargetBlankLink
            title="Hadoop Platform and Application Framework"
            href={link('databases/hadoop.pdf')}
            Element={
              <span className={textClassName}>
                Hadoop Platform and Application Framework. Authorized by
                University of California;
              </span>
            }
          />
        </li>
      </ul>
    </>
  )
}

const ProjectManagement = () => {
  return (
    <>
      <h2>Project management and Agile Development</h2>
      <ul className={listStyle}>
        <li>
          <TargetBlankLink
            Element={
              <span className={textClassName}>
                Project Initiation: Starting a Successful Project
              </span>
            }
            href={link('project-management/starting-successful-project.pdf')}
            title="Project Initiation: Starting a Successful Project"
          />
        </li>

        <li>
          <TargetBlankLink
            href={link('project-management/foundations.pdf')}
            title="Foundations of Project Management"
            Element={
              <span className={textClassName}>
                Foundations of Project Management. Authorized by Google;
              </span>
            }
          />
        </li>
      </ul>
    </>
  )
}

const Section = () => {
  return (
    <>
      <Blockchain />
      <WebMobile />
      <CloudDevelopment />
      <MachineLearning />
      <DatabaseStorage />
      <ProjectManagement />
    </>
  )
}

const Content = () => {
  return (
    <>
      <Slogan>
        <span className="active-color">13 years</span> of{' '}
        <span className="active-color">helping</span> build an inclusive{' '}
        <span className="active-color">web2</span> or{' '}
        <span className="active-color">web3</span> projects
      </Slogan>
      <Section />
    </>
  )
}

export default Content
