import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorsService } from '../doctors.service';
@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.css'],
})
export class AdvancedSearchComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  constructor(private drService: DoctorsService) {}

  ngOnInit(): void {}
  onSubmit() {
    this.drService.onAdvancedSearch(
      this.form.value['name'],
      this.form.value['city'],
      this.form.value['specialization']
    );
  }
}
