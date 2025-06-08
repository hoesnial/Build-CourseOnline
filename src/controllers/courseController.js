import { error } from "console"
import { mutateCourseSchema } from "../utils/schema"
import fs from 'fs'

export const getCourse = async(req, res) => {
    try {
        const course = await courseModel.find({
            manager: req.user._id
        })

        .select('name thumbnail')
        .populate({
            path: 'category',
            select: 'name -_id'
        })
        .populate({
            path: 'students',
            select: 'name'
        })

        return res.json({
            message: "Get Course Success", 
            data: course})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: 'Internal Server Error'
        })
        
    }
    
}

export const postCourse = async(req, res) => {
    try {
        const body = req.body

        const parse = mutateCourseSchema.safeParse(body)

        if (!parse.success) {
            const errorMessages = parse.error.issues.map((err => err.message));

            if (req?.file?.path && fs.existsSync(req?.file?.path)) {
                fs.unlinkSync(req.file.path)
            }

            return res.status(500).json({
                message: 'Error Validation',
                data: null,
                errors: errorMessages
            })
        }

        const categoty = await categoryModel.findById(parse.data.categoryId)

        if (!cateory) {
            return resolveSoa.status(500).json({
                message: 'Category Not Found'
            })
        }

        const course = new courseModel({
            name: parse.data.name,
            category: category._Id,
            describe: parse.data.describe,
            tagline: parse.data.tagline,
            thumbnail: req.file?.filename,
            manager: req.user._id
        })


        await course.save()

        await categoryModel.findByIdAndUpdate(category._id, {
            $push: {
                course: course._id
            },
            
            
        }, {new: true})
    } catch (error) {
        
    }
}