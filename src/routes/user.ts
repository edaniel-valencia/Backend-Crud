import { Router } from "express";
import { Create, Read, Update, Delete } from "../controllers/user";



const router = Router()


router.get('/api/user/read', Read)
router.post('/api/user/create', Create)
router.patch("/api/user/update/:Uid", Update  )
router.delete("/api/user/delete/:Uid", Delete  )

export default router