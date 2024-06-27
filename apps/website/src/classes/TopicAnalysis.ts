export type Row = {
  label: string
  advantages: string[]
  disadvantages: string[]
}

class TopicAnalysis {
  rows: Row[] = []

  addRow(label: string, advantages: string[], disadvantages: string[]) {
    const row: Row = {
      label,
      advantages,
      disadvantages,
    }

    this.rows.push(row)
  }
}

export default TopicAnalysis
