"use client";

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import style from "./page.module.css";
import { useRouter } from "next/navigation";

export default function About() {
  const ArrowBack = () => {
    return (
      <svg
        width="27"
        height="38"
        viewBox="0 0 27 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.23223 17.2322C0.255922 18.2085 0.255922 19.7915 1.23223 20.7678L17.1421 36.6777C18.1184 37.654 19.7014 37.654 20.6777 36.6777C21.654 35.7014 21.654 34.1184 20.6777 33.1421L6.53553 19L20.6777 4.85786C21.654 3.88155 21.654 2.29864 20.6777 1.32233C19.7014 0.346019 18.1184 0.346019 17.1421 1.32233L1.23223 17.2322ZM27 16.5L3 16.5L3 21.5L27 21.5L27 16.5Z"
          fill="#FCB371"
        />
      </svg>
    );
  };

  const back = useRouter();
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: "url(/background/bg1.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={style.darkBackground}>
        <div
          style={{
            marginLeft: "56px",
            paddingTop: "70px",
          }}
        >
          <Button onClick={() => back.back()} id={`${style["button-back"]}`}>
            <ArrowBack />
          </Button>
        </div>
        <Container>
          <Row>
            <Col md="12" className="d-flex justify-content-center">
              <h1
                className={style.title}
                style={{
                  marginTop: "20px",
                }}
              >
                About Us
              </h1>
            </Col>
            <Col md="12">
              <div
                className="d-flex justify-content-center"
                style={{
                  marginTop: "46px",
                }}
              >
                <p className={style.description}>
                  More than 10 years, Arkademy Travel Services has grow at a
                  steady pace and become one of Indonesia`s leading travel agent
                  offering a complete travel solution for both leisure and
                  business travels. The company has over 500 staff within 24
                  branches across the country
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
