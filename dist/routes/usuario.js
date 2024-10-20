"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_1 = require("../controllers/usuario");
const router = (0, express_1.Router)();
router.get('/api/user/read', usuario_1.Read);
router.post('/api/user/create', usuario_1.Create);
router.patch("/api/user/update/:Uid", usuario_1.UpdateUser);
exports.default = router;
