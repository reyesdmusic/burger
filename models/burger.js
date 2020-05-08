const orm = require("../config/orm");

const burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },

    insertOne: function(value, callback) {
        orm.insertOne("burgers", "burger_name", value, function(res) {
            callback(res);
        });
    },

    updateOne: function(colVal, updateCol, updateVal, callback) {
        orm.updateOne("burgers", "id", colVal, updateCol, updateVal, function(res) {
            callback(res);
        });
    }
};

module.exports = burger;