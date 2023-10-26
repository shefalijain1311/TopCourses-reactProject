// import React from 'react';
// import Card from './Card';

// const Cards = (props) => {

//     let courses = props.courses;
    
//     function getCourses () {
//         let allCourses = [];
//         Object.values(courses).forEach( array => {
//             array.forEach(courseData => {
//                 allCourses.push(courseData);
//             })
//         }

//         )
//         return allCourses;
//     }

//     return (
//     <div className="flex flex-wrap justify-center gap-4 mb-4">
//         {
//             getCourses().map( (course) => (
//                 <Card key = {course.id} course = {course} />
//             ))
//         }
//     </div>
//     );
// }

// export default Cards;
import Card from "./Card";
import React, { useState } from 'react'

const Cards = (props) => {
    console.log(props.category);
    console.log(props.courses);

    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);
      let allCourse = [];

    // It Returns list of all courses received from the api Response

    const getCourses = () => {
        Object.values(props.courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourse.push(course);
            });
        });
        return allCourse;
    };

    

    //   console.log(allCourse);
    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCourses().map((course) => {
                    return <Card course={course} key={props.courses.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />;
                })
            }
        </div>
    );
};

export default Cards;
