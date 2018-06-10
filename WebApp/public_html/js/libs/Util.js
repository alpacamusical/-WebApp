/* 
 * Copyright 2018 Ricardo Armando Machorro Reyes
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";
class Util {
  /** Devuelve el element previo a un script.
   * @returns {HTMLElement} element previo al script que ejecuta esta función. */
  static elementPrevio() {
    const currentScript = document.currentScript
        ? document.currentScript : document._currentScript;
    return currentScript.previousElementSibling;
  }
  /** Registra un element con el nombre indicado, suponiendo que el element
   * previo contiene el template con el contenido del web component.
   * @param {String} nombre nombre del element que se declara. */
  static registraElementSimple(nombre) {
    const template = Util.elementPrevio();
    Util.registraElement(nombre, class extends HTMLElement {
      connectedCallback() {
        if (template) {
          Util.agregaTemplate(this, template);
        }
      }
    });
  }
  /** Registra un element con el nombre y clase indicados, suponiendo que el
   * element previo contiene el template con el contenido del web component.
   * @param {String} nombre nombre del element que se declara.
   * @param {Class} clase clase que extiende HTMLElement y define el
   * comportamiento del element. */
  static registraElement(nombre, clase) {
    window.customElements.define(nombre, clase);
  }
  /** Clona el contenido de un template y lo agrega a un element.
   * @param {HTMLElement} element element al que se agrega el contenido del
   *  template.
   * @param {HTMLTemplateElement} template el template cuyo contenido se clona
   *  y se agrega. */
  static agregaTemplate(element, template) {
    element.appendChild(document.importNode(template.content, true));
  }
}