"use client";

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import style from "./style.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const routing = (url: string) => {
    router.push(url);
  };
  return (
    <div className={style.background}>
      <div className={style.darkBackground}>
        <Container>
          <Row
            style={{
              paddingTop: 44,
            }}
          >
            <Col>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src="/iconBali.png" alt="" width={165} height={165} />
              </div>
              <h1
                className={style.title}
                style={{
                  color: "white",
                }}
              >
                A Better way to
              </h1>
              <h1
                className={style.title}
                style={{
                  color: "#FCB371",
                }}
              >
                Travel to Bali
              </h1>
              <p className={`d-flex justify-content-center ${style.Cheapest}`}>Cheapest and  Easier</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  onClick={() => routing("about")}
                  className={`${style["btn-about"]}`}
                  style={{}}
                >
                  About Us
                </Button>
                <Button 
                onClick={()=>routing("reservation")}
                className={`${style["btn-reservation"]}`}>
                  Reservation
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
