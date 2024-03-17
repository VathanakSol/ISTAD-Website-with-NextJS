
import { Carousel } from 'flowbite-react';

export default function CarouselComponent() {
    return (
        <div className="h-50 sm:h-64 xl:h-80 2xl:h-screen m-4">
            <Carousel className="rounded-none">
                <img src="https://www.viewsonic.com/library/wp-content/uploads/2019/12/Technology-in-the-Classroom.jpg" alt="..."  className="rounded-none"/>
                <img src="https://th.bing.com/th/id/OIP.b9OyVJzx8L2ja3HELo081wHaE7?rs=1&pid=ImgDetMain" alt="..."  className="rounded-none"/>
                <img src="https://th.bing.com/th/id/R.21e54612928bee3aeb2446af33bdc8a2?rik=Op5KwnQilEGHLQ&pid=ImgRaw&r=0" alt="..."  className="rounded-none"/>
                <img src="https://th.bing.com/th/id/R.09493e98e2fa27aabf7a835c9e5d4367?rik=NEvrEBAZYlQQWQ&pid=ImgRaw&r=0" alt="..."  className="rounded-none"/>
                <img src="https://th.bing.com/th/id/R.76e400acd325f64f33b9af45617798d1?rik=cTrSi9Wvu4CYPQ&pid=ImgRaw&r=0" alt="..."  className="rounded-none"/>
            </Carousel>
        </div>
    );
}
