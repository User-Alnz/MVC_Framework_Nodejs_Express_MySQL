import type { RequestHandler } from "express";

const AsyncRead : RequestHandler = async (req, res, next) => {

    try {

        const {id} = req.body;
        if(!id) {
            return next(new Error("Id is required!"));
            // return res.status(400).send({ message: "Id is required!" });
        }

       //Add await other function() or async middleware
       res.status(202).json({ 
            success : true, 
            message : "Request done"
        });

    } catch (err) {
        //Pass the error to errorHandler.
      next(err);
    }

};

//Sync for faster answer and if no other midleware, controllers or other function needed
const SyncRead : RequestHandler = (req, res) => {

    const {name} = req.query;

    if(!name)
        throw new Error("Name is required!"); //Only for Sync Error

    const newUser = { id:  1, name,};

    res.status(201).send({ data: newUser });
}

export default {AsyncRead, SyncRead};