'use client'

import {Slogan} from '@/styled-components'

import {listStyle} from '@/shared/tailwind'

import {Keyword} from '@/components/SEO'
import TargetBlankLink from '@/components/TargetBlankLink'

import {experienceByYears} from '@/constants/text'

import {SectionTitle} from './components'

function link(sufix: string) {
  const domain = '/certificates/'

  return domain + sufix
}

const Blockchain = () => {
  return (
    <>
      <SectionTitle text="Blockchain and Defi" />
      <ul className={listStyle}>
        <li>Blockchain Basics. Authorized by Cyfrin Updraft</li>
        <li>
          <Keyword word="Smart contract development with Solidity" />.
          Authorized by Cyfrin Updraft
        </li>
        <li>
          <TargetBlankLink
            Element={
              <span>
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
              <span>
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
              <span>
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
  const sectionTitle = 'Web and Mobile Development'

  return (
    <>
      <SectionTitle text={sectionTitle} />

      <ul className={listStyle}>
        <li>
          <TargetBlankLink
            Element={
              <span>
                The Ultimate <Keyword word="React Native" /> Series:
                Fundamentals;
              </span>
            }
            href={link('mobile/react-native-intro.pdf')}
            title="The Ultimate React Native Series: Fundamentals;"
          />
        </li>
        <li>
          <TargetBlankLink
            Element={
              <span>
                Introduction to Mobile Development with{' '}
                <Keyword word="React Native" />;
              </span>
            }
            href={link('mobile/intro.pdf')}
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
      <SectionTitle text="Cloud development and Containerization" />
      <ul className={listStyle}>
        <li>
          <TargetBlankLink
            Element={
              <span>
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
      <SectionTitle text="Machine Learning and Artificial Intelligence" />
      <ul className={listStyle}>
        <li>
          <TargetBlankLink
            Element={
              <span>
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
      <SectionTitle text="Databases and Storages" />
      <ul className={listStyle}>
        <li>
          <TargetBlankLink
            title="M101JS: MongoDB for Node.js Developers"
            href={link('databases/mongo-101js.png')}
            Element={
              <span>
                M101JS: <Keyword word="MongoDB" /> for{' '}
                <Keyword word="Node.js" /> Developers. Authorized by MongoDB
                University;
              </span>
            }
          />
        </li>
        <li>
          <TargetBlankLink
            title="Hadoop Platform and Application Framework"
            href={link('databases/hadoop.pdf')}
            Element={
              <span>
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
      <SectionTitle text="Project management and Agile Development" />
      <ul className={listStyle}>
        <li>
          <TargetBlankLink
            Element={
              <span>Project Initiation: Starting a Successful Project</span>
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
              <span>
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
        <span className="active-color">{experienceByYears} years</span> of{' '}
        <span className="active-color">helping</span> build an inclusive{' '}
        <span className="active-color">web2</span> or{' '}
        <span className="active-color">web3</span> projects
      </Slogan>
      <Section />
    </>
  )
}

export default Content
