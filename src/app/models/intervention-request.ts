export interface InterventionRequest {
  id: number,
  customer: string,
  customerContactId: number,
  customerContact: string,
  technicianId: number,
  technician: string,
  contractTypeId: number,
  contractType: string,
  dateRequest: string,
  interventionReason: string[],
  status: string,
  statusId: number,
}
