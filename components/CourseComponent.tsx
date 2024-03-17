import {Card} from 'flowbite-react';
import {CiLock} from "react-icons/ci";
import {GiWatch} from "react-icons/gi";
import {FaClock} from "react-icons/fa";
import {BiGroup} from "react-icons/bi";
import {FaLayerGroup} from "react-icons/fa6";
import { Courses } from './CoursePage';

type CourseProps = {
    courses: Courses[];
}
export default function CourseComponent({courses}: CourseProps) {
    return (
        <>
            <main className="container mx-auto">
            <h1 className="uppercase text-3xl font-extrabold pt-5 pb-5 mb-4 text-center">Course</h1>
            <div className="flex flex-wrap justify-center gap-6">
                {courses.map((course, index) => (
                    <Card key={index} className="max-w-md p-10 gap-5 flex flex-col justify-center items-center hover:bg-blue-200 cursor-pointer transition duration-300 ease-in-out" imgSrc={course.image} horizontal>
                        <div className="flex gap-5">
                            <div className="w-fit">
                                <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                                    {course.title}
                                </h5>
                                <span className="bg-red-700 text-white text-sm rounded-lg px-2 my-2 w-fit">20% Scholarship</span>
                                <p className="font-normal text-gray-700 text-md dark:text-gray-400 line-clamp-2">
                                    {course.description}
                                </p>
                            </div>
                            <div className="w-32">
                                <p className="flex items-center gap-2"><FaClock/>80 hours</p>
                                <p className="flex items-center gap-2"><FaLayerGroup/>{course.level}</p>
                            </div>
                        </div>
                    </Card>
            ))}
            </div>
        </main>
        </>
    )
}