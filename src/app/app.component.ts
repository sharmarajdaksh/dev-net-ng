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
	const elems = document.querySelectorAll('.collapsible');
	const instances = M.Collapsible.init(elems);
};
