data = [{ item: 'dogs' }, { item: 'milk' }, { item: 'kick some coding ans' }];

module.exports = function(app, parser) {

    app.get('/todo', function(req, res) {

        res.render('pages/todo', { todo: data })
        console.log(req.query);
    });

    app.post('/todo', parser, function(req, res) {


        data.push(req.body);
        res.render('pages/todo', { todo: data });
        // res.json(data);
    });

    app.delete('/todo/:item', function(req, res) {

    });
};