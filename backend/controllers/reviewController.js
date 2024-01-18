import Tour from "../models/Tour.js"
import Review from '../models/Review.js'

export const createReview = async(req, res)=>{

    const tourId = req.params.tourId
    const newReview = new Review({...req.body})

   try {

    const savedReview = await newReview.save()
    
   } catch (error) {
    
   } 
}