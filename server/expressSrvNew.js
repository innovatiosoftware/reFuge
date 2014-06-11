var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '/../app')));
console.log(__dirname);


var server = app.listen(8002, function() {
    console.log('Listening on port %d', server.address().port);
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.send(500, 'Something broke!');
});


app.get('/doTest/:id', function (req, res) {
    console.info("ID " + req.params.id);
    var header = {'Access-Control-Allow-Origin': '*'};
    res.set(header).status(200).send("Hola francisco esto es solo una test");
});

app.get('/getAllRefuges/', function (req, response) {
    var header = {'Access-Control-Allow-Origin': '*'};

    var qry = 'SELECT * FROM REGUFEE';
    var box = new DB(dbConfig);
    box.connect(function (conn, cb) {

        cps.seq([
            function (_, cb) {
                conn.query(qry, cb)
            },
            function (res, cb) {
                response.set(header).status(200).send(res);
                cb();
            }
        ], cb);
    }, function () {
        var handleError = function (e) {
            if (e.stack) {
                console.log(e.stack);
            } else {
                console.log(e);
            }
        };

        var start = new Date();
        return function (err, res) {
            try {
                var end = new Date();
                console.log('time spent: ', end - start);
                if (err) {
                    handleError(err);
                } else {
//                    console.log(res);
                }
                box.end();
            } catch (e) {
                handleError(e);
                box.end();
            }
        };
    }());
});

app.get('/getRefugeById/:id', function (req, response) {
    var header = {'Access-Control-Allow-Origin': '*'};

    var qry = 'SELECT * FROM REGUFEE WHERE ID = ' + req.params.id;
    var box = new DB(dbConfig);
    box.connect(function (conn, cb) {

        cps.seq([
            function (_, cb) {
                conn.query(qry, cb)
            },
            function (res, cb) {
//                console.log("DATA =" + res);

                response.set(header).status(200).send(res);
                cb();
            }
        ], cb);
    }, function () {
        var handleError = function (e) {
            if (e.stack) {
                console.log(e.stack);
            } else {
                console.log(e);
            }
        };

        var start = new Date();
        return function (err, res) {
            try {
                var end = new Date();
                console.log('time spent: ', end - start);
                if (err) {
                    handleError(err);
                } else {
//                    console.log(res);
                }
                box.end();
            } catch (e) {
                handleError(e);
                box.end();
            }
        };
    }());
});

app.get('/getCommentCategories/', function (req, response) {
    var header = {'Access-Control-Allow-Origin': '*'};

    var qry = 'SELECT COMMENT_CATEGORY FROM COMMENT_TOKENIZER GROUP BY COMMENT_CATEGORY ORDER BY COMMENT_CATEGORY';
    var box = new DB(dbConfig);
    box.connect(function (conn, cb) {

        cps.seq([
            function (_, cb) {
                conn.query(qry, cb)
            },
            function (res, cb) {
//                console.log("DATA =" + res);

                response.set(header).status(200).send(res);
                cb();
            }
        ], cb);
    }, function () {
        var handleError = function (e) {
            if (e.stack) {
                console.log(e.stack);
            } else {
                console.log(e);
            }
        };

        var start = new Date();
        return function (err, res) {
            try {
                var end = new Date();
                console.log('time spent: ', end - start);
                if (err) {
                    handleError(err);
                } else {
//                    console.log(res);
                }
                box.end();
            } catch (e) {
                handleError(e);
                box.end();
            }
        };
    }());
});

app.get('/getConditionCategories/', function (req, response) {
    var header = {'Access-Control-Allow-Origin': '*'};
    var qry = 'SELECT COMMENT_CATEGORY FROM COMMENT_TOKENIZER GROUP BY COMMENT_CATEGORY ORDER BY COMMENT_CATEGORY';
    var box = new DB(dbConfig);
    box.connect(function (conn, cb) {

        cps.seq([
            function (_, cb) {
                conn.query(qry, cb)
            },
            function (res, cb) {
//                console.log("DATA =" + res);

                response.set(header).status(200).send(res);
                cb();
            }
        ], cb);
    }, function () {
        var handleError = function (e) {
            if (e.stack) {
                console.log(e.stack);
            } else {
                console.log(e);
            }
        };

        var start = new Date();
        return function (err, res) {
            try {
                var end = new Date();
                console.log('time spent: ', end - start);
                if (err) {
                    handleError(err);
                } else {
//                    console.log(res);
                }
                box.end();
            } catch (e) {
                handleError(e);
                box.end();
            }
        };
    }());
});

app.get('/getAllMunicipalities/', function (req, response) {
    var header = {'Access-Control-Allow-Origin': '*'};
    var qry = 'SELECT MUNICIPIO, COUNT(*) AS TOTAL FROM REGUFEE GROUP BY MUNICIPIO ORDER BY MUNICIPIO';
    var box = new DB(dbConfig);
    box.connect(function (conn, cb) {

        cps.seq([
            function (_, cb) {
                conn.query(qry, cb)
            },
            function (res, cb) {
//                console.log("DATA =" + res);

                response.set(header).status(200).send(res);
                cb();
            }
        ], cb);
    }, function () {
        var handleError = function (e) {
            if (e.stack) {
                console.log(e.stack);
            } else {
                console.log(e);
            }
        };

        var start = new Date();
        return function (err, res) {
            try {
                var end = new Date();
                console.log('time spent: ', end - start);
                if (err) {
                    handleError(err);
                } else {
//                    console.log(res);
                }
                box.end();
            } catch (e) {
                handleError(e);
                box.end();
            }
        };
    }());
});

app.get('/getRefugeByMunicipality/:municipality', function (req, response) {
    var header = {'Access-Control-Allow-Origin': '*'};
    var municipality = req.params.municipality;
    console.log(municipality);
    var qry = 'SELECT * FROM REGUFEE WHERE MUNICIPIO = \'' + municipality + '\'';
    var box = new DB(dbConfig);
    box.connect(function (conn, cb) {

        cps.seq([
            function (_, cb) {
                conn.query(qry, cb)
            },
            function (res, cb) {
//                console.log("DATA =" + res);
                response.set(header).status(200).send(res);
                cb();
            }
        ], cb);
    }, function () {
        var handleError = function (e) {
            if (e.stack) {
                console.log(e.stack);
            } else {
                console.log(e);
            }
        };

        var start = new Date();
        return function (err, res) {
            try {
                var end = new Date();
                console.log('time spent: ', end - start);
                if (err) {
                    handleError(err);
                } else {
//                    console.log(res);
                }
                box.end();
            } catch (e) {
                handleError(e);
                box.end();
            }
        };
    }());
});


app.get('/getNearbyRefuges/:lat/:lon', function (req, response) {
    var header = {'Access-Control-Allow-Origin': '*'};
    var lat = req.params.lat;
    var lon = req.params.lon;

    console.log(lat);
    console.log(lon);

    var qry = 'SELECT *, SQRT(POW(69.1 * (latitude - ' + lat + '), 2) + POW(69.1 * (' + lon + ' - longitude) * COS(latitude / 57.3), 2)) AS distance ' +
        'FROM REGUFEE ' +
        'HAVING distance < 3 ' +
        'ORDER BY distance ';
    var box = new DB(dbConfig);
    box.connect(function (conn, cb) {

        cps.seq([
            function (_, cb) {
                conn.query(qry, cb)
            },
            function (res, cb) {
//                console.log("DATA =" + res);
                response.set(header).status(200).send(res);
                cb();
            }
        ], cb);
    }, function () {
        var handleError = function (e) {
            if (e.stack) {
                console.log(e.stack);
            } else {
                console.log(e);
            }
        };

        var start = new Date();
        return function (err, res) {
            try {
                var end = new Date();
                console.log('time spent: ', end - start);
                if (err) {
                    handleError(err);
                } else {
//                    console.log(res);
                }
                box.end();
            } catch (e) {
                handleError(e);
                box.end();
            }
        };
    }());
});


//LOCAL SERVICES
app.get('/getAllRefugesLocal/', function (req, response) {
    var header = {'Access-Control-Allow-Origin': '*'};
    response.set(header).status(200).send(refuge);

});
app.get('/getAllMunicipalitiesLocal/', function (req, response) {
    var header = {'Access-Control-Allow-Origin': '*'};
    response.set(header).status(200).send(allMunicipalities);

});
app.get('/getConditionCategories/', function (req, response) {
    var header = {'Access-Control-Allow-Origin': '*'};
    response.set(header).status(200).send(allConditionCategories);

});
