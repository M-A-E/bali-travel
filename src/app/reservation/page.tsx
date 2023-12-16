/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { Container, Row, Col, Button, Form, FormSelect } from "react-bootstrap";
import style from "./page.module.css";
import { useRouter } from "next/navigation";
import axios from "axios";
import { apiRoute, baseUrl } from "../../../config/api";

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

interface CountryEntity {
  name: string;
  region: string;
}

interface FormEntity {
  name: string;
  email: string;
  phone: string;
  country: string;
  desc: string;
}

export default function About() {
  const [countryData, setCountryData] = useState<Array<CountryEntity> | []>([]);
  const [form, setForm] = useState<FormEntity>({
    name: "",
    email: "",
    phone: "",
    country: "",
    desc: "",
  });
  const back = useRouter();

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //client side
  const getDataCountry = async () => {
    try {
      const response = await axios.get(`${baseUrl}/${apiRoute.API_COUNTRY}`);
      setCountryData(response.data.data);
    } catch (err) {}
  };

  useEffect(() => {
    getDataCountry();
  }, []);

  console.log("checl form ", form);

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: "url(/background/bg2.svg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={style.darkBackground}>
        <div
          style={{
            width: "50px",
            position: "absolute",
            top: "50px",
            left: "56px",
          }}
        >
          <Button onClick={() => back.back()} id={`${style["button-back"]}`}>
            <ArrowBack />
          </Button>
        </div>
        <Container>
          <Row
            style={{
              paddingTop: "40px",
            }}
          >
            <Col md="12">
              <h1 className={style.title}>Reservation</h1>
            </Col>
            <Col md="12" className="d-flex justify-content-center">
              <div
                className="d-flex justify-content-center"
                style={{
                  marginTop: "10px",
                }}
              >
                <Form
                  style={{
                    width: "382px",
                  }}
                >
                  <Form.Group className={`${style["form-container"]}`}>
                    <input
                      name="name"
                      onChange={onChangeInput}
                      type="text"
                      className={style.input}
                      placeholder="input your name"
                    />
                  </Form.Group>
                  <Form.Group className={`${style["form-container"]}`}>
                    <input
                      name="email"
                      onChange={onChangeInput}
                      type="text"
                      className={style.input}
                      placeholder="input your email"
                    />
                  </Form.Group>
                  <Form.Group
                    className={`d-flex justify-content-betwen ${style["form-container"]}`}
                  >
                    <input
                      name="phone"
                      onChange={onChangeInput}
                      style={{
                        width: "48%",
                        marginRight: "2%",
                      }}
                      type="text"
                      className={style.input}
                      placeholder="phone number"
                    />
                    <Form.Select
                      name="country"
                      onChange={(e: any) => onChangeInput(e)}
                      style={{
                        width: "48%",
                        marginLeft: "2%",
                      }}
                      className={style.input}
                      aria-label="Default select example"
                    >
                      <option selected>Select your nationality</option>
                      {countryData.map((item: CountryEntity) => {
                        return <option key={item.name} value={item.name}>{item.name}</option>
                      })}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className={`${style["form-container"]}`}>
                    <textarea
                    name="desc"
                    onChange={(e: any) => onChangeInput(e)}
                    rows={5} 
                    className={style.textArea}></textarea>
                  </Form.Group>
                  <div>
                    <Button className={style.btnSend}>Submit</Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
