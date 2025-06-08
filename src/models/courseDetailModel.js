import mongoose from "mongoose";
import courseModel from "./courseModel";

const courseDetailModel = new mongoose.Schema({
    title: {type: String, required: true},
    type: {
        type: String,
        enum: ['video', 'text'],
        default: 'video'
    },
    vidioId: String,
    text: String,
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }, 
    details: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Detail'
        }
    ]
}, {timestaps: true})

export default mongoose.model('Course', courseModel)