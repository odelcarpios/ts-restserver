import { Router } from "express";
import { getUsuarios } from "../controller/customer";

const routerCustomer = Router();

routerCustomer.get('/', getUsuarios);

/*
router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.post('/', postUsuario);
router.put('/:id', putUsuario);
router.delete('/:id', deleteUsuario);
*/

export default routerCustomer;