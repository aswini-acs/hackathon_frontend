import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  constructor(private apiservice: ServiceService,) {

  }
  questions: any = [];
  ngOnInit(): void {
    this.apiservice.get().subscribe((data: any) => {
      this.questions = data.data;
      console.log("this.questions", this.questions);
    });
    
  }

}
