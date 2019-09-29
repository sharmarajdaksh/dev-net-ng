import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html',
	styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
	isLoginMode = true;
	errorMessage = '';

	constructor() {}

	ngOnInit() {}

	onToggleLoginMode() {
		this.isLoginMode = !this.isLoginMode;
	}
}
