// import mongoose from "mongoose";
// import { number } from "zod/v4";

// const transactionModel = new mongoose.Schema({
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//     },
//     price: {
//         type: number,
//         required: true
//     },
//     status: {
//         type: String,
//         enum: ['pending', 'success', 'failed'],
//         default: 'pending',
//     }
// }, {
//     timestamps: true
// })

// export default mongoose.model('Transaction', transactionModel)