import { Component } from '@angular/core';
import {InterventionRequest} from "../../../models/intervention-request";
import {InterventionRequestService} from "../../../services/intervention-request.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrl: './request-details.component.scss'
})
export class RequestDetailsComponent {


  request!: InterventionRequest;

  constructor(private interventionRequestService: InterventionRequestService, private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void{
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : null;

    if (id !== null) {
      this.interventionRequestService.getInterventionRequestById(id).subscribe(data => {
        if (data) {
          this.request = data;
          console.log(data);
        }
      })
    } else {
      console.error('ID is null');
    }

  }

  send() {

  }
}
