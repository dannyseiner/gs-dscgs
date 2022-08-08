import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Artist() {
  const [artistData, setArtistData] = useState<any>({});
  const params = useParams();
  const navigate = useNavigate();
  const getArtistData = () => {
    axios
      .get(`https://api.discogs.com/artists/${params.id}`)
      .then((response) => {
        setArtistData(response.data);
        getArtistReleases(response.data.releases_url);
      });
  };

  const getArtistReleases = (url: string) => {
    axios.get(url).then((response) => console.log(response));
  };

  useEffect(() => {
    getArtistData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <Row>
        <Col sm>
          <img
            src="https://www.seekpng.com/png/full/46-462959_unknown-person-icon-png-download-single-people-logo.png"
            style={{ width: "100%" }}
            alt="artist_img"
          />
        </Col>
        <Col sm={8} className="p-3">
          <h4>{artistData.name}</h4>
        </Col>
      </Row>
      <div className="div-center p-3">
        <Button variant="warning" onClick={() => navigate(-1)}>
          Back
        </Button>
      </div>
    </div>
  );
}

export default Artist;
