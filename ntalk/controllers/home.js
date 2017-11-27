module.exports = function (app) {
  return HomeController = {
    index: function (req, res) {
      res.render('home/index');
    },
    login: function (req, res) {
      let email = req.body.usuario.email;
      let nome = req.body.usuario.nome;
      if (email && nome) {
        let usuario = req.body.usuario;
        usuario['contatos'] = [];
        req.session.usuario = usuario;
        res.redirect('/contatos');
      } else {
        res.redirect('/');
      }
    },
    logout: function (req, res) {
      req.session.destroy();
      res.redirect('/');
    }
  };
};