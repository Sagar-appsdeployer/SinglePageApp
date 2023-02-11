import React from "react";
import Header from "./Header";
import { useGetAllPostQuery } from "../Services/Post";
import { Card, Col, Row } from "react-bootstrap";
const Home = () => {
  const responseInfo = useGetAllPostQuery();

  console.log("Response Data", responseInfo);

  if (responseInfo.isLoading) return <h1>Loading...</h1>;
  if (responseInfo.isError)
    return <h1>An Error Occured {responseInfo.error.error}</h1>;

  return (
    <>
      <Header />
      {/* Get All Data */}
      <div className="container ">
        <Row className="mx-auto mt-5 ">
          {responseInfo.data.map((post, index) => (
            <Col key={index} className="p-3">
              <Card
                style={{ width: "600px", height: "300px" }}
                className="shadow text-center"
              >
                <Card.Body>
                  <Card.Title>{post.id}</Card.Title>
                  <hr />
                  <h6 className="mb-2 text-muted text-uppercase">
                    {post.title}
                  </h6>
                  <p className="text-uppercase">{post.body}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Home;
