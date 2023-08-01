"use strict";

var sharp = require("sharp");

var path = require("path");

var fs = require("fs");

var recortarImageAvatar = function recortarImageAvatar(req, res, next) {
  var imagePath, directorioPadre, rutaImagenRecortada;
  return regeneratorRuntime.async(function recortarImageAvatar$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;

          if (!req.file) {
            _context.next = 9;
            break;
          }

          imagePath = req.file.path;
          directorioPadre = path.dirname(imagePath);
          rutaImagenRecortada = path.join(directorioPadre, 'recortada-' + req.file.filename);
          _context.next = 7;
          return regeneratorRuntime.awrap(sharp(imagePath).resize(180, 180).toFile(rutaImagenRecortada));

        case 7:
          //Elimina el archivo original
          fs.unlinkSync(imagePath); //Actualiza la ruta del archivo

          req.file.path = rutaImagenRecortada;

        case 9:
          next();
          _context.next = 16;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);

          if (req.file) {
            fs.unlinkSync(req.file.path);
          }

          next(_context.t0);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
};

module.exports = {
  recortarImageAvatar: recortarImageAvatar
};
//# sourceMappingURL=recortarImage.dev.js.map
