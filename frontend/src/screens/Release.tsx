import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import IPageData from "../interfaces/IPageData";
import { Container, Button, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
// INTERFACES
import IReleaseArtist from "../interfaces/IReleaseArtist";
import IReleaseFormats from "../interfaces/IReleaseFormats";
import IReleaseTracks from "../interfaces/IReleaseTracks";
const data = require("../test/release.json");

function Release() {
  const [releaseData, setReleaseData] = useState<IPageData | any>(data);
  const params = useParams();
  const navigate = useNavigate();
  const loadReleaseData = () => {
    axios
      .get(`https://api.discogs.com/releases/${params.id}`)
      .then((response) => setReleaseData(response.data));
  };

  const renderArtists = releaseData.artists.map(
    (artist: IReleaseArtist, index: number) => (
      <Link key={index} to="/" className="release-artist ml-2">
        {artist.name}
      </Link>
    )
  );

  const renderFormats = releaseData.formats.map(
    (format: IReleaseFormats, index: number) => (
      <p key={index} className="release-artist ml-2 d-inline-block ml-2 mb-0">
        {format.name}, {format.qty},
        {format.descriptions.map((desc: any, i: number) => (
          <p className="release-artist d-inline-block mb-0" key={i}>
            {desc} {i == format.descriptions.length - 1 ? "" : ","}
          </p>
        ))}
      </p>
    )
  );

  const renderStyles = releaseData.styles.map(
    (style: string, index: number) => (
      <p key={index} className="d-inline-block m-0">
        {style}
      </p>
    )
  );

  const renderTracklist = releaseData.tracklist.map(
    (track: IReleaseTracks, index: number) => (
      <div className="m-0" key={index}>
        <Row>
          <Col sm>
            <p className="m-0 d-inline-block w-100 text-left">
              {track.position}
            </p>
          </Col>
          <Col sm>
            <p className="m-0 d-inline-block w-100 text-center">
              {track.title}
            </p>
          </Col>
          <Col sm>
            <p
              className="m-0 d-inline-block w-100"
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
  useEffect(() => {
    // Request dostava timeout po zasalni urciteho poctu pozadavku
    loadReleaseData();
  });
  return (
    <div className="bg-dark border-radius text-light fadeIn">
      <Row>
        <Col sm>
          <img
            src={"https://f4.bcbits.com/img/a4139357031_10.jpg"}
            className="release-image"
          />
        </Col>
        <Col sm>
          <Row>
            <Col sm>
              <h3 className="mt-1">{releaseData.title}</h3>
              <div className="release-all-artists">
                <p className="m-0 p-0 d-inline">Artists:</p>
                {renderArtists}
              </div>
              <div className="release-all-formats">
                <p className="m-0 p-0 d-inline">Formats:</p>
                {renderFormats}
              </div>
              <div className="release-dsc-info">
                <p className="m-0 p-0 d-inline">
                  Country: {releaseData.country}
                </p>
              </div>
              <div className="release-formated-date">
                <p className="m-0">{releaseData.released_formatted}</p>
              </div>
              <div className="release-dsc-info">
                <p className="m-0 p-0 d-inline">Styles: {renderStyles}</p>
              </div>
            </Col>
            <Col sm>
              <div className="release-info" style={{ marginTop: "40px" }}>
                <div className="release-for_sale">
                  <p className="m-0 p-0 d-inline">
                    For sale: {releaseData.num_for_sale}
                  </p>
                </div>
                <div className="release-low_price">
                  <p className="m-0 p-0 d-inline">
                    For sale: {releaseData.lowest_price}
                  </p>
                </div>
              </div>
            </Col>
            <p>Tracklist:</p>
            {renderTracklist}
          </Row>

          <div className="release-marketplace mx-auto">
            <Row>
              <Col sm>
                <p className="realese-markeplace-header text-center m-0">
                  Colllection
                </p>
                <p className="text-center m-0">{releaseData.community.have}</p>
                <div className="div-center">
                  <Button>Buy Vinyl</Button>
                </div>
              </Col>
              <Col sm>
                <p className="realese-markeplace-header text-center m-0">
                  Wantlist
                </p>
                <p className="text-center m-0">{releaseData.community.want}</p>
                <div className="div-center">
                  <Button variant="light">Sell Vinyl</Button>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <div className="release-youtube-vid"></div>
      <div className="div-center p-3">
        <Button variant="warning" onClick={() => navigate(-1)}>
          Back
        </Button>
      </div>
    </div>
  );
}

export default Release;
