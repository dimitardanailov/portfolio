import Position from './Position'

type PartialPosition = Pick<Position, 'title' | 'period'>

type ResumePosition = PartialPosition & {
  readonly summaryItems: Array<string>
  readonly technologies: Array<string>
}

export default ResumePosition
