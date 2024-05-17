export interface InterventionsReport{
  id: number,
  interventionRequestId: number,
  startTime: string,
  endTime: string,
  breakTime: number,
  discount: number,
  discountReason: string,
  activitiesPerformed:string[]
  pendingActivities: string[]
  interventionModeId: number
}
