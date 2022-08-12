import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Collapse, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import Graph from "../components/Graph";
// INTERFACES
import IPageData from "../interfaces/IPageData";
import IReleaseArtist from "../interfaces/IReleaseArtist";
import IReleaseFormats from "../interfaces/IReleaseFormats";
import IReleaseTracks from "../interfaces/IReleaseTracks";
import { release } from "os";
const data = require("../test/release.json");
const config = require("../config.json");

function Release() {
  const [releaseData, setReleaseData] = useState<IPageData | any>(data);
  const [tracklistToggle, setTracklistToggle] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(0);
  const params = useParams();
  const navigate = useNavigate();

  const loadReleaseData = () => {
    axios
      .get(`https://api.discogs.com/releases/${params.id}`)
      .then((response) => {
        setReleaseData(response.data);
      });
  };
  useEffect(() => {
    loadReleaseData();
    loadReleasePrice();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const loadReleasePrice = () => {
    axios
      .get(`${config.server_url}/release/id/${params.id}`)
      .then((response) => setPrice(response.data[0].price_usd));
  };

  const renderArtists = releaseData.artists.map(
    (artist: IReleaseArtist, index: number) => (
      <div key={index} className="d-inline-block">
        <Link
          to={`/artist/${artist.id}`}
          className="release-artist ml-2 text-warning"
        >
          {artist.name}
        </Link>
        {releaseData.artists.length - 1 === index ? "" : ", "}
      </div>
    )
  );

  const renderFormats = releaseData.formats.map(
    (format: IReleaseFormats, index: number) => (
      <div key={index} className="release-artist ml-2 d-inline-block ml-2 mb-0">
        {format.name}, {format.qty},
        {format.descriptions.map((desc: any, i: number) => (
          <p className="release-artist d-inline-block mb-0" key={i}>
            {desc} {i === format.descriptions.length - 1 ? "" : ","}
          </p>
        ))}
      </div>
    )
  );

  const renderGenres = releaseData.genres.map(
    (genre: string, index: number) => (
      <p className="m-0 d-inline-block" key={index}>
        {genre} {index === releaseData.genres.length - 1 ? "" : ", "}{" "}
      </p>
    )
  );

  const renderStyles = () => {
    return releaseData.styles.map((style: string, index: number) => (
      <p key={index} className="d-inline-block m-0">
        {style}
        {index === releaseData.styles.length - 1 ? " " : ", "}&nbsp;
      </p>
    ));
  };

  const renderTracklist = releaseData.tracklist.map(
    (track: IReleaseTracks, index: number) => (
      <div className="m-0" key={index}>
        <Row>
          <Col>
            <p className="release-tracklist-content">{track.position}</p>
          </Col>
          <Col>
            <p
              className="release-tracklist-content"
              style={{ textAlign: "center" }}
            >
              {track.title}
            </p>
          </Col>
          <Col>
            <p
              className="release-tracklist-content"
              style={{ textAlign: "right", paddingRight: "10px" }}
            >
              {track.duration}
            </p>
          </Col>
        </Row>

        <hr />
      </div>
    )
  );

  return (
    <div className="bg-light text-dark border-radius text-light fadeIn release-container">
      <Row>
        <Col sm>
          <img
            src={"https://f4.bcbits.com/img/a4139357031_10.jpg"}
            className="release-image"
            alt="release_img"
          />
        </Col>
        <Col sm={8}>
          <div className="p-2">
            <h3 className="mt-1">{releaseData.title}</h3>
            <Row>
              <Col sm>
                <div className="release-all-artists">
                  <p className="m-0 p-0 d-inline">Artists: </p>
                  {renderArtists}
                </div>
                <div className="release-formated-date">
                  <p className="m-0">{releaseData.released_formatted}</p>
                </div>
                <div className="release-all-formats">
                  <p className="m-0 p-0 d-inline">Formats: </p>
                  {renderFormats}
                </div>
                <div className="release-dsc-info">
                  <p className="m-0 p-0 d-inline">
                    Country: {releaseData.country}
                  </p>
                </div>
                {releaseData.styles ? (
                  <div className="release-styles-info">
                    <div className="m-0 p-0 d-inline">
                      Styles: {renderStyles()}
                    </div>
                  </div>
                ) : (
                  ""
                )}

                <div className="release-genres-info">
                  <div className="m-0 p-0 d-inline">Genres: {renderGenres}</div>
                </div>
                <div className="release-notes mt-2">
                  <p className="m-0 p-0 d-inline">{releaseData.notes}</p>
                </div>
              </Col>
              <Col sm>
                <div className="release-info">
                  <div className="release-low_price">
                    <p className="m-0 p-0 d-inline">
                      Price:{" "}
                      {price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </p>
                  </div>
                  <div className="release-for_sale">
                    <p className="m-0 p-0 d-inline">
                      For sale: {releaseData.num_for_sale}
                    </p>
                  </div>
                  <p className="p-0 m-0 ">Want: {releaseData.community.want}</p>
                  <p className="p-0 m-0">Have: {releaseData.community.have}</p>
                  <div className="realese-star-rating div-center">
                    <Rating
                      readonly={true}
                      ratingValue={releaseData.community.rating.average * 20}
                    />
                    <p className="m-0 text-center">
                      Rated by: {releaseData.community.rating.count}
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Container className="mt-5">
        <Graph />
      </Container>
      <div className="track-list p-3">
        <Collapse in={tracklistToggle} className="p-2">
          <div id="example-collapse-text p-4">{renderTracklist}</div>
        </Collapse>
      </div>
      <div className="release-youtube-vid"></div>
      <div className="div-center p-3">
        <Button variant="warning" onClick={() => navigate(-1)}>
          Back
        </Button>
        <Button
          variant="light"
          style={{ marginLeft: 10 }}
          onClick={() =>
            setTracklistToggle(tracklistToggle === true ? false : true)
          }
        >
          {tracklistToggle === true ? "Hide Tracklist" : "Show Tracklist"}
        </Button>
      </div>
    </div>
  );
}

export default Release;
