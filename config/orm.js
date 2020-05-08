const connection = require("../config/connection");

let orm = {

    all: function(tableInput, callback) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        callback(result);
      });
    },

    create: function(table, column, value, callback) {
      var queryString = `INSERT INTO ${table} (${column.toString()}) VALUES (${value});`
  
      console.log(queryString);
  
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        callback(result);
      });
    },
   
    update: function(table, column, colVal, row, rowVal, callback) {
      var queryString = `UPDATE ${table} SET ${column} = ${colVal} WHERE ${row} = ${rowVal}`;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        callback(result);
      });
    },

    delete: function(table, column, value, callback) {
      let queryString = `DELETE from ${table} WHERE ${column} = ${value}`;

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