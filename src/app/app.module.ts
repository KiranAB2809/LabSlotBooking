import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSelectModule, MatFormFieldModule, MatToolbarModule,MatInputModule, MatFormFieldControl, MatCardModule, MatExpansionModule, MatGridListModule, MatTableModule, MatSnackBarModule } from '@angular/material';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
// import { MaterialModule } from './material-module';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule,
    MatTableModule,
    MatSnackBarModule 
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }, 
    { provide: MatFormFieldControl, useExisting: HomeComponent },   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
