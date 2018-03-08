import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data.service';
import { ContactInfo } from '../interfaces';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 @ViewChild('formContact') form: any;
   constructor(private _dataService: DataService,private toastr: ToastrService) { }

  ngOnInit() {
  }
 
 showSuccess() {
   this.form.reset();
    this.toastr.success('Successfully acepted 😃', 'Success!',{
        positionClass: 'toast-bottom-right'
    });
  }
contact(info: ContactInfo) {
    this._dataService.contact(info).subscribe(
      data =>this.showSuccess(),
      err => console.error(err)
    );
  }


}
