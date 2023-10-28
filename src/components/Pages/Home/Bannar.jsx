import ban1 from '../../../assets/assets/images/banner/5.jpg'
import ban2 from '../../../assets/assets/images/banner/2.jpg'
import ban3 from '../../../assets/assets/images/banner/3.jpg'
import ban4 from '../../../assets/assets/images/banner/1.jpg'

const Bannar = () => {
    return (
        <div className="carousel w-full h-[500px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={ban1} className="w-full" />
                <div className=' absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full h-full'>
                </div>
                <div className=' absolute left-5 md:left-10 lg:left-20 space-y-5 bottom-20 text-white'>
                    <h2 className=' text-lg md:text-4xl lg:text-6xl font-semibold'>Affordable <br/> Price For Car <br/> Servicing</h2>
                    <h4 className=' font-normal'>There are many variations of passages of  available, but<br/> the majority have suffered alteration in some form</h4>
                </div>
                <div className="absolute flex justify-between bottom-5 lg:bottom-10 gap-5 left-[65%] md:left-[80%] lg:left-[85%]">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={ban2} className="w-full" />
                <div className=' absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full h-full'></div>
                <div className="absolute flex justify-between bottom-10 gap-5 left-[65%] md:left-[80%] lg:left-[85%]">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={ban3} className="w-full" />
                <div className=' absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full h-full'>
                </div>
                <div className="absolute flex justify-between bottom-10 gap-5 left-[65%] md:left-[80%] lg:left-[85%]">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={ban4} className="w-full" />
                <div className=' absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] w-full h-full'></div>
                <div className="absolute flex justify-between bottom-10 gap-5 left-[65%] md:left-[80%] lg:left-[85%]">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Bannar;