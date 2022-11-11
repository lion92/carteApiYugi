var connection = require("../config/connection");
var express = require("express");

var app = express();
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));


function Todo() {

    this.insertInfo = function (nom, code, prix, req, res) {
        connection.acquire(function (err, con) {
            con.query(
                "insert into carte (nom,code,prix,dateInsertion ) values (?,?,?,?)", [nom, code, prix, new Date().toDateString()],
                function (err, result) {
                    con.release();
                    res.header("Access-Control-Allow-Origin", "*");
                    res.header(
                        "Access-Control-Allow-Methods",
                        "GET,HEAD,OPTIONS,POST,PUT"
                    );
                    res.header(
                        "Access-Control-Allow-Headers",
                        "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
                    );
                    if (err) {
                        res.send({status: 500, message: "TODO creation fail " + err});
                    } else {
                        res.send({status: 200, message: "TODO create success " + result});
                        //console.log("Post successful");
                    }
                }
            );
        });
    };


    this.selectInfoNom = function (saisi, res) {

        connection.acquire(function (err, con) {

            con.query(
                "select * from carte where nom=?",
                saisi,
                function (err, result) {
                    con.release();
                    res.header("Access-Control-Allow-Origin", "*");
                    res.header(
                        "Access-Control-Allow-Methods",
                        "GET,HEAD,OPTIONS,POST,PUT"
                    );
                    res.header(
                        "Access-Control-Allow-Headers",
                        "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
                    );

                    if (err) {
                        res.send({
                            status: 500,
                            message: "TODO creation fail " + err,
                        });
                    } else {
                        res.send({
                            status: 200,
                            message: result,
                        });
                    }
                }
            );
        })
    }
    this.selectInfoCode = function (saisi, res) {

        connection.acquire(function (err, con) {

            con.query(
                "select * from carte where code=?",
                saisi,
                function (err, result) {
                    con.release();
                    res.header("Access-Control-Allow-Origin", "*");
                    res.header(
                        "Access-Control-Allow-Methods",
                        "GET,HEAD,OPTIONS,POST,PUT"
                    );
                    res.header(
                        "Access-Control-Allow-Headers",
                        "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
                    );

                    if (err) {
                        res.send({
                            status: 500,
                            message: "TODO creation fail " + err,
                        });
                    } else {
                        res.send({
                            status: 200,
                            message: result,
                        });
                    }
                }
            );
        })
    }
    this.selectInfoDate = function (saisi, res) {

        connection.acquire(function (err, con) {

            con.query(
                "select * from carte where dateInsertion=?",
                saisi,
                function (err, result) {
                    con.release();
                    res.header("Access-Control-Allow-Origin", "*");
                    res.header(
                        "Access-Control-Allow-Methods",
                        "GET,HEAD,OPTIONS,POST,PUT"
                    );
                    res.header(
                        "Access-Control-Allow-Headers",
                        "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
                    );

                    if (err) {
                        res.send({
                            status: 500,
                            message: "TODO creation fail " + err,
                        });
                    } else {
                        res.send({
                            status: 200,
                            message: result,
                        });
                    }
                }
            );
        })
    }
    this.selectInfoPrix = function (saisi, res) {

        connection.acquire(function (err, con) {

            con.query(
                "select * from carte where prix=?",
                saisi,
                function (err, result) {
                    con.release();
                    res.header("Access-Control-Allow-Origin", "*");
                    res.header(
                        "Access-Control-Allow-Methods",
                        "GET,HEAD,OPTIONS,POST,PUT"
                    );
                    res.header(
                        "Access-Control-Allow-Headers",
                        "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
                    );

                    if (err) {
                        res.send({
                            status: 500,
                            message: "TODO creation fail " + err,
                        });
                    } else {
                        res.send({
                            status: 200,
                            message: result,
                        });
                    }
                }
            );
        })
    }

    this.selectInfoAll = function (res) {

        connection.acquire(function (err, con) {

            con.query(
                "select * from carte",
                function (err, result) {
                    con.release();
                    res.header("Access-Control-Allow-Origin", "*");
                    res.header(
                        "Access-Control-Allow-Methods",
                        "GET,HEAD,OPTIONS,POST,PUT"
                    );
                    res.header(
                        "Access-Control-Allow-Headers",
                        "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization"
                    );

                    if (err) {
                        res.send({
                            status: 500,
                            message: "TODO creation fail " + err,
                        });
                    } else {
                        res.send({
                            status: 200,
                            message: result,
                        });
                    }
                }
            );
        })
    }


}

module.exports = new Todo();
