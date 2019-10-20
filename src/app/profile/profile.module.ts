import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { EditComponent } from './edit/edit.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ProfileComponent, EditComponent],
    imports: [
        ProfileRoutingModule,
        SharedModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class ProfileModule {}
