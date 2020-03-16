import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
 isVisable : boolean = true;
 private number : number = 4443434;
 user = {
   name: 'omar'
 }
 switchVisability(){
   this.isVisable =! this.isVisable; 
 }
updateValue(){
this.user.name = 'Ali';
}
 
 get counter() {
 return this.number;
 }

 set counter(value){
    this.number = value;
 }

 increment (){
   this.counter++;
 }

 decrement (){
   this.counter--;
 }

}
