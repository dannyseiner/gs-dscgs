import React from "react";
import IPageData from "../interfaces/IPageData";
import { CardList, Collection } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

function HomeBlock({ data }: IPageData | any) {
  const navigate = useNavigate();

  const RedirectToRelease = () => {
    navigate(`/release/${data.id}`);
  };

  return (
    <div className="home-block" onClick={() => RedirectToRelease()}>
      <div className="home-block-container">
        <Row>
          <Col sm>
            <img
              src={"https://f4.bcbits.com/img/a4139357031_10.jpg"}
              className="home-block-image"
            />
          </Col>
          <Col xs={12} md={8} sm>
            <div className="home-block-info-wrapper" style={{ marginTop: 13 }}>
              <p className="home-block-author">{data.artist}</p>
              <p className="home-block-title m-0">{data.title}</p>
              <p className="home-block-author m-0">
                {data.label} {data.label ? "-" : ""} {data.year}
              </p>
            </div>
          </Col>
          <Col sm>
            <div className="home-block-stats-wrapper">
              <div className="home-block-wantlist home-block-stats text-light">
                <CardList size={30} />
                <p className="home-block-raiting-text">
                  {data.stats.community.in_wantlist}
                </p>
              </div>
              <div className="home-block-in_collection home-block-stats text-light">
                <Collection size={30} />
                <p className="home-block-raiting-text">
                  {data.stats.community.in_collection}
                </p>
              </div>
            </div>
          </Col>
        </Row>
        {/* <div className="home-block-wrapper">
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
          </div> */}
      </div>
    </div>
  );
}

export default HomeBlock;
