import { Component, OnInit, ViewChild } from '@angular/core';

class Book {
  constructor(
    public firstName: string = '',
    public secondName: string = '',
    public email: string = '',
    public phone: string = '',
    public date: string = '',
    public time: string = '') {

    }
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {

  model: Book = new Book();
  time: string [] = ['10:00am', '11:00am', '12:00 noon', '1:00pm', '4:00pm', '6:00pm', '7:00pm'];

  @ViewChild('form') form: any;

  constructor() { }

  ngOnInit() {

  }

  onSubmit() {
    this.form.reset();
  }

}
