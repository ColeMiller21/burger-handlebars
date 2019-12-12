var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },
    create: function (col, value, cb) {
        orm.create("burgers", col, value, function (res) {
            cb(res);
        });
    },
    update: function (objVal, condition, cb) {
        orm.update("burgers", objVal, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            cb(res);
        });
    }
};

module.exports = burger;