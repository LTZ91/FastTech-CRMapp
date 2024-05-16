import {UserEffects} from "./user.effects";
import {ClientEffects} from "./client.effects";
import {HourEffects} from "./hour.effects";
import {PriceEffects} from "./price.effects";
import {ServicesProvidedEffects} from "./services-provided.effects";
import {ContractStatusEffects} from "./contract-status.effects";
import {ContractEffects} from "./contract.effects";
import {TechnicianEffects} from "./technician.effects";
import {InterventionReportEffects} from "./intervention-report.effects";
import {ClientContactEffects} from "./client-contact.effects";
import {InterventionRequestEffects} from "./intervention-request.effects";

export const effects = [
  UserEffects, ClientEffects, HourEffects, PriceEffects,
  ServicesProvidedEffects, ContractStatusEffects, ContractEffects, TechnicianEffects,
  InterventionReportEffects, ClientContactEffects, InterventionRequestEffects
]
