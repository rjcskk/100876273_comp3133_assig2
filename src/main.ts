// main.ts
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app/app.routes'; // Assuming you have defined your routes

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      HttpClientModule, // Make sure HttpClientModule is provided here
      RouterModule.forRoot(APP_ROUTES)
    ),
    // Add other providers as necessary
  ],
}).catch(err => console.error(err));
