import React from "react";
import IPageData from "../interfaces/IPageData";
import { CardList, Collection } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

function HomeBlock({ data }: IPageData | any) {
  const navigate = useNavigate();

  const RedirectToRelease = () => {
    navigate(`/release/${data.id}`);
  };

  return (
    <div className="home-block" onClick={() => RedirectToRelease()}>
      <div className="home-block-container">
        <div className="home-block-image-container">
          <img
            src={"https://f4.bcbits.com/img/a4139357031_10.jpg"}
            className="home-block-image"
          />
        </div>
        <div className="home-block-wrapper">
          <div className="home-block-content">
            <p className="home-block-author">{data.artist}</p>
            <p className="home-block-title">{data.title}</p>
          </div>
          <div className="home-block-rating">
            <div className="home-block-wantlist home-block-stats">
              <CardList size={30} />
              <p className="home-block-raiting-text">
                {data.stats.community.in_wantlist}
              </p>
            </div>
            <div className="home-block-in_collection home-block-stats">
              <Collection size={30} />
              <p className="home-block-raiting-text">
                {data.stats.community.in_collection}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBlock;
