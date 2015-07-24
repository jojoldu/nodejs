/**
 * Created by dwlee on 2015-07-24.
 */

var mongoose = require('mongoose');

module.exports = mongoose.model('Member', {
    name : {
        type : String,
        default : ''
    }
});
