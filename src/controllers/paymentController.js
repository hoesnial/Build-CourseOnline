// import transactionModel from "../models/transactionModel.js";

// export const handlePayment = async (req, res) => {
//     try {
//         const body = req.body;
//         const orderId = body.order_id;

//         switch (body.transaction_status) {
//             case "capture":
//                 await transactionModel.findByIdAndUpdate(orderId, {
//                     status: "success"
//                 });
//                 break;

//             case "deny":
//             case "cancel":
//             case "expired":
//             case "failure":
//                 await transactionModel.findByIdAndUpdate(orderId, {
//                     status: "failed"
//                 });
//                 break;

//             default:
//                 break;
//         }

//         return res.json({
//             message: "Handle Payment Success",
//             data: {}
//         });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({
//             message: "Internal Server Error"
//         });
//     }
// };
