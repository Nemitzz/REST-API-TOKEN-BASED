import Item from '../models/Item';
import Photo from '../models/Photo';

class ItemController {
  async index(req, res) {
    const items = await Item.findAll({
      attributes: [
        'id',
        'name',
        'lastname',
        'email',
        'age',
        'weight',
        'height',
      ],
      order: [
        ['id', 'DESC'],
        [Photo, 'id', 'DESC'],
      ],
      include: {
        model: Photo,
        attributes: ['url', 'id', 'originalname', 'filename'],
      },
    });
    res.json(items);
  }

  async store(req, res) {
    try {
      const item = await Item.create(req.body);

      return res.json(item);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    //req.params = /:id
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['bad ID'],
        });
      }

      const item = await Item.findByPk(id, {
        attributes: [
          'id',
          'name',
          'lastname',
          'email',
          'age',
          'weight',
          'height',
        ],
        order: [
          ['id', 'DESC'],
          [Photo, 'id', 'DESC'],
        ],
        include: {
          model: Photo,
          attributes: ['url', 'id', 'originalname', 'filename'],
        },
      });
      if (!item) {
        return res.status(400).json({
          errors: ['bad NAME'],
        });
      }
      //if all verifications are falsy, the code runs correctly
      return res.json(item);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    //req.params = /:id
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['bad ID'],
        });
      }

      const item = await Item.findByPk(id);
      if (!item) {
        return res.status(400).json({
          errors: ['bad NAME'],
        });
      }

      const itemUpdated = await item.update(req.body);

      //if all verifications are falsy, the code runs correctly

      return res.json(itemUpdated);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    //req.params = /:id
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['bad ID'],
        });
      }

      const item = await Item.findByPk(id);
      if (!item) {
        return res.status(400).json({
          errors: ['bad NAME'],
        });
      }
      //delete item by id
      await item.destroy();

      return res.json({
        deleted: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

//export a new instance of ItemController() to be used in other files if needed
export default new ItemController();
