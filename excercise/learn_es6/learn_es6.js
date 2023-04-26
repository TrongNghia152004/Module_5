let courses = [
    {
        id: 1,
        title: "ReactJS Tutorial",
        rating: 4.2,
    },
    {
        id: 2,
        title: "Angular Tutorial",
        rating: 2.5,
    },
    {
        id: 3,
        title: "VueJS Tutorial",
        rating: 4,
    },
    {
        id: 4,
        title: "Java Tutorial",
        rating: 4,
    },
    {
        id: 5,
        title: "JavaScript Tutorial",
        rating: 3.5,
    }
];
let addedCourses = [
    {
        id: 6,
        title: "PHP Tutorial",
        rating: 3,
    },
    {
        id: 7,
        title: "C# Tutorial",
        rating: 2,
    },
    {
        id: 8,
        title: "Docker Tutorial",
        rating: 3.8,
    }
];
// yêu cầu 1
var filterCourses = courses.filter((courses) => courses.rating >= 4);
console.log(filterCourses);
// yêu cầu 2
var filterCourses1 = courses.filter((courses) => courses.rating < 4).map((courses) => courses.id + "-" + courses.title + "-" + courses.rating);
console.log(filterCourses1)
// yêu cầu 3
var arr = [...courses, ...addedCourses];
console.log(arr);
