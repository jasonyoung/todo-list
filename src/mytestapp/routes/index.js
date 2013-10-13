/*
 * GET home page.
 */

exports.index = function(req, res) {
	res.render('index', {
		title: 'Express',
		todos: [{
			description: 'Buy eggs',
			due: new Date(new Date().getTime() + 24 * 60 * 60 * 1000), // 1 day from now
			done: false
		}, {
			description: 'Write blog post',
			due: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
			done: false
		}, {
			description: 'Build to-do list app',
			due: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000), // 1 week from now
			done: true
		}]
	});
};