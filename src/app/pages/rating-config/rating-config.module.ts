import {
    NgModule
} from '@angular/core';
import {
    CommonModule
} from '@angular/common';
import {
    Routes,
    RouterModule
} from '@angular/router';
import {
    RatingConfigComponent
} from './rating-config.component';
const routes: Routes = [{
    path: '',
    component: RatingConfigComponent
}];
@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    declarations: [RatingConfigComponent],
    exports: []
}) export class RatingConfigModule {}