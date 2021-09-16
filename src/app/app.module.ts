import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';
import { AddReviewComponent } from './add-review/add-review.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    AdvancedSearchComponent,
    SearchResultComponent,
    ReviewListComponent,
    ReviewDetailComponent,
    AddReviewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
