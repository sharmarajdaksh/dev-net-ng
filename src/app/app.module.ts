import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { environment } from 'src/environments/environment';
import * as fromApp from './store/app.reducer';
import { SharedEffects } from './shared/store/shared.effects';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';

@NgModule({
	declarations: [
		AppComponent,
		TestComponentComponent,
		NavComponent,
		AboutComponent,
		FooterComponent,
		HomeComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		StoreModule.forRoot(fromApp.appReducer),
		EffectsModule.forRoot([SharedEffects]),
		StoreDevtoolsModule.instrument({ logOnly: environment.production }),
		StoreRouterConnectingModule.forRoot()
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
