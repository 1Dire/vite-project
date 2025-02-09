import { useState } from "react";

const Card = (props) => {
  const [data, setData] = useState(props.data);
  return (
    <div className="card-container px-4 sm:px-6 md:px-8 lg:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {data && (
        <>
          {data.map((item, index) => (
            <a key={index} className="card shadow-lg">
              <div
                className="background"
                style={{
                  backgroundImage: `url(${item.backgroundImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="card-contents">
                <h4
                  className="title"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p
                  className="description"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
                <p
                  className="description2"
                  dangerouslySetInnerHTML={{ __html: item.description2 }}
                />
              </div>
            </a>
          ))}
        </>
      )}
    </div>
  );
};

export default Card;
