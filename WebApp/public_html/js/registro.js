"use strict";

define(() => {
    
    return class registro {
        
        static consulta(fnExito) {
            firebase.database().ref('conocido').on('value',
                lista => {
                    const modelos = [];
                    lista.forEach(registro => {
                        const val = registro.val();
                        const info =new registro();
                        info.id= registro.keys;
                        info.nombre = val.nombre;
                        info.apellidos = val.apellidos;
                        info.correo = val.correo;
                        info.contraseña = val.contraseña;
                        modelos.push(info);
                    });
                    fnExito(modelos);
                },
                e => Util.muestraExcepcion(e));
        }
        static desconecta() {
            firebase.database().ref('conocido').off();
        }
        agrega() {
            this.valida();
            return this.realizaAgrega();
        }
        valida() {
            const nombre= this.nombre;
            Util.valida(nombre, "Falta el nombre.");
            Util.valida(nombre.length <= 255, 
                "El nombre tiene mas de 255 caracteres.");
        }
        realizaAgrega() {
            return firebase.database().ref('conocido').push().set(this);
        }
        modifica() {
            this.valida();
            return this.realizaModifica();
        }
        realizaModifica() {
            return firebase.database().ref('conocido').child(this.id)
                    .set({
                        nombre: this.nombre,
                        apellidos: this.apellidos,
                        correo: this.correo,
                        contraseña: this.contraseña
            });
        }
        elimina(){
            return firebase.database().ref('conocido').child(this.id).remove();
        }
    };
});


