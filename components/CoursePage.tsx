import CourseComponent from "@/components/CourseComponent";

export type Courses= {
    readonly id: number;
    title: string;
    image: string;
    description:string;
    level?: string;
};
export default function CoursePage(){
    const courses: Courses[] = [
        {
            "id": 1,
            "title": "Flutter Mobile Development",
            "image": "https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png",
            "description": "Flutter course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
            "level": "Medium",
        },
        {
            "id": 2,
            "title": "iOS Development",
            "image": "https://api.istad.co/media/image/4709913c-3dd4-4896-8b05-ba6f7fd074ba.png",
            "description": "iOS Development is designed for students to get started with design iOS App Concepts. This course will focus on languages syntax since basic levels and start to implement real user interfaces following with great user experiences and integrate others iOS features.",
            "level": "Medium",
        },
        {
            "id": 3,
            "title": "SQL & Data Modeling with PostgreSQL",
            "image": "https://api.istad.co/media/image/354762b5-e27a-40ac-93c3-6de5cdb0362f.png",
            "description": "SQL & Data Modeling with PostgreSQL is designed to help you understand in project analyze, database design and normalized data follow requirements from clients and Modeling the business flows. Please see the details course offers  below,",
            "level": "Medium",
        },
        {
            "id": 4,
            "title": "Web Design",
            "image": "https://api.istad.co/media/image/3a3d2bf2-670b-4f2f-a72a-b9b8ba3a0f38.png",
            "description": "Web Design course is designed for students to get started with Design Website Concepts. This course will focus on basic and advanced layout of website plus responsive design including UI/UX Design Concept. Moreover, CMS & Dynamic content with hosting application to access in public.",
            "level": "Medium",
        },
        {
            "id": 5,
            "title": "Cyber Security",
            "image": "https://th.bing.com/th/id/OIP.LGQ0Eja_NrJ-XswAs-tqEQHaEo?rs=1&pid=ImgDetMain",
            "description": "Cyber Security course is designed for students to get started with Design Website Concepts. This course will focus on basic and advanced layout of website plus responsive design including UI/UX Design Concept. Moreover, CMS & Dynamic content with hosting application to access in public.",
        },
        {
            "id": 6,
            "title": "Spring Developer",
            "image": "https://th.bing.com/th/id/R.4d058e76eed9f8eb10134b403c6ddd84?rik=SeDj0pxkcBMrnQ&pid=ImgRaw&r=0",
            "description": "Spring Developer course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        },
        {
            "id": 7,
            "title": "Data Science",
            "image": "https://th.bing.com/th/id/R.b207c0355d38b91ac665b24776d5729f?rik=1%2bOlxEhxv8HTdw&pid=ImgRaw&r=0",
            "description": "Data Science course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        },
        {
            "id": 8,
            "title": "Arfiticial Intelligence",
            "image": "https://th.bing.com/th/id/OIP.EqNo_Xwatr-16VSx7iOlcQAAAA?rs=1&pid=ImgDetMain",
            "description": "Arfiticial Intelligence course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        },
        {
            "id": 9,
            "title": "UX/UI Designer",
            "image": "https://th.bing.com/th/id/OIP.qBQAywm8vXgbM62iLnVUrwHaHa?rs=1&pid=ImgDetMain",
            "description": "UX/UI Designer course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        },
        {
            "id": 10,
            "title": "Dev Ops",
            "image": "https://www.cabotsolutions.com/public/DevOps-Cycle.png",
            "description": "Dev Ops course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        },
        {
            "id": 11,
            "title": "C++ Programming",
            "image": "https://th.bing.com/th/id/R.fccab54f52097ba730d7896b7b6701ce?rik=UtpmNATSmVe%2f9A&pid=ImgRaw&r=0",
            "description": "C++ Programming course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        },
        {
            "id": 12,
            "title": "Java Programming",
            "image": "https://th.bing.com/th/id/R.8885ce9860f3aed4c999dc1b9fb70633?rik=ujP9lvfbsVflUw&pid=ImgRaw&r=0",
            "description": "Java Programming course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        },
        {
            "id": 13,
            "title": "Python Programming",
            "image": "https://th.bing.com/th/id/R.7494e83354e2662240d06630cc31f08d?rik=9tIRLZpYS9oTfQ&pid=ImgRaw&r=0",
            "description": "Python Programming course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        },
        {
            "id": 14,
            "title": "Data Analytics",
            "image": "https://th.bing.com/th/id/R.1326a02e0f083ba409a8b539ec6d5c6e?rik=EFF50rKmi05s8A&pid=ImgRaw&r=0",
            "description": "Data Analytics course is designed to develop multi-platform like iOS and Android App, Web, Desktop apps like MacOS, Windows and Linux using one code base. We also include with UI / UX design concept. Moreover, integrate with third-party libraries and other mobile functionality to make your app more professional.",
        }]
    return(
        <CourseComponent courses={courses}/>

    )
}