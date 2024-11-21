import GalleryItem from "../models/galleryItem.js";

//post
export function postGalleryItems(req,res){
    const user = req.user
    if(user == null){
        res.status(403).json({
            message : "Please login to create a gallery item"
        })
        return
    }

    if(user.type != "admin"){
        res.status(403).json({
            message : "You are not authorized to create a gallery item"
        })
        return
    }
    
    const galleryItem = req.body
    const newGalleryItem = new GalleryItem(galleryItem)

    newGalleryItem.save().then(
        (result)=>{
            res.json({
                message : "Gallery item created successfully",
                result : result
            })
        }
    ).catch(
        (err)=>{
            res.json({
                message : "Gallery item creation failed",
                error : err
            })
        }
    )
}

//get
export function getGalleryItems(req,res){
    
    GalleryItem.find().then(
        (result)=>{
            res.json({
                galleryItems : result
            })
        }
    ).catch(
        ()=>{
            res.json({
                message : "Failed to get gallery items"
            })
        }
    )

}

    