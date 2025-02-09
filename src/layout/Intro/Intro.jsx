import React from "react";
import "./intro.css"; 
import Carousel from "../../components/Carousel"; 
import Card from "../../components/Card";
const carouselData = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet,",
    description:
      "Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut abore et dolore magna aliqua.",
    backgroundImage: "img/main.jpg",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet,",
    description:
      "Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut abore et dolore magna aliqua.",
    backgroundImage: "img/main.jpg",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet,",
    description:
      "Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor incididunt ut abore et dolore magna aliqua.",
    backgroundImage: "img/main.jpg",
  },
];
const cardData = [
  {
    id: 1,
    title: "Lorem ipsum <br/> dolor sit amet,",
    description: "Lorem Ipsum dolor sit amer consectetur adipiscing elit,",
    description2: "Lorem osum aolor sit ameu,",
    backgroundImage: "img/img1.jpg",
  },
  {
    id: 2,
    title: "Lorem ipsum <br/> dolor sit amet,",
    description: "Lorem Ipsum dolor sit amer consectetur adipiscing elit,",
    description2: "Lorem osum aolor sit ameu,",
    backgroundImage: "img/img2.jpg",
  },
  {
    id: 3,
    title: "Lorem ipsum <br/> dolor sit amet,",
    description: "Lorem Ipsum dolor sit amer consectetur adipiscing elit,",
    description2: "Lorem osum aolor sit ameu,",
    backgroundImage: "img/img3.jpg",
  },
  {
    id: 4,
    title: "Lorem ipsum <br/> dolor sit amet,",
    description: "Lorem Ipsum dolor sit amer consectetur adipiscing elit,",
    description2: "Lorem osum aolor sit ameu,",
    backgroundImage: "img/img4.jpg",
  },
];
const Intro = () => {
  return (
    <>
      <section className="intro">
        <Carousel data={carouselData} />
        <Card data={cardData}/>
      </section>
    </>
  );
};

export default Intro;
