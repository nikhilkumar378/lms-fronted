import HomeLayout from "../../Layouts/HomeLayouts";
import aboutMainImage from "../../assets/aboutMainImage.png";
import apj from "../../assets/apj.png";
import steveJobs from "../../assets/steveJobs.png";
import nelsonMandela from "../../assets/nelsonMandela.png";
import einstein from "../../assets/einstein.png";


function AboutUs() {
  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col text-white">
        <div className="flex items-center gap-10 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
              {" "}
              Affordable and quality education{" "}
            </h1>

            <p className="text-xl text-gray-200">
              Our goal is to provide the affordable and quality education to the
              world. We are providing platform for the aspiring teachers and
              students to share their skills, creativity and knowledge to each
              other to empower and contribute in the growth and wellness of
              mankind
            </p>
          </section>

          <div className="w-1/2">
            <img
              className="drop-shadow-2xl"
              id="test1"
              style={{
                filter: "drop-shadow(0px 10px 10px rgb(0,0,0 ))",
              }}
              src={aboutMainImage}
            />
          </div>
        </div>
      

      <div className="carousel w-1/2 my-20 m-auto">
        <div id="slide1" className="carousel-item relative w-full">
<div className="flex flex-col items-center justify-center gap-4 px-[15%]">

            <img
            src={apj}
            
            className=" w-40 rounded-full border-2 border-gray-400"
          />
          <p>“If you want to shine like the sun, first burn like the sun”</p>
          <h3>APJ Abdul Kalam</h3>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
</div>

</div>



        <div id="slide2" className="carousel-item relative w-full">
        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">

<img
src={steveJobs}
className="w-40 rounded-full border-2 border-gray-400"
/>
<p>Innovation is the ability to see change as an opportunity - not a threat</p>
<h3>Steve Jobs</h3>
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
<a href="#slide1" className="btn btn-circle">
  ❮
</a>
<a href="#slide3" className="btn btn-circle">
  ❯
</a>
</div>
</div>
        </div>



        <div id="slide3" className="carousel-item relative w-full">
        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">

<img
src={einstein}
className="w-40 rounded-full border-2 border-gray-400"
/>
<p> Ek Botal whiskey la Newton, Energy ka m@@ k@ b#*$%@ </p>
<h3>Albert Einstein</h3>
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
<a href="#slide2" className="btn btn-circle">
  ❮
</a>
<a href="#slide4" className="btn btn-circle">
  ❯
</a>
</div>
</div>
        </div>


        <div id="slide4" className="carousel-item relative w-full">
        <div className="flex  flex-col items-center justify-center gap-4 px-[15%]">

<img

src={nelsonMandela}
className="w-40 rounded-full border-2 border-gray-400"
/>
<p>You can never have an impact on society if you have not changed yourself.</p>
<h3>Nelson Mandela</h3>
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
<a href="#slide3" className="btn btn-circle">
  ❮
</a>
<a href="#slide5" className="btn btn-circle">
  ❯
</a>
</div>
</div>
        </div>
      </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;
