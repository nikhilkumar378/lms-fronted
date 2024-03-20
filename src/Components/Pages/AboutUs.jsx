import HomeLayout from "../../Layouts/HomeLayouts";
import aboutMainImage from "../../assets/aboutMainImage.png";
import apj from "../../assets/apj.png";

import nelsonMandela from "../../assets/nelsonMandela.png";
import steveJobs from "../../assets/steveJobs.png";
import einstein from "../../assets/einstein.png";
import CarouselSlides from "../CarouselSlides";

function AboutUs() {

  const celebrities = [
    {
      Title: "Nelson Mandela",
      Image: nelsonMandela,
      description: "You can never have an impact on society if you have not changed yourself.",
      slideNumber:1
    },
  
    {
      Title: "Steve Jobs",
      Image: steveJobs,
      description: "Innovation is the ability to see change as an opportunity - not a threat",
      slideNumber:2
    },
  
    {
      Title: "Albert Einstein",
      Image: einstein,
      description: " Chala ja beta Energy ki khoj me garalfrand bad me khojna ",
      slideNumber:3
    },
  
    {
      Title: "Apj Abdul Kalam",
      Image: apj,
      description: "If you want to shine like the sun, first burn like the sun",
      slideNumber:4
    }
  ]
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
      

      <div className="carousel w-1/2 m-auto my-16">
       {celebrities && celebrities.map(celebrity => (<CarouselSlides {...celebrity} key={celebrity.slideNumber} TotalSlides={celebrities.length}/>))}
      </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;
