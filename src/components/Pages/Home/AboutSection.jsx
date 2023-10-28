import img1 from '../../../assets/assets/images/about_us/person.jpg'
import img2 from '../../../assets/assets/images/about_us/parts.jpg'

const AboutSection = () => {
    return (
        <div className=' flex flex-col md:flex-row lg:flex-row gap-20 relative mb-28 mt-10 px-3 md:px-3 lg:px-0'>
            <div className=' md:w-[50%] lg:w-[50%]'>
                <div>
                    <img className=' w-full md:w-[300px] md:h-[300px] lg:w-[700px] lg:h-[700px] rounded-md mb-4 md:mb-0 lg:mb-0 ' src={img1} alt="" />
                </div>
                <div className=' '>
                    <img className=' md:absolute lg:absolute rounded-xl bg-[#FFF] w-full md:w-[200px] md:h-[200px] lg:w-[400px] lg:h-[400px] lg:p-3 md:p-3 md:left-[25%] md:top-[55%] lg:left-[25%] lg:top-[55%]' src={img2} alt="" />
                </div>
            </div>
            <div className='md:w-[50%] lg:w-[50%] space-y-3'>
                <h4 className=' text-[#FF3811] font-semibold'>About Us</h4>
                <h3 className=' text-xl lg:text-4xl md:text-2xl font-semibold'>We are qualified & of experience in this field</h3>
                <p className=' font-semibold'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className=' font-semibold'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className=' bg-[#FF3811] px-5 py-3 rounded-md text-[#FFF]'>Get More Info</button>
            </div>
        </div>
    );
};

export default AboutSection;