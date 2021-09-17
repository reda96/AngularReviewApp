import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { DoctorsService } from '../doctors.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  faSearch = faSearch;
  searchForm: FormGroup;
  constructor(private dcService: DoctorsService) {}

  ngOnInit(): void {
    const doctorName = '';
    this.searchForm = new FormGroup({
      name: new FormControl(doctorName, Validators.required),
    });
    this.dcService.searchResult.subscribe((result) => {
      console.log(result);
    });
  }
  onSubmit() {
    let name = this.searchForm.value['name'];
    this.dcService.onSearchDoctorByName(name);
  }
}
