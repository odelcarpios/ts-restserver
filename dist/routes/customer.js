"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customer_1 = require("../controller/customer");
const routerCustomer = (0, express_1.Router)();
routerCustomer.get('/', customer_1.getUsuarios);
/*
router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.post('/', postUsuario);
router.put('/:id', putUsuario);
router.delete('/:id', deleteUsuario);
*/
exports.default = routerCustomer;
//# sourceMappingURL=customer.js.map