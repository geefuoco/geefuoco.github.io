import { ImageCarousel } from "@geefuoco/react-image-carousel";
import "@geefuoco/react-image-carousel/dist/index.css";
import "./ImageCarousel.scss";

const imageObjects = [
  { source: "/images/bootstrap.svg", alt: "bootstrap.svg" },
  { source: "/images/css-3.svg", alt: "css-3.svg" },
  { source: "/images/docker-icon.svg", alt: "docker-icon.svg" },
  { source: "/images/express.svg", alt: "express.svg" },
  { source: "/images/git-icon.svg", alt: "git-icon.svg" },
  { source: "/images/html-5.svg", alt: "html-5.svg" },
  { source: "/images/java.svg", alt: "java.svg" },
  { source: "/images/javascript.svg", alt: "javascript.svg" },
  { source: "/images/lua.svg", alt: "lua.svg" },
  { source: "/images/mongodb.svg", alt: "mongodb.svg" },
  { source: "/images/mysql.svg", alt: "mysql.svg" },
  { source: "/images/nodejs.svg", alt: "nodejs.svg" },
  { source: "/images/python.svg", alt: "python.svg" },
  { source: "/images/react.svg", alt: "react.svg" },
  { source: "/images/redux.svg", alt: "redux.svg" },
  { source: "/images/ruby.svg", alt: "ruby.svg" },
  { source: "/images/sass.svg", alt: "sass.svg" },
  {
    source: "/images/typescript-icon.svg",
    alt: "typescript-icon.svg",
  },
  { source: "/images/webpack.svg", alt: "webpack.svg" },
];

const Carousel = () => {
  return (
    <ImageCarousel arrayOfImageObjects={imageObjects} transitionTime={3000} />
  );
};

export default Carousel;
