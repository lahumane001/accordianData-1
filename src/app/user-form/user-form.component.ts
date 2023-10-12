import { Component } from '@angular/core';
import { DataHanlerService } from '../dataHandler.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  formData:any;
  constructor(private dataServ : DataHanlerService){}

  ngOnInit(): void {
    this.formData = new FormGroup({
      title : new FormControl('', Validators.required),
      description : new FormControl('', Validators.required)
    })
  }
  
  OnSubmit(){
    console.log(this.formData.value)
    this.dataServ.postData(this.formData.value).subscribe((data : any)=>{
      console.log(data)
    })
  
    this.formData.reset()
  }
}
