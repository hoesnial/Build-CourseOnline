// import bcrypt from "bcrypt"
// import userModel from "../models/userModel.js"
// import transactionModel from "../models/transactionModel.js"

// export const signUpAction = async(req, res) => {
//     const midtransUrl = process.env.MIDTRANS_URL
//     const midtransAuthString = process.env.MIDTRANS_AUTH

//     try {
//         const body = req.body

//         const hashPassword = bcrypt.hashSync(body.password, 12)

//         const user = new userModel({
//             name: body.name,
//             email: body.email,
//             photo: 'default.png',
//             password: hashPassword,
//             role: 'manager'
//         })

//         // action payment gateway midtrans

//         const Transaction = new transactionModel({
//             user: user._id,
//             price: 200000
//         })

//         const midtrans = await fetch(midtransUrl, {
//             method: 'POST',
//             body: JSON.stringify({
//                 transaction_details: {
//                     order_id: Transaction._id.toString(),
//                     gross_amount: Transaction.price
//                 },
//                 credit_card: {
//                     secure: true
//                 },
//                 customer_details: {
//                     email: user.email,
//                 },
//                 callbacks: {
//                     finish: 'https://localhost:5173/success-checkout'
//                 }
//             }),

//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Basic ${midtransAuthString}`
//             }
//         })

//         const midtransResponse = await midtrans.json()

//         await user.save()
//         await Transaction.save()


//         return res.json({
//             message: 'Sign Up Success',
//             data: {
//                 midtrans_payment_url: midtransResponse.redirect_url
//             }
//         })
//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({
//             message: 'Internal Server Error'
//         })
//     }
// }
