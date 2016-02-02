var AboutusController = require('../controllers/aboutus.server.controller.js');

module.exports = function(app){
	app
	.route('/aboutus')
	.get(AboutusController.get);
};