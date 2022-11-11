var todo = require('../models/todo');

module.exports = {
//
    configure: function (app) {
        app.post('/insertCarte', function (req, res) {
            todo.insertInfo(req.body.nom, req.body.code, req.body.prix, req, res);
        });

        app.get('/selectDate/:saisiDate', function (req, res) {
            todo.selectInfoDate(req.params.saisiDate, res)
        });
        app.get('/selectNom/:saisiNom', function (req, res) {
            todo.selectInfoNom(req.params.saisiNom, res)
        });
        app.get('/selectPrix/:saisiPrix', function (req, res) {
            todo.selectInfoPrix(req.params.saisiPrix, res)
        });
        app.get('/selectCode/:saisiCode', function (req, res) {
            todo.selectInfoCode(req.params.saisiCode, res)
        });
        app.get('/selectAll', function (req, res) {
            todo.selectInfoAll(res)
        });
    }
};
