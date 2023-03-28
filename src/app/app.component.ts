import { Component } from '@angular/core';
import { Alumno } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ListaOsuna';

  public alumnos: Alumno[] = [
    new Alumno(1, "Guadalupe", "Osuna", 27, new Date("2021-08-29"), 0.97),
    new Alumno(2, "Berenice", "Apodaca", 26, new Date("2022-06-21"), 0.87),
    new Alumno(3, "Liliana", "Tirado", 26, new Date("2020-10-15"), 0.95),
    new Alumno(4, "Fernanda", "Rodriguez", 28, new Date("2022-04-16"), 0.90),
    new Alumno(5, "Lorena", "Zarate", 25, new Date("2021-11-07"), 0.72),
    new Alumno(6, "Juan", "Torres", 24, new Date("2022-06-21"), 0.46),
    new Alumno(7, "Conrado", "Castillo", 22, new Date("2022-01-02"), 0.76),
    new Alumno(8, "Angelina", "Garrido", 20, new Date("2021-05-29"), 0.44),
    new Alumno(9, "Juan", "Beltran", 26, new Date("2022-06-21"), 0.22),
    new Alumno(10, "Alicia", "Tirado", 26, new Date("2020-10-15"), 0.76),
    new Alumno(11, "Carla", "Jimenez", 28, new Date("2022-04-16"), 0.90),
    new Alumno(12, "Hernan", "Zatarain", 25, new Date("2021-11-07"), 0.99),
    new Alumno(13, "Mia", "Pardo", 24, new Date("2022-06-21"), 0.46),
    new Alumno(14, "Diana", "Rubio", 22, new Date("2022-01-02"), 0.76),

  ]
}
