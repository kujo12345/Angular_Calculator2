import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num1: any
  num2: any
  result: any

  getLength(value: any){
  const parsedValue = parseInt(value);
  console.log(parsedValue);
  const parsedValue2 = parseInt(value);
  console.log(parsedValue2);
  }

  add(){
    this.result = this.num1 + this.num2; 
    return this.result;
  }
  subtract(){
    this.result = this.num1 - this.num2; 
    return this.result;
  }
  multiply(){
    this.result = this.num1 * this.num2; 
    return this.result;
  }
  divide(){
    this.result = this.num1 / this.num2; 
    return this.result;
  }

}
