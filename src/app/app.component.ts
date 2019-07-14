import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	ngOnInit() {
		onInitMaterializeJs();
	}
}

const onInitMaterializeJs = () => {
	// For Collapsible List
	let elems: any; 
	let instances:any;
	elems = document.querySelectorAll('.collapsible');
	instances = M.Collapsible.init(elems);
	elems = document.querySelectorAll('.sidenav');
    instances = M.Sidenav.init(elems);
};
