// import { z } from "zod";

// export const exampleSchema = z.object({
//     name: z.string().min(3)
// })

// export const signUpSchema = z.object({
//     name: z.string().min(5),
//     email: z.string().email(),
//     password: z.string().min(5)
// })


export const mutateCourseSchema = z.object({
    name: z.string().min(5),
    categoryId: z.string().min(),
    tagline: z.string().min(5),
    describe: z.string().min(10),
})

