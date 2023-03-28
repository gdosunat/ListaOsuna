export class Alumno {

  constructor(
    public id: number,
    public nombre: string,
    public apellido: string,
    public edad: number,
    public fechaIngreso: Date,
    public calificacion: number
    ){}
}
