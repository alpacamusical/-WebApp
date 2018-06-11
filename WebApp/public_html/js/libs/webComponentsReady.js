/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";
define({
    load: function (name, req, onLoad, config) {
        if (config.isBuild || ('import' in document.createElement('link')
                && window.customElements)) {
            onLoad(null);
        } else {
            document.addEventListener('WebComponentsReady', onLoad);
        }
    }
});

