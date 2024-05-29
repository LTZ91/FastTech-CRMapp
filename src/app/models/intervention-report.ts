

export interface InterventionReport {
  // id: number,
  // interventionModeId: number,
  // interventionMode: string,
  // customerContactId: number,
  // customerContact: string,
  // technicianId: number,
  // technician: string,
  // date: string,
  // startTime: string,
  // endTime: string,
  // breakTime: string,
  // totalDuration: string,
  // discount: number,
  // discountReason: string,
  // interventionReason: string[],
  // activitiesPerformed: string[],
  // pendingActivities: string[]

  id: number,
  interventionRequestId: number,
  interventionRequest: string,
  interventionModeId: number,
  interventionMode: string,
  customerContactId: number,
  customerContact: string,
  technicianId: number,
  technician: string,
  date: string,
  startTime: string,
  endTime: string,
  breakTime: number,
  totalDuration: string,
  discount: number,
  discountReason: string,
  interventionReason: string[],
  activitiesPerformed: string[],
  pendingActivities: string[]
}


