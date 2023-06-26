/**
 * Resources:
 * https://developer.mozilla.org/en-US/docs/Web/API/clearTimeout
 */

export enum TimeoutExecutionStatus {
  InQueue = 'InQueue',
  Completed = 'Completed',
}

class AppTimeout {
  timeoutID: number
  status: TimeoutExecutionStatus

  constructor(
    timeoutID: number,
    status: TimeoutExecutionStatus = TimeoutExecutionStatus.InQueue,
  ) {
    this.timeoutID = timeoutID
    this.status = status
  }

  static emptyArray() {
    const timeouts: AppTimeout[] = []

    return timeouts
  }

  static emptyRecord(): AppTimeout {
    const timeout = new AppTimeout(1)

    return timeout
  }

  static clearAllIntervals(timeouts: AppTimeout[]) {
    timeouts.forEach((timeout: AppTimeout) => {
      clearInterval(timeout.timeoutID)
    })
  }
}

export default AppTimeout
