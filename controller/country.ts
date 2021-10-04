import { Request, Response } from "express";
import crmcelina_country from '../models/country';

export const getUsuarios = async(req : Request, res: Response) => {

    const celina_country = await crmcelina_country.findAll();

    res.json({ celina_country });

}


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