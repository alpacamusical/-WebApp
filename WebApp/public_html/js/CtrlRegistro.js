/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";
define(["registro"], registro => {
    return class {
        constructor() {
            document.forma.addEventListener("submit", () => {
                try {
                    this.guarda();
                } catch (e) {
                    Util.muestraExcepcion(e);
                }
            });
            document.forma.addEventListener("click", evt => {
                try {
                    const target = evt.target;
                    const name = target.name;
                    if(target.type === "button" && name) {
                        this[name]();
                    }
                } catch (e) {
                    Util.muestraExcepcion(e);
                }
            });
        }
        inicia() {
            try {
                this.muestraVistaMaestra();
            } catch (e) {
                Util.muestraExcepcion(e);
            }
        }
        muestraVistaMaestra() {
            document.forma.appenChild(document.createElement("form-registro"));
        }
    };
});

