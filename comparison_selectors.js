create a databse or use any already created database

db.createCollection("companyDB")

show collections

use companyDB



db.companyDB.insertMany([
  { name: "Alice", age: 30, department: "HR", salary: 50000, joinDate: new Date("2015-01-15") },
  { name: "Bob", age: 24, department: "Engineering", salary: 70000, joinDate: new Date("2019-03-10") },
  { name: "Charlie", age: 29, department: "Engineering", salary: 75000, joinDate: new Date("2017-06-23") },
  { name: "David", age: 35, department: "Marketing", salary: 60000, joinDate: new Date("2014-11-01") },
  { name: "Eve", age: 28, department: "Finance", salary: 80000, joinDate: new Date("2018-08-19") }
])

//$eq (Equal)
db.Employees.find({ department: { $eq: "Engineering" } }).pretty()
//$ne (Not Equal)
db.Employees.find({ department: { $ne: "HR" } }).pretty()
//$gt (Greater Than)
db.Employees.find({ age: { $gt: 30 } }).pretty()
$lt (Less Than)
db.Employees.find({ salary: { $lt: 70000 } }).pretty()
//$gte (Greater Than or Equal)
db.Employees.find({ joinDate: { $gte: new Date("2018-01-01") } }).pretty()
//$lte (Less Than or Equal)
db.Employees.find({ age: { $lte: 28 } }).pretty()
