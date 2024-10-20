import express, { Application, json, urlencoded } from "express"
import { User } from "../models/user"
import routerUser from "../routes/user"
import cors from "cors"
import path from "path"


class Serve{
    private app: Application
    private port: string


    constructor(){
        this.app = express()
        this.port = process.env.PORT || '3001'
        this.listen()
        this.midlewares()
        this.router()
        this.ConexionDB()
    }


    listen(){
        this.app.listen(this.port, () =>{
            console.log("Estoy ejecutandome en el puerto: " + this.port);
            
        })
    }

    router(){
        this.app.use(routerUser)
    }

    async ConexionDB(){
        try {
            await User.sync()
            console.log("Tablas creadas exitosamente");
        } catch (error) {
            console.log("Error de conexion" + error);
            
        }
    }

    midlewares(){
        this.app.use(express.json())
        this.app.use(urlencoded({extended: true}))
        this.app.use(json())
        this.app.use(cors())


    }
}

export default Serve