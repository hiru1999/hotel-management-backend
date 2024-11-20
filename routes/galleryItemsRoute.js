import express from 'express'
import { getGalleryItems, postGalleryItems } from '../controllers/galleryItemControllers.js';

const galleryItemRouter = express.Router()

galleryItemRouter.post("/",postGalleryItems)

galleryItemRouter.get("/",getGalleryItems)

export default galleryItemRouter;