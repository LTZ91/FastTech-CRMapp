export interface InterventionRequest {
  id: string,
  customerContactId: number,
  technicianId: number,
  dateRequest: string,
  interventionReason: string[]
}
