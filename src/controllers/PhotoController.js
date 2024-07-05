import multer from 'multer';
import multerConfig from '../config/multer';

import Photo from '../models/Photo';
const upload = multer(multerConfig).single('photo');

class PhotoController {
  store(req, res) {
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          error: [err.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { item_id } = req.body;
        const photo = await Photo.create({ originalname, filename, item_id });

        return res.json(photo);
      } catch (e) {
        return res.status(400).json({
          errors: ['nonexistent item'],
        });
      }
    });
  }
}

export default new PhotoController();
