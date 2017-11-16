const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const cohorts = [
  {
    id:1,
    CohortName:"17-01-WD-DP",
    CohortCode:"g100",
    numberOfStudents:28
  },
  {
    id:2,
    CohortName:"17-01-DS-GT",
    CohortCode:"g105",
    numberOfStudents:24
  },
  {
    id:3,
    CohortName:"17-02-WD-PX",
    CohortCode:"g109",
    numberOfStudents:30
  },   
  {
    id:4,
    CohortName:"17-03-WD-BD",
    CohortCode:"g110",
    numberOfStudents:29
  }
];
//return all
app.get("/", function (request, response) {
  response.json(cohorts);
});

function findById(cohorts, id){
  for (let i = 0; i < cohorts.length; i++){
    if (cohorts[i].id == id){
      return cohorts[i];
    }
  }
  return null;
}


app.get("/:id", function (request, response) {
  var record = findById(cohorts, request.params.id);
  if (!record){
    response.status (404);
    response.json ({
      error: {
        message: "No record found!"
      }
    });
  }

  response.json({cohorts: record});
});


app.listen(process.env.PORT || 3000);

console.log("Its listening");
