/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";
require.config({
    baseUrl: 'js',
    paths: {
        webComponentsReady: 'libs/webComponentsReady',
        domReady: 'https://cdnjs.cloudflare.com/ajax/libs/require-domReady/2.0.1/domReady'
    }
});
require(["CtrlRegistro", "registro", "domReady!", "webComponentsReady!"],
        (CtrlRegistro, registro) =>{
            const controlador = new CtrlRegistro(new registro());
            controlador.inicia();
        });

