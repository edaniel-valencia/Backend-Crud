import { Request, Response } from "express";
import { User } from "../models/user";



export const Read = async (req: Request, res: Response) => {

    const listUser = await User.findAll();
    res.json(listUser)

}

export const Create = async (req: Request, res: Response) => {

    const { Uname, Ulastname, Uemail, Uwhatssap } = req.body

    console.log(req.body);

    try {
        User.create({
            Uname: Uname,
            Ulastname: Ulastname,
            Uemail: Uemail,
            Uwhatssap: Uwhatssap,
            Ustatus: 1
        })

        res.status(200).json('Creacion exitosa')

    } catch (error) {
        console.log('Error al enviar los datos ', error)

    }

}

export const Delete = async (req: Request, res: Response) => {

    const { Uid } = req.params

    const user = await User.findOne({where: {Uid: Uid}})

    if(!user){
        res.status(404).json('No se encontro registros')

    }

    try {
        User.destroy({ where: {Uid: Uid} })

        res.status(200).json('Eliminación exitosa')




    } catch (error) {
        console.log('Error al enviar los datos ', error)

    }

}

export const Update = async (req: Request, res: Response) => {

    const { Uid } = req.params
    const { Uname, Ulastname, Uemail, Uwhatssap, Ustatus } = req.body

    const user = await User.findOne({where: {Uid: Uid}})

    if(!user){
        res.status(404).json('No se encontro registros')

    }

    try {
        User.update({
            Uname: Uname,
            Ulastname: Ulastname,
            Uemail: Uemail,
            Uwhatssap: Uwhatssap
        },{
            where: {Uid: Uid}
        })

        res.status(200).json('Actualizacion exitosa')




    } catch (error) {
        console.log('Error al enviar los datos ', error)

    }

}


