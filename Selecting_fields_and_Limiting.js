/*a. Develop a MongoDB query to select certain fields and ignore some
fields of the documents:
b. Develop a MongoDB query to display the first 5 documents:*/

// Step 1 (a): Create a new collection named "people" in the MongoDB database.
db.createCollection("people")

// Step 2: Display a list of all collections in the MongoDB database.
show collections

// Step 3: Insert multiple documents into the "people" collection using the insertMany() method.
// The documents contain information about individuals, including their name, age, gender, and occupation.
db.people.insertMany([
    { name: "John", age: 25, gender: "male", occupation: "Developer" },
    { name: "Jane", age: 28, gender: "female", occupation: "Designer" },
    { name: "Bob", age: 40, gender: "male", occupation: "Manager" },
    { name: "Alice", age: 32, gender: "female", occupation: "Engineer" },
    { name: "Michael", age: 35, gender: "male", occupation: "Consultant" },
    { name: "Emily", age: 30, gender: "female", occupation: "Teacher" },
    { name: "David", age: 38, gender: "male", occupation: "Lawyer" },
    { name: "Sarah", age: 29, gender: "female", occupation: "Doctor" },
    { name: "Kevin", age: 42, gender: "male", occupation: "Architect" },
    { name: "Laura", age: 26, gender: "female", occupation: "Writer" },
    { name: "Tom", age: 45, gender: "male", occupation: "CEO" },
    { name: "Rachel", age: 31, gender: "female", occupation: "Marketing" },
    { name: "Chris", age: 39, gender: "male", occupation: "Sales" },
    { name: "Helen", age: 27, gender: "female", occupation: "HR" },
    { name: "Peter", age: 44, gender: "male", occupation: "Finance" },
    { name: "Olivia", age: 33, gender: "female", occupation: "IT" },
    { name: "William", age: 41, gender: "male", occupation: "Operations" }
  ])

// Step 4: Execute a find() query on the "people" collection to retrieve documents.
// The query specifies that only the "name" and "age" fields should be included in the result set,
// and the "_id" field should be excluded.
db.people.find({}, { name: 2, age: 2, _id: 0 })

// Step 5 (b): Execute a find() query on the "people" collection to retrieve the first 5 documents.
// The limit(5) method is used to restrict the result set to the first 5 documents.
db.people.find().limit(5)