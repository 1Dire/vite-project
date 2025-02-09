import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

const Carousel = (props) => {
  const [data, setData] = useState(props.data);

  return (
    <>
      {data && (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {data.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="slide"
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
              }}
            >
              <div className="slide-container">
                <h3 className="title">{slide.title}</h3>
                <p className="description">{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Carousel;
