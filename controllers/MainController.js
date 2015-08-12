
module.exports = {
	index: function(req, res) {
		User.create({name: "pedro"})
		res.render('index', {title: "Express", users: User.find()});
	},

	create: function(req, res){
		console.log(req.params)
		var name = req.param('name');
		User.create({name: name});
		res.json(User.find());
	}
}