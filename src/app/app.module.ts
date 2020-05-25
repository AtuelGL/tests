import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MedicosComponent } from './intermediate/spys/medicos.component';
import { MedicoComponent } from './intermediate2/medico/medico.component';
import { MedicoService } from './intermediate2/medico/medico.service';
import { HospitalComponent } from './intermediate2/hospital/hospital.component';
import { IncrementadorComponent } from './intermediate2/incrementador/incrementador.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './advance/routes/app.routes';
import { NavbarComponent } from './advance/navbar/navbar.component';
import { RouterMedicoComponent } from './advance/router-medico/router-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
    IncrementadorComponent,
    NavbarComponent,
    RouterMedicoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [MedicoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
