import {MouseEventHandler} from 'react'

export type DatasetEvent = {
  target: {
    dataset: {
      sort: string
    }
  }
}

export type MouseDatasetEventHandler = MouseEventHandler & DatasetEvent
