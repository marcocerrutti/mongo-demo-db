const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/playground2')
    .then(() => console.log('connected to MongoDB...'))
    .catch(err => console.log('Could not connect to MongoDb...', err));


    //to create schema in mongodb
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'Angular Course',
        author: 'Herm',
        tags: ['angular', 'frontend'],
        isPublished: true
    });

    const result = await course.save();
    console.log(result);
}

async function getCourses() {
    const courses = await Course.find();
    console.log(courses);
}

getCourses();