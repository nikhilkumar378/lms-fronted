import PropTypes, { number } from 'prop-types';


function CarouselSlides({
  Image,
  Title,
  description,
  slideNumber,
  Totalslides,
}) {
  return (
    <div id={`slides${slideNumber}`} className="carousel-item relative w-full">
      <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
        <img
          src={Image}
          className="w-40 rounded-full border-2 border-gray-400"
        />
        <p> {description} </p>
        <h3>{Title}</h3>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a
            href={`#slides${slideNumber == 1 ? Totalslides : slideNumber - 1}`}
            className="btn btn-circle"
          >
            ❮
          </a>
          <a
            href={`#slides${(slideNumber % Totalslides) + 1}`}
            className="btn btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
export default CarouselSlides;

CarouselSlides.propTypes = {
  // You can declare that a prop is a specific JS primitive. By default, these
  // are all optional.
  Title: PropTypes.string,
  Image: PropTypes.string,
  slideNumber: number,
  Totalslides:number,
  description:CharacterData
}
