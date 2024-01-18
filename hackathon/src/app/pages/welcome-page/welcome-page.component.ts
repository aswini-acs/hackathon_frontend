import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit{
  constructor(private fb: FormBuilder, private router: Router) { }
  signinForm!: FormGroup
  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  selectedLanguage: string = 'en';
 
  onLanguageChange() {
    // You can perform additional actions when the language changes
   
    // You might want to navigate to different routes or load content based on the selected language
  }
  onSubmit() {
    if (this.signinForm.valid) {
      // Navigate to the next route
      console.log('Form is valid, navigating to questions');
      this.router.navigate(['/questions']);
    }
  }
}
