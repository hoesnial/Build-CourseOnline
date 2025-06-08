import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

export const verifyToken = async (req, res, next) => {
    const secretKey = process.env.SECRET_KEY_JWT;

    try {
        const authHeader = req?.headers?.authorization;

        if (authHeader && authHeader.startsWith("JWT ")) {
            const token = authHeader.split(" ")[1];
            const decoded = jwt.verify(token, secretKey);

            const user = await userModel.findById(decoded.data.id).select("_id name email role");

            if (!user) {
                return res.status(400).json({ message: "Token expired" });
            }

            req.user = {
                _id: user._id.toString(),
                name: user.name,
                email: user.email,
                role: user.role
            };

            return next();
        } else {
            return res.status(400).json({ message: "Unauthorized" });
        }
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token", error: error.message });
    }
};
