import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hackathon';
  selectedLanguage: string = '';
 
  onLanguageChange() {
    // You can perform additional actions when the language changes
    console.log('Selected language:', this.selectedLanguage);
    // You might want to navigate to different routes or load content based on the selected language
  }
}
