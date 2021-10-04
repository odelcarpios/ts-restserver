"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsuarios = void 0;
const country_1 = __importDefault(require("../models/country"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const celina_country = yield country_1.default.findAll();
    res.json({ celina_country });
});
exports.getUsuarios = getUsuarios;
/*

export const getUsuarios = async(req : Request, res: Response) => {

    const usuario = await Usuario.findAll();

    res.json({ usuario });

}

export const getUsuario = async (req : Request, res: Response) => {

    const { id } = req.params;

    const usuario = await Usuario.findByPk( id );

    if ( usuario ){
        res.json(usuario);
    } else {
        res.status(404).json({
            msg: `No existe con un usuario con el id ${ id }`
        })
    }
}

export const postUsuario = async (req : Request, res: Response) => {

    const { body } = req;

    try {
        const usuario = await Usuario.create( body );
        res.json(usuario);

    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
}

export const putUsuario = (req : Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'putUsuario',
        id,
        body
    })
}

export const deleteUsuario = (req : Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'deleteUsuario',
        id
    })
}*/ 
//# sourceMappingURL=country.js.map