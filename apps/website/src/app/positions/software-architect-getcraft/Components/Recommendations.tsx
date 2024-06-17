'use client'

import {HFlexBox} from '@/styled-components/Grid'
import StrongLabel from '@/styled-components/Text/StrongLabel'

import AlexLetter from '@/app/recommendation-letters/projects/getcraft/components/AlexLetter'
import FannyLetter from '@/app/recommendation-letters/projects/getcraft/components/FannyLetter'
import BayuLetter from '@/app/recommendation-letters/projects/getcraft/components/BayuLetter'
import MarselLetter from '@/app/recommendation-letters/projects/getcraft/components/MarselLetter'
import AjengLetter from '@/app/recommendation-letters/projects/getcraft/components/AjengLetter'

import {width} from '../../consants'

const Recommendations = () => {
  return (
    <>
      <HFlexBox>
        <StrongLabel width={width}>Recommendations</StrongLabel>
      </HFlexBox>
      <AlexLetter />
      <FannyLetter />
      <BayuLetter />
      <MarselLetter />
      <AjengLetter />
    </>
  )
}

export default Recommendations
