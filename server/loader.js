'use strict';

import fs from 'fs';
import path from 'path';
import _ from 'lodash';

/**
 * @class - Loads JSON model directory to memory
 */
export default class Loader {

    /**
     * @constructor - Promisifies fs.readdir and fs.readFile and stores root models directory.
     *
     * @param  {type} root description
     */
    constructor(root) {

        this.readdir = dir => new Promise(function(resolve, reject) {
            fs.readdir(dir, function(err, data) {
                err ? reject(err) : resolve(data);
            });
        });

        this.readFile = file => new Promise(function(resolve, reject) {
            fs.readFile(file, function(err, data) {
                err ? reject(err) : resolve(data);
            });
        });

        this.root = path.resolve(__dirname, root);
    }

    /**
     * _read - Reads JSON file and returns it's name and content
     *
     * @param  {string} file path
     * @return {Promise} resolved with file name and content
     */
    _read(filepath) {
        return this.readFile(filepath)
                .then((data) => {
                    try {
                        let json = JSON.parse(data),
                            filename = path.basename(filepath, '.json');
                        return [filename, json];
                    } catch (error) {
                        console.log(`Error parsing JSON. ${error}`);
                        return undefined;
                    }
                });
    }

    /**
     * _queue - queues directory's files read promise
     *
     * @param  {Array} file's paths from directory
     * @return {Promise} resolved with all directory's files content
     */
    _queue(files) {
        let promises = [];
        _.each(files, file => {
            let filepath = path.resolve(this.root, file);
            promises.push(this._read(filepath));
        });

        return Promise.all(promises);
    }

    /**
     * load - reads model's directory
     *
     * @return {Promise} resolved with model
     */
    load() {

        return this.readdir(this.root)
            .then(files => this._queue(files))
            .then(arrays => _.zipObject(arrays));
    }

}
