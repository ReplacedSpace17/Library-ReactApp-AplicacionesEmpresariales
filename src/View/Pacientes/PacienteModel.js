class Paciente {
    constructor(PID, UID, Nombre, ApellidoP, ApellidoM, Genero, Direccion, Telefono, FechaIngreso, FechaNacimiento) {
      this.PID = PID;
      this.UID = UID;
      this.Nombre = Nombre;
      this.ApellidoP = ApellidoP;
      this.ApellidoM = ApellidoM;
      this.Genero = Genero;
      this.Direccion = Direccion;
      this.Telefono = Telefono;
      this.FechaIngreso = FechaIngreso;
      this.FechaNacimiento = FechaNacimiento;
    }
  
    // Puedes agregar métodos o funciones aquí según tus necesidades.
  }
  
  module.exports = Paciente;
  