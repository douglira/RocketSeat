const formidable = require('formidable');
const path = require('path');
const fs = require('fs');

module.exports = (req, res, next) => {
  try {
    const form = new formidable.IncomingForm();
    return form.parse(req, async (err, fields, files) => {
      if (err) return next(err);

      const filePath = `${req.userId}-${files.avatar.name}`;
      const oldPath = files.avatar.path;
      const newPath = `${path.resolve('uploads')}/${filePath}`;
      fs.rename(oldPath, newPath, (errRename) => {
        if (errRename) return next(errRename);

        return console.log('Uploaded');
      });

      const user = {
        ...fields,
        avatar_url: `http://localhost:${process.env.SERVER_PORT}/${filePath}`,
      };

      req.user = user;
      return next();
    });
  } catch (err) {
    return next(err);
  }
};
