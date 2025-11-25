import multer from 'multer';
import { storage } from '../utils/cloudinary.js'; 

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB
  },
  fileFilter(_, file, cb) {
    const allowedMimes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (allowedMimes.includes(file.mimetype)) {
      return cb(null, true);
    }
    cb(new Error('Invalid file type. Only jpg, jpeg, and png are allowed.'));
  },
});

export { upload };
