"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const country_1 = require("../controller/country");
const routerCelina = (0, express_1.Router)();
routerCelina.get('/', country_1.getUsuarios);
/*
router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.post('/', postUsuario);
router.put('/:id', putUsuario);
router.delete('/:id', deleteUsuario);
*/
exports.default = routerCelina;
//# sourceMappingURL=country.js.map