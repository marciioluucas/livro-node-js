module.exports = function (app) {
    return HomeController = {
        index: function (req, res) {
            res.render('home/index');
        }
    };
};