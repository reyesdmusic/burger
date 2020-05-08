const connection = require("../config/connection");

let orm = {

    selectAll: function(table, callback) {
      var queryString = "SELECT * FROM " + table + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        callback(result);
      });
    },

    insertOne: function(table, column, value, callback) {
      var queryString = `INSERT INTO ${table} (${column.toString()}) VALUES (${value});`
  
      console.log(queryString);
  
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        callback(result);
      });
    },
   
    updateOne: function(table, column, colVal, updateCol, updateVal, callback) {
      var queryString = `UPDATE ${table} SET ${column} = ${colVal} WHERE ${updateCol} = ${updateVal}`;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        callback(result);
      });
    }

  };

module.exports = orm;