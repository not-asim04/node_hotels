const express = require("express");
const router = express.Router();

const person = require("../models/persons");

//person route post
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new person(data);

    const response = await newPerson.save();
    console.log("Person saved:", response);
    res.status(201).json(response);
  } catch (error) {
    console.log("Error saving person:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//person route get
router.get("/", async (req, res) => {
  try {
    const persons = await person.find();
    res.status(200).json(persons);
  } catch (error) {
    console.log("Error fetching persons:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//person route get by work role (parameter)

router.get("/:work", async (req, res) => {
  try {
    const workRole = req.params.work;
    if (workRole == "waiter" || workRole == "chef" || workRole == "manager") {
      const persons = await person.find({ work: workRole });
      res.status(200).json(persons);
    } else {
      res
        .status(404)
        .json({ message: `Fetching persons with work role: ${workRole}` });
    }
  } catch (error) {
    console.log("Error fetching persons by work role:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//update route person
router.put("/:id", async (req, res) => {
  try {
    const personid = req.params.id; //Extract the id from the URL
    const updatedPersonData = req.body;
    const response = await person.findByIdAndUpdate(
      personid,
      updatedPersonData,
      {
        new: true, //Return the updated document
        runValidators: true, //Rung Mongoose validation
      }
    );
    if (!response) {
      res.status(404).json({ error: "Person not found" });
    }

    console.log("Data Updated");
    res.status(200).json(response);
  } catch (error) {
    console.log("Error fetching persons by work role:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const personid = req.params.id; //Extract the id from the URL
    const response = await person.findByIdAndDelete(personid);
    if (!response) {
      return res.status(404).json({ error: "person not found" });
    }
    console.log("data deleted");
    res.status(200).json({ message: "Data Deleted Successfully!!" });
  } catch (error) {
    console.log("Error fetching persons by work role:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
module.exports = router;
