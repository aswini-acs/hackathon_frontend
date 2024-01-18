import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
  selectedLanguage: string = 'en';
 
  onLanguageChange() {
    // You can perform additional actions when the language changes
    console.log('Selected language:', this.selectedLanguage);
    // You might want to navigate to different routes or load content based on the selected language
  }
}
