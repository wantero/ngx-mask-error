import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder
  ) {
    this.formGroup = _formBuilder.group({
      phone: ['', [Validators.required, Validators.pattern('^\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}$')]],
      postalCode: ['', [Validators.required, Validators.pattern('^\\d{5}[-]\\d{3}$')]],
      phone2: ['', [Validators.required, Validators.pattern('^\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}$')]],
      postalCode2: ['', [Validators.required, Validators.pattern('^\\d{5}[-]\\d{3}$')]]
    });
  }

  ngOnInit() {
  }

}
