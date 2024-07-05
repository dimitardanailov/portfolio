import Position from './Position'

type PartialPosition = Pick<Position, 'title' | 'period'>

type ResumePosition = PartialPosition & {
  summaryItems: Array<string>
  technologies: Array<string>
}

export default ResumePosition
