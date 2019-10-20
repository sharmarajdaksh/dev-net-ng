import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducer';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormArray, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit, OnDestroy {
    userid: number;
    darkMode: boolean;
    userForm: FormGroup;
    nightModeSubscription: Subscription;
    skillsEmpty: boolean;
    educationEmpty: boolean;
    workEmpty: boolean;
    private userSub: Subscription; // link it to store where user data is at

    constructor(
        private store: Store<fromApp.AppState>,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.materializeInit();
        this.nightModeSubscription = this.store
            .select('shared')
            .pipe(map(sharedState => sharedState.nightMode))
            .subscribe((darkMode: boolean) => {
                this.darkMode = darkMode;
            });
        this.initForm();
    }

    private initForm() {
        let name = '';
        let imagepath = '';
        let bio = '';
        let education = new FormArray([]);
        let work = new FormArray([]);
        let skills = new FormArray([]);
        let github = '';
        let facebook = '';
        let twitter = '';
        let linkedin = '';
        // get data from subscription

        this.userForm = new FormGroup({
            name: new FormControl(name, Validators.required),
            imagepath: new FormControl(imagepath, Validators.required),
            bio: new FormControl(bio, Validators.required),
            education,
            work,
            skills,
            github: new FormControl(github),
            linkedin: new FormControl(linkedin),
            facebook: new FormControl(facebook),
            twitter: new FormControl(twitter)
        });
    }

    onCancel() {
        this.router.navigate(['../'], { relativeTo: this.route });
    }

    onSubmit() {
        if (this.userSub) {
            this.userSub.unsubscribe();
        }
    }

    ngOnDestroy() {
        this.nightModeSubscription.unsubscribe();
    }

    materializeInit() {
        let elems = document.querySelectorAll('select');
        let instances = M.FormSelect.init(elems);
    }
}
