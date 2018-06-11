/* Copyright 2017 Ricardo Armando Machorro Reyes
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 * this file except in compliance with the License. You may obtain a copy of the
 * License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed
 * under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License. */"use strict";
var evtBuscaInstancias = new Evento(),
    evtIniciaListado = new Evento(),
    evtElementoDeListado = new Evento(),
    evtListadoTerminado = new Evento(),
    evtBuscaModelo = new Evento(),
    evtModeloEncontrado = new Evento(),
    evtAgregaModelo = new Evento(),
    evtModificaModelo = new Evento(),
    evtEliminaModelo = new Evento(),
    evtOperacionRealizada = new Evento(),
    evtAlmacenamientoListo = new Evento();