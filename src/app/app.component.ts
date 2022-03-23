import { Component, VERSION, ViewChild, AfterViewInit, AfterViewChecked,AfterContentChecked, AfterContentInit } from '@angular/core';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  name = 'Angular ' + VERSION.major;

  @ViewChild(ChildcomponentComponent) childComp: ChildcomponentComponent;
   message: string;
  
   ngAfterViewInit() {
    this.message = this.childComp.childMessage;
    console.log(this.message);
  }

  ngAfterViewChecked(){
    this.message = this.childComp.childMessage;
    console.log(this.message);
  }

  // ngAfterContentChecked(){
  //   this.message = this.childComp.childMessage;
  //   console.log(this.message);
  // }


}
