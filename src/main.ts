import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // ✅ Correct import path
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Required for ngModel

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(FormsModule)] // ✅ Provide FormsModule globally
}).catch(err => console.error(err));
