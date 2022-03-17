//import { Container } from "@mui/material";
import React from "react";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./Home.css";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Container,
  ImageList,
  ImageListItem,
} from "@mui/material";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="text-wrapper">
          <span
            className="text-wrapper-span"
            style={{
              color: "violet",
              fontSize: "100px",
              fontWeight: "bold",
            }}
          >
            MouseLAP
          </span>
          <br />
          <h1>
            Ноутбуки от
            <br />
            мировых брендов
          </h1>
        </div>
      </div>

      <Container>
        <div className="content-text">
          <h3>MouseLAP </h3>
          <p>
            {" "}
            <h4>
              MouseLAP - это магазин по продаже ноутбуков от компании APPLE и
              других мировых брендов. Больше чем магазин Наше общение с
              клиентами не заканчивается в момент покупки. Для тех, кто
              предпочитает, чтобы ихтехнику настраивал профессионал, мы
              предлагаем платные услуги — как в магазинах, так и на дому
            </h4>
          </p>
          <Link to="/aboutus">
            <div className="content-iitem-icon">
              <Button
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontSize: 15,
                  fontFamily: "Monospace",
                }}
              >
                Подробнее
              </Button>
              <ArrowRightAltIcon />
            </div>
          </Link>
        </div>
      </Container>
      <div className="header">
        <div className="imgs">
          <Box sx={{ width: 1050 }}>
            <ImageList variant="masonry" cols={3} gap={8}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img src={item.img} alt="#" />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </div>
      </div>

      {/* <div className="reasons">
        <h4>CELESTIAL MOUNTAIN SCENERY</h4>
        <h4>BREATHTAKING MOUNTAIN LAKES</h4>
        <h4>EXTREME SPORTS</h4>
        <h4>THE GREAT SILK ROAD</h4>
        <h4>ANTIQUITY AND SACRED PLACES</h4>
        <h4>THE MANAS EPOS</h4>
        <h4>NOMADIC CULTURE</h4>
        <h4>KYRGYZ HOSPITALITY</h4>
        <h4>ETHNIC CUISINE</h4>
        <h4>VISA-FREE REGIME</h4>
      </div> */}
    </>
  );
};
const itemData = [
  {
    img: "https://img1.akspic.ru/originals/0/1/9/0/80910-geforce-gadzhet-videoigra-prisposoblenie-multimedijnye_sredstva-1280x720.jpg",
    title: "Laptop",
  },
  {
    img: "https://www.ferra.ru/thumb/1280x720/filters:quality(75)/imgs/2022/02/17/08/5243377/832d1455a30bcf6a0324284471bae910f91f2818.jpg",
    title: "Doors",
  },
  {
    img: "https://assets-prd.ignimgs.com/2022/03/15/alienwarelaptop-1647366641657.jpg",
    title: "Coffee",
  },
  {
    img: "https://www.gamespot.com/a/uploads/screen_kubrick/1551/15511094/3649375-msilaptop.jpg",
    title: "Storage",
  },
  {
    img: "https://www.themobileindian.com/wp-content/uploads/2021/07/mi-notebook-pro-14.jpg",
    title: "Candle",
  },

  {
    img: "https://www.techidence.com/wp-content/uploads/2021/03/1366_2000-10-4.jpg",
    title: "Coffee table",
  },
];

export default Home;
