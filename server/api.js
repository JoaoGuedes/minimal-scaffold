'use strict';

//import _ from 'lodash';
import Loader from './loader';
import _ from 'lodash';

let models = {};

const init = (modeldir) => {
    let loader = new Loader(modeldir);
    loader.load()
        .then(json => models = json)
        .catch(error => console.log(`Error loading models. ${error}`));
};

export { init };

export class Users {

    static get(id) {
        return models.users ? _.find(models.users, user => user.id === id) : null;
    }

    static getAll() {
        return models.users ? models.users : null;
    }

}
