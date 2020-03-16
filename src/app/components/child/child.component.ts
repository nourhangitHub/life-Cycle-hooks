import { Component, OnInit ,Input,OnChanges,DoCheck,OnDestroy,SimpleChange,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit ,OnChanges, DoCheck ,OnDestroy{
  private myNumber : number;
  @Input() updateName : string;
  constructor() {
    console.log('from ChildComponent constructor')
  } 

  @Input() 
   set myNewNumber( number :number){
    this.myNumber = number ;
   }
   
   get myNewNumber(){
     return this.myNumber;
   }

  ngOnChanges(changes : SimpleChanges) {
    const newNumberChange : SimpleChange = changes.myNewNumber;
    
    if(newNumberChange.previousValue !== undefined){
      console.log('previous value from ngOnChanges :', newNumberChange.previousValue);
      console.log('crrunt value ngOnChanges :', newNumberChange.currentValue);
    }    
    this.myNewNumber = newNumberChange.currentValue;
    console.log('from ngOnChanges');
}
  
  ngOnInit() {
    console.log('from ngOnInit',this.myNewNumber) ; 
  }

  ngDoCheck(){
   console.log('from ngDoCheck ' , this.updateName) ; 
  }

  ngAfterContentInit(){
    console.log('from ngAfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('this from ngAfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('this from ngAfterViewInit');
  }

  ngAfterViewChecked(){
    console.log(' this from ngAfterViewChecked');
  }

  ngOnDestroy(){
    console.log('child component destroyed');
  }

}
