import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  themeToggle = false;
  ToggleTheme(){
    this.themeToggle = !this.themeToggle;
  }
//   onDocumentMouseUp(){
//       console.log("this is a test");
      
//   }
//   onDocumentMouseLeft(){
//       console.log("this is a better test");
      
//   }
}
