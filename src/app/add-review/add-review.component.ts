import { Component, OnInit } from '@angular/core';
import { faStar, faPaperclip } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css'],
})
export class AddReviewComponent implements OnInit {
  faStar = faStar;
  faPaperclip = faPaperclip;

  constructor() {}

  onSubmit(form) {}
  ngOnInit(): void {}
}
