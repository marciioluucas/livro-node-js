module.exports = function (app) {
  return ContatosController = {
    index: function (req, res) {
      let usuario = req.session.usuario,
        params = {usuario: usuario};
      res.render('contatos/index', params);
    }
  }
};