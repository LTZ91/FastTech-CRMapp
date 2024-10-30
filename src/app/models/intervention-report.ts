import {DateTime} from "@tabler/core/dist/libs/litepicker/dist/types/datetime";


export interface InterventionReport {
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
  startTime: DateTime,
  endTime: DateTime,
  breakTime: number,
  totalDuration: string,
  discount: number,
  discountReason: string,
  interventionReason: string[],
  activitiesPerformed: string[],
  pendingActivities: string[]
}


