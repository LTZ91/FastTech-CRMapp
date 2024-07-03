export interface InterventionRequest {
  id: number,
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
