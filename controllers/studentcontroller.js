// const mongoose = require('mongoose')
const Student = require('../models/student');

async function addStudent(req,res){
    try{
        console.log(req.body,'req.body')
        let student = new Student(req.body);
        await student.save();// async method
        console.log("data is saved successfully..")
        res.end("added...")

    }catch(err){
        console.log(err)
    }
}
async function getStudents(req,res){
    try{
        let students = await Student.find({});
        console.log(students,'students');
        res.send(students)
    }catch(err){

    }
}
module.exports = {
    addStudent,
    getStudents
}