import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit{
  constructor(private fb: FormBuilder) { }
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
    console.log('Selected language:', this.selectedLanguage);
    // You might want to navigate to different routes or load content based on the selected language
  }
  onSubmit() {
    if (this.signinForm.valid) {
      // Perform sign-in logic here
      console.log('Sign In Successful!', this.signinForm.value);
    }
  }
}
