angular.module('app').factory('DataBaseValues', function($cordovaSQLite){
    var baseDados = null;
    var createBase = function(){
        if(window.cordova){
            baseDados = $cordovaSQLite.openDB({"name":"cf.db"});
        return baseDados
        }else{
            baseDados  = window.openDatabase('cf.db', '1', 'my', 1024 * 1024 * 100);
            return baseDados;
        }
    }
    var insert = function(db, query, values){
        $cordovaSQLite.execute(db,query,values).then(function(res){
            return res;
        },function(err){
            return 0;
        })
    }
    return {
        setup: createBase,
        insert: insert
    }
});