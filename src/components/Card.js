// import React from 'react';
// import { click } from '@testing-library/user-event/dist/click';

// // import {FcLike} from "react-icons/fc";


// const Card = (props) => {

//     let course = props.course;

//     return (
//     <div className='bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden'>
//         <div  className='relative '>
//             <img src={course.image.url}  alt="Course Image" className='' />
//         </div> 

//         <div>
//         {/* <button onClick={clickHandler}>
//                         {
//                             !likedCourses.includes(props.course.id) ? <FcLikePlaceholder fontSize="1.75rem" /> : <FcLike fontSize="1.75rem" />
//                         }
//                         </button>
//         </div> */}
//         </div>

        

//         <div  className='p-4'>
//             <p  className='text-white text-lg font-semibold leading-6'>{props.course.title}>{course.title}</p>
//             <p className='mt-2 text-white'> {course.description} </p>
//         </div>
//     </div>
//     );
// }

// export default Card;
import { click } from '@testing-library/user-event/dist/click';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = (props) => {
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        // Logic
        if (likedCourses.includes(props.course.id)) {
            // pahle se liked 
            setLikedCourses((prev) => prev.filter((cid) => cid !== props.course.id));
            toast.warning("Liked Removed");
        }
        else {
            // pahle se like nahi hai course 
            // insert karne h y course like course me 
            if (likedCourses.length === 0) {
                setLikedCourses([props.course.id]);
            }
            else {
                setLikedCourses((prev) => [...prev, props.course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className=" w-[300px] bg-slate-500 bg-opacity-80 rounded-md overflow-hidden " >
            
            <div className='relative '>
                <img src={props.course.image.url} alt="Course Image" className='' />

                <div className='rounded-full w-[40px] h-[40px] bg-bgDark absolute right-2 bottom-[-6px] grid place-items-center'>
                    <button onClick={clickHandler}>
                        {
                            !likedCourses.includes(props.course.id) ? <FcLikePlaceholder fontSize="1.75rem" /> : <FcLike fontSize="1.75rem" />
                        }
                    </button>
                </div>
            </div>



            <div className='p-4'>
                <p className='text-white text-lg font-semibold leading-6 bg-bgDark' >{props.course.title}</p>
                <p className='mt-2 text-white'>
                    {
                        props.course.description.length > 100 ? (props.course.description.substring(0, 100) + "...") : (props.course.description)
                    }

                </p>
            </div>

        </div>
    )
}

export default Card


