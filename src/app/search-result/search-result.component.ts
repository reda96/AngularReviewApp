import { Component, OnInit, OnDestroy } from '@angular/core';
import { DoctorsService } from '../doctors.service';
import { Doctor } from '../doctor.model';
import { Subscription } from 'rxjs';
import {
  faStar,
  faMapMarkerAlt,
  faMoneyBill,
  faStethoscope,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit, OnDestroy {
  faStar = faStar;
  faMap = faMapMarkerAlt;
  faMoney = faMoneyBill;
  faStethoscope = faStethoscope;
  result: Doctor[];
  resultSub: Subscription;
  advancedSearchresultSub: Subscription;
  constructor(private dcService: DoctorsService) {}

  ngOnInit(): void {
    this.resultSub = this.dcService.searchResult.subscribe(
      (result: Doctor[]) => {
        if (result) this.result = result;
      }
    );
    this.advancedSearchresultSub =
      this.dcService.advancedSearchResult.subscribe((result: Doctor[]) => {
        if (result) this.result = result;
      });
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.resultSub.unsubscribe();
    this.advancedSearchresultSub.unsubscribe();
  }
}
