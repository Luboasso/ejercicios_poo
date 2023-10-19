// // Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), que muestra por pantalla las propiedades de la persona.

class Persona {
    constructor(nombre, edad, genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    obtDetalles(){
        console.log(`Nombre:${this.nombre}`, `Edad: ${this.edad}`, `Genero: ${this.genero}`)
    }
}


// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar(), que muestre por pantalla el resultado.

class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo){
       super(nombre, edad, genero)
       this.curso = curso;
       this.grupo = grupo;
    }
    registrar(){
        this.obtDetalles();
        console.log(`Curso: ${this.curso}`, `Grupo: ${this.grupo}`)
    }
}

// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que muestre por pantalla el resultado.

class Profesor extends Persona {
    constructor(nombre, edad, genero, asignatura, nivel){
        super(nombre, edad, genero)
        this.asignatura = asignatura;
        this.nivel = nivel;
     }
     asignar(){
         this.obtDetalles();
         console.log(`Curso: ${this.asignatura}`, `Grupo: ${this.nivel}`)
     }
 }

 