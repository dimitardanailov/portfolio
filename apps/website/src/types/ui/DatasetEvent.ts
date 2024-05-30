import {MouseEvent} from 'react'

export type DatasetEvent = {
  target: {
    dataset: {
      sort: string
    }
  }
}

export type MouseDatasetEventHandler = MouseEvent & DatasetEvent
