const Cat = require('../models').Cat;

module.exports = {
    index: async (req, res) => {
        // TODO
        let cats = await Cat.findAll();
        res.render('cat/index.hbs', {'cats': cats});
    },

    createGet: (req, res) => {
        // TODO
        res.render('cat/create')


    },

    createPost: (req, res) => {
        // TODO
        let args = req.body.cat;
        Cat.create(args).then(
            res.redirect('/')
        );
    },

    editGet: (req, res) => {
        // TODO
        let id = req.params.id;

        Cat.findById(id).then(cat => {
            res.render('cat/edit', {'cat': cat})
        })
    },

    editPost: (req, res) => {
        // TODO
        let id = req.params.id;
        let args = req.body.cat;

        Cat.findById(id).then(cat => cat.updateAttributes(args).then(() => {
                res.redirect('/')
            }
        ))
    },

    deleteGet: (req, res) => {
        // TODO
        let id = req.params.id;

        Cat.findById(id).then(cat => {
            res.render('cat/delete', {'cat': cat})
        })
    },

    deletePost: (req, res) => {
        // TODO
        Cat.findById(req.params.id).then(cat => {
            cat.destroy().then(() => {
                res.redirect('/');
            })
        });
    }
};
