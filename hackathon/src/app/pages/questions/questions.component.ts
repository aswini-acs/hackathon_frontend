// questions.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  form: FormGroup;
  questions: any = [];

  constructor(private formBuilder: FormBuilder, private apiservice: ServiceService) {
    this.form = this.formBuilder.group({
      data: this.formBuilder.array([])
    });
  }

  ngOnInit(): void {
    this.apiservice.get().subscribe((data: any) => {
      this.questions = data.data;
      console.log("this.questions", this.questions);
    });
  }

  selectChoice(topic: any, question: any, choice: any) {
    question.selectedChoice = choice.id;

    // Get the answers form array
    const answersArray = this.form.get('data') as FormArray;

    // Check if there's an existing answer for this question
    const existingAnswerIndex = answersArray.controls.findIndex(
      (control) => control.get('questionId')!.value === question.id
    );

    if (existingAnswerIndex !== -1) {
      // Update the existing answer
      answersArray.at(existingAnswerIndex).get('choiceId')!.setValue(choice.id);
    } else {
      // Create a new answer
      answersArray.push(
        this.formBuilder.group({
          topicId: topic.id,
          questionId: question.id,
          choiceId: choice.id
        })
      );
    }
  }


  submitForm() {
    // You can access all the selected values using this.form.value
    const allAnswers = this.form.value.data;
    console.log('ans', this.form.value);

    // Assuming you have an API service method to send the response
    // this.apiservice.sendResponses(allAnswers).subscribe((response: any) => {
    //   console.log("API response:", response);
    //   // Handle the API response as needed
    // });
  }
  isDataArrayEmpty(): boolean {
    const dataArray = this.form.get('data') as FormArray;
    return !dataArray || dataArray.length === 0;
  }
}
