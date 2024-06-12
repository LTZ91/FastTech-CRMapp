export interface Contract {
  id: number,
  customerId: number,
  customer: string,
  serviceId: number,
  service: string,
  contractTypeId: number,
  contractType: string,
  price: number,
  hours: number,
  startDate: string,
  endDate: string,
  statusId: number,
  contractStatus: string,
  terms: string[]
  conditions: string[]
}
