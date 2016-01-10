'use strict'

import { Users } from './api';

export default function(server) {

    server.get('api/users', function (req, res) {
        res.json(Users.getAll());
    });

    server.get('api/users/:id', function (req, res) {
        res.json(Users.get(req.params.id));
    });

}
