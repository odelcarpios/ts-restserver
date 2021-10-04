import { Request, Response } from "express";
import crmcelina_customer from '../models/customer';


export const getUsuarios = async(req : Request, res: Response) => {

    const celina_customer = await crmcelina_customer.findAll();

    res.json({ celina_customer });

}