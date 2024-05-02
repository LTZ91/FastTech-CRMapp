export interface InterventionRequest {
  id: number,
  customerContactId: number,
  customerContact: string,
  technicianId: number,
  technician: string,
  dateRequest: string,
  interventionReason: string[]
}
