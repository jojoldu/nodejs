/**
 * Created by dwlee on 2015-07-24.
 */

var Member = require('./models/member');

module.exports = function(app){

    //handle things like api calls
    app.get('/api/members', function(req, res){
       Member.find(function(err, members){

           if(err){
               console.log('get members error :' + err);
               res.send(err);
           }

           res.json(members);
       });
    });

    app.get('*', function(req, res){
        res.sendFile('./public/views/index.html');
    });
};