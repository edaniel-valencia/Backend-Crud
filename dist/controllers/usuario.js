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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUser = exports.Create = exports.Read = void 0;
const user_1 = require("../models/user");
const Read = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listUser = yield user_1.User.findAll();
    res.json(listUser);
});
exports.Read = Read;
const Create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Uname, Ulastname, Uemail, Uwhatssap } = req.body;
    console.log(req.body);
    try {
        user_1.User.create({
            Uname: Uname,
            Ulastname: Ulastname,
            Uemail: Uemail,
            Uwhatssap: Uwhatssap,
            Ustatus: 1
        });
        res.status(200).json('Creacion exitosa');
    }
    catch (error) {
        console.log('Error al enviar los datos ', error);
    }
});
exports.Create = Create;
const UpdateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Uid } = req.params;
    const { Uname, Ulastname, Uemail, Uwhatssap, Ustatus } = req.body;
    const usuario = yield user_1.User.findOne({ where: { Uid: Uid } });
    try {
        user_1.User.update({
            Uname: Uname,
            Ulastname: Ulastname,
            Uemail: Uemail,
            Uwhatssap: Uwhatssap,
            Ustatus: 1
        }, {
            where: { Uid: Uid }
        });
        res.status(200).json({
            msg: `Actualizacion exitosa de registro con el Id ${Uid}`
        });
    }
    catch (error) {
        console.log('Error al enviar los datos ', error);
    }
});
exports.UpdateUser = UpdateUser;
