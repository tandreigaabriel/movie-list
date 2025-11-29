// src/components/ResultList.jsx
import React from "react";
import { Row, Col, Button } from "antd";
import { PlusOutlined, CheckCircleTwoTone } from "@ant-design/icons";

const IMAGE_PATH = "https://image.tmdb.org/t/p/w200/";

const ResultList = ({ results, savedMovies, onAddMovie, onSelectMovie }) => {
  return (
    <>
      {results.map((item) => (
        <Row key={item.id} gutter={12} className="result_item" align="middle">
          <Col
            span={4}
            className="result_poster"
            onClick={() => onSelectMovie(item)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={IMAGE_PATH + item.poster_path}
              alt={item.title}
              style={{ width: "100%", borderRadius: "6px" }}
            />
          </Col>

          <Col span={10} onClick={() => onSelectMovie(item)} style={{ cursor: "pointer" }}>
            <strong>{item.title}</strong>
          </Col>

          <Col span={3}>{item.vote_average}</Col>

          <Col span={3}>
            {item.release_date ? item.release_date.slice(0, 4) : "-"}
          </Col>

          <Col span={4} className="result_add">
            {savedMovies.some((m) => m.id === item.id) ? (
              <Button block disabled icon={<CheckCircleTwoTone twoToneColor="#52c41a" />}>
                Saved
              </Button>
            ) : (
              <Button
                type="primary"
                block
                icon={<PlusOutlined />}
                onClick={() => onAddMovie(item)}
              >
                Save
              </Button>
            )}
          </Col>
        </Row>
      ))}
    </>
  );
};

export default ResultList;
