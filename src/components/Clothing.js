import React from "react";
import styled from "styled-components";
import { BrowserRouter as Link } from "react-router-dom";
import "../styles/clothing.css"

const Clothing = ({ categories }) => {

  return (
    <Container>
      <h5>Clothing / Fashion </h5>
      <Content>

        <Wrap>
          <Link to="">
            <img src="/clothing/man.jpg" alt="" />
          </Link>

        </Wrap>
        <Wrap>
          <Link to="">
            <img src="/clothing/tradition.jpg" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="">
            <img src="/clothing/indian.jpg" alt="" />
          </Link>
        </Wrap>
        <Wrap>
          <Link to="">
            <img src="/clothing/woman.jpg" alt="" />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
};

export default Clothing;

const Container = styled.div`
  margin-top:80px;
  margin-bottom:60px;
  h4 {
    margin-top: 20px;
    margin-bottom: 25px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  background-size: cover;
  background-position: center;
  height:400px;
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    object-position:center;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    // box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px,
    //   rgb(0 0 0 / 70%) 0px 16px 10px -10px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
`;
