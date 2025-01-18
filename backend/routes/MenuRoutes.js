import express from "express";
import { getAllMenu, createMenu, updateMenu, deleteMenu } from "../controller/MenuController.js"
const upload = multer({ dest: 'uploads/' });
const router = express.Router();
import multer from 'multer';

router.post('/' , upload.single('image') ,createMenu)

router.get('/' , getAllMenu )

router.patch('/:id' , updateMenu)

router.delete('/:id' ,deleteMenu )

export default router;