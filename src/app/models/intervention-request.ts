export interface InterventionRequest {
  id: number,
  customer: string,
  customerContactId: number,
  customerContact: string,
  technicianId: number,
  technician: string,
  contractTypeId: number,
  contractType: string,
  priorityId: number,
  priority: string,
  dateRequest: string,
  interventionReason: string[],
  cancellationReason: string,
  status: string,
  statusId: number,
  interventionClassificationId: number,
  interventionClassification: string,
}
