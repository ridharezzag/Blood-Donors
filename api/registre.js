const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const fileUpload = require("express-fileupload");

// default options
app.use(fileUpload());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());
// app.use(express.json());

// var http = require('http');
// http.createServer(function (req, res) {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });
//     res.end('Hello Apache!\n');
//   for tests on a live server with apache listen on a free port plus add the ip address
// }).listen(8000, '127.0.0.1');

const host = "localhost";
const user = "root";
const password = "";
const database = "donors";

// add a member to database
app.post("/api/submit", function(req, res) {
  //for test this header just to allow mode: "no-cors" but it can be deleted when app deployed
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

  // first we check if the image uploaded
  if (Object.keys(req.files).length == 0) {
    return res.status(400).send("No Image were uploaded, please try again.");
  }

  // Get The name of the input field from the form (i.e. "profileImage") is used to retrieve the uploaded file
  var uploadedImage = req.files.profileImage;

  // extracting data from received form object
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var gender = req.body.gender;
  var bloodType = req.body.bloodType;
  var state = req.body.state;
  var email = req.body.email;
  var password = req.body.password;
  var mobileNumber = req.body.mobileNumber;
  // Get The name of the uploaded image
  var profileImageName = req.files.profileImage.name;
  // concatinate image location on the server + the name to store in database as a link to the image
  var profileImage = "images/members/" + profileImageName;

  // Use the mv() method to place the file somewhere on your server
  var imageLocation = "./images/members/";
  uploadedImage.mv(`${imageLocation}${profileImageName}`, function(err) {
    if (err) return res.status(500).send(err);

    // no need to send answer here, sending multiple res. will create error
    // res.send('File uploaded!');
  });

  // console log the data to verify
  console.log(req.body, profileImage);

  // creating a connection to sql database
  var con = mysql.createConnection({
    host: host,
    user: user,
    password: "",
    database: database
  });

  // connection to mysql database and insert the data
  con.connect(function(err) {
    if (err) throw err;
    // console.log("Connected! to database");
    var addMember =
      "INSERT INTO members (firstName, lastName, gender, bloodType, state, email, password, mobileNumber, profileImage ) VALUES ('" +
      firstName +
      "', '" +
      lastName +
      "', '" +
      gender +
      "', '" +
      bloodType +
      "', '" +
      state +
      "', '" +
      email +
      "','" +
      password +
      "', '" +
      mobileNumber +
      "', '" +
      profileImage +
      "')";
    con.query(addMember, function(err, result) {
      if (err) throw err;
      console.log("Member added");
    });
    // end the connection to database
    con.end();

    // send back the data recived to confirm receiving the data
    res.send(req.body);
  });
});

// // get data from sql database
// con.connect(function (err) {
//     if (err) throw err;
//     con.query("SELECT firstName FROM members", function (err, result, fields) {
//         if (err) throw err;
//         membersList = result;
//     });
// });

// send back the members list to home page
app.get("/api/members", (req, res) => {
  //for test this header just to allow mode: "no-cors" but it can be deleted when app deployed
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");

  // creating a connection to mysql database
  var con = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
  });

  var members = [];
  // get data from mysql database
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT id, firstName, lastName, bloodType, gender, email, mobileNumber, state, profileImage FROM members", function(
      err,
      result,
      fields
    ) {
      if (err) throw err;
      members = result;
      res.send(members);
    });
    // end the connection to database
    con.end();
  });

  console.log("sending back members list queried from database ");
});

// get all the members from the database and send it back
app.get("/api/dummy", (req, res) => {
  console.log("sending back dummy data for test");
  res.send(membersList);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));

// dummy data

var membersList = [
  {
    firstName: "rida",
    lastName: "rezzag",
    gender: "male",
    email: "rida47@gmail.com",
    password: "123456",
    mobileNumber: "7271234567",
    profileImage: "images/members/rida.jpg"
  },
  {
    firstName: "walid",
    lastName: "rezzag",
    gender: "male",
    email: "rida47@gmail.com",
    password: "123456",
    mobileNumber: "7271234567",
    profileImage: "images/members/rida.jpg"
  },
  {
    firstName: "youcef",
    lastName: "rezzag",
    gender: "male",
    email: "rida47@gmail.com",
    password: "123456",
    mobileNumber: "7277760476",
    profileImage: "images/members/rida.jpg"
  }
];
