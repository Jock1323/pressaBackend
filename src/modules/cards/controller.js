import { customError } from "../../exceptions/customErrorClass.js"
import { deleted, get, post, put } from "./model.js"
import path from "path"
const getImage = (req,res,next) => {
  try {
    const {filename}=req.file
    res.sendFile(path.join('uploads',filename))
  } catch (error) {
    next(new customError(400,error.message))
  }
}
const getCards = async (req, res, next) => {
  try {
    let cards = await get()
    console.log(cards);
    if (cards) {
      res.status(200).json({
        totalCount: cards.length,
        message: "all posts",
        data: cards
      })
    }
    else {
      res.status(404).json({
        totalCount: cards.length,
        message: "cards not found",
        data: []
      })
    }
  } catch (error) {
    next(new customError(500, error.message))
  }
}
const postCards = async (req, res, next) => {
  try {
    const cards = await post(req.body, req.file)
    console.log(cards);
        res.status(201).json({
          message: "post added",
          data: cards
        })
  } catch (error) {
    next(new customError(400, error.message))
  }
}
const updateCards = async (req, res, next) => {
  try {
    const cards = await put(req.params)
        res.status(201).json({
          message: "post activated",
          data: cards
        })
  } catch (error) {
    next(new customError(400, error.message))
  }
}
const deleteCards = async (req, res, next) => {
  try {
    const cards = await deleted(req.params)
    console.log(cards);
        res.status(201).json({
          message: "post ignored",
          data: cards
        })
  } catch (error) {
    next(new customError(400, error.message))
  }
}
export {
  getCards,
  postCards,
  deleteCards,
  updateCards
}
