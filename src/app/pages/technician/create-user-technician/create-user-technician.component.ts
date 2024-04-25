import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {TechnicianService} from "../../../services/technician.service";
import {Technician} from "../../../models/technician";
import {IUser} from "../../../models/user";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-user-technician',
  templateUrl: './create-user-technician.component.html',
  styleUrl: './create-user-technician.component.scss'
})
export class CreateUserTechnicianComponent implements OnInit{
  constructor(
    private userService: UserService,
    private technicianService: TechnicianService,
    private formBuilder: FormBuilder
  ) { }
  technician! :Technician[];
  user!: IUser [];
  formTechnician!: FormGroup;
  ngOnInit(): void {
    this.getTechnician();
    this.getUser();
    this.formTechnician = this.formBuilder.group({
      id: new FormControl(``, Validators.required),
      technicianId: new FormControl(``, Validators.required)
    });
  }

  getTechnician(){
    this.technicianService.readAll().subscribe(value => {
      if(value){
        this.technician=value;
      }
    })
  }

  getUser(){
    this.userService.readAll().subscribe(value => {
      if(value){
        this.user=value;
      }
    })
  }
  onCreate(){
    console.log(this.formTechnician.value)
    this.userService.userTechnician(this.formTechnician.value).subscribe({
      next: data => {
        if (data) {
          this.userService.showMessageSuccess(`done`);
        }
      },
      error: err=>{
        this.userService.showMessageFail(`Invalid`)
      }
    })
  }

  cancel() {
    this.formTechnician.reset()
  }
}
