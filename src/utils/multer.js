import multer from "multer";
import path from "path";

// Konfigurasi penyimpanan file
export const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads/course"); // Perlu 'null' sebagai argumen pertama
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname); // Ambil ekstensi file
        const uniqId = `${Date.now()}-${Math.round(Math.random() * 1E9)}`;
        const filename = `${file.fieldname}-${uniqId}${ext}`;
        cb(null, filename);
    }
});

// Filter file agar hanya menerima gambar tertentu
export const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
