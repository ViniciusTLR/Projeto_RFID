import { response } from "express"

class CreateItemsController{
    async handle(req,res){
        return res.json({ok:true})
    }
}

export {CreateItemsController}