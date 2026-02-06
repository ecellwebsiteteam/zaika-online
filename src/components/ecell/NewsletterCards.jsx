import React from "react";

const NewsletterCards = () => {
  return (
    <div className="cards justify-center items-center w-full max-w-5xl mx-auto px-4 font-inter antialiased">
      {/* First Card */}
      <div className="card">
        <div className="card-bg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
            suscipit similique sunt quos, fuga provident alias, itaque odit
            nesciunt ipsa illum a ipsam fugiat officiis in odio labore
            architecto possimus.
          </p>
        </div>

        <div className="card-cta">
          <p>Tap to Read</p>
        </div>

        <div className="card-fg">
          <p className="news-title"> News Heading</p>
          <p className="news-description">Description</p>

          <div className="logo">
            <img src="/ecell-logo.png" alt="" />
          </div>
        </div>
      </div>

      {/* Second Card */}
      <div className="card">
        <div className="card-bg">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            explicabo tempore corrupti. Laudantium quae repellat architecto,
            atque ipsam vero rerum quisquam incidunt? Nesciunt vel incidunt,
            illum nemo velit blanditiis hic.
          </p>
        </div>

        <div className="card-cta">
          <p>Tap to Read</p>
        </div>

        <div className="card-fg">
          <p className="news-title"> News Heading</p>
          <p className="news-description">Description</p>

          <div className="logo">
            <img src="/ecell-logo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCards;
