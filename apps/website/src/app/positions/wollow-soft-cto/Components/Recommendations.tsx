'use client'

import {HFlexBox} from '@/styled-components/Grid'
import StrongLabel from '@/styled-components/Text/StrongLabel'

import IvelinLetter from '@/app/recommendation-letters/projects/wollow/components/IvelinLetter'
import MoLetter from '@/app/recommendation-letters/projects/wollow/components/MoLetter'
import AntoanLetter from '@/app/recommendation-letters/projects/wollow/components/AntoanLetter'

import {width} from '../../consants'

const Recommendations = () => {
  return (
    <>
      <HFlexBox>
        <StrongLabel width={width}>Recommendations</StrongLabel>
      </HFlexBox>
      <IvelinLetter />
      <MoLetter />
      <AntoanLetter />
    </>
  )
}

export default Recommendations
