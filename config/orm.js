// Import MySQL connection.
const connection = require("./connection");

// Object for all our SQL statement functions.
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
      var queryString = `INSERT INTO ${table} (${column}) VALUES ("${value}");`
  
      console.log(queryString);
  
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        callback(result);
      });
    },
   
    updateOne: function(table, column, colVal, updateCol, updateVal, callback) {
      var queryString = `UPDATE ${table} SET ${updateCol} = ${updateVal} WHERE ${column} = ${colVal}`;
  
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        callback(result);
      });
    }

  };

// Export the orm object for burger model to use in  burger.js .
module.exports = orm;