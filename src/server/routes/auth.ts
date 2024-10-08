import express from "express"
import joi from "joi"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const router = express.Router()


    router.post("/register", async (req, res) => {
        try {
            const { err } = validate(req.body);
        } catch (error) {

        }
    });

    router.get("/login", async (req, res) => {
        try {

        } catch (error) {

        }
    })


export default router