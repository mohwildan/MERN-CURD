import userModel from "../model/db.js";

//unutuk ambil data
export const getUser = async (req, res) => {
        const users = await userModel.find()
        res.json(users)
}
//unutk liat data
export const getUserById = async (req, res) => {
        const user = await userModel.findById(req.params.id)
        res.json(user)
}    
//untuk post data
export const saveUser = async (req, res) => {
        const user = new userModel(req.body)
        const insert = await user.save()
        res.json(insert)
}    
//unutuk update data
export const updateUser = async (req, res) => {
        const updateuser = await userModel.updateOne({_id:req.params.id}, {$set: req.body})
        res.json(updateuser)
}   
//untuk deleat
export const deleteUser = async (req, res) => {
        const deleteuser = await userModel.deleteOne({_id:req.params.id})
        res.json(deleteuser)
}   