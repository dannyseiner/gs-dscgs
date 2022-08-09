import React from "react";
function HomePopulatBlock({ props }: any) {
  return (
    <div className={`home-popular-container ${props.style} text-center`}>
      <img
        src="https://f4.bcbits.com/img/a4139357031_10.jpg"
        className="home-popular-image"
        alt="populationBlock"
      />
      <div className="pt-2">
        <p className="home-popular-text m-0">Song Title</p>
        <p className="home-popular-author m-0">Author</p>
      </div>
    </div>
  );
}

export default HomePopulatBlock;
