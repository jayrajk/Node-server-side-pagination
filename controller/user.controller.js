const db = require('../models');
const user = db.User;
const _ = require('lodash');

module.exports = {
    getAll(req, res, next) {
        var size = req.params.perPage;
        var pageNo = req.params.page;
        var skip = size * (pageNo - 1);
        var totalCount = null;
        debugger
        return user.count({
            attribute:{
                include:['id'],
                exclude:['createdAt','updatedAt']
            },
        })
            .then(total => {
                totalCount = total;
                var totalPages = Math.ceil(totalCount / size);
                return user.findAll({
                    attributes:{
                        exclude: ['createdAt', 'updatedAt']
                    },
                    limit:parseInt(size),
                    offset:parseInt(skip)
                })
                    .then(users => res.send({data:users,pages:totalPages}))
                    .catch(e => next(e));
            });
    },
};