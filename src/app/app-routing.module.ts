import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { AddReviewComponent } from './add-review/add-review.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { SearchResultComponent } from './search-result/search-result.component';
const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'add', component: AddReviewComponent },
  { path: 'advanced-search', component: AdvancedSearchComponent },
  { path: 'result', component: SearchResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
