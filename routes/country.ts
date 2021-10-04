import { Router } from "express";
import { getUsuarios } from "../controller/country";

const routerCelina = Router();

routerCelina.get('/', getUsuarios);

/*
router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.post('/', postUsuario);
router.put('/:id', putUsuario);
router.delete('/:id', deleteUsuario);
*/

export default routerCelina;