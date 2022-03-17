import {
  Button,
  Card,
  CardContent,
  Grid,
  Link,
  TextField,
  Typography,
  ImageListItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Contacts.css";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

const style = {
  maxWidth: "800px",
  marginTop: "100px",
  background: "white",
  border: "3px solid #616161",
};

const styleInput = {
  border: "3px solid #616161",
};

const Contacts = () => {
  const [open, setOpen] = useState(false);

  return (
    <Grid maxWidth="lg" sx={{ margin: "0 auto" }}>
      {open ? (
        <center>
          <Card style={style}>
            <CardContent>
              <form>
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      label="First Name"
                      placeholder="Enter first name"
                      variant="outlined"
                      fullWidth
                    />
                  </Grid>

                  <Grid xs={12} sm={6} item>
                    <TextField
                      label="Last Name"
                      placeholder="Enter  last name"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>

                  <Grid xs={12} item>
                    <TextField
                      type="email"
                      label="Email"
                      placeholder="Enter  email"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>

                  <Grid xs={12} item>
                    <TextField
                      type="number"
                      label="Phone"
                      placeholder="Enter phone number"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>

                  <Grid xs={12} item>
                    <TextField
                      label="Message"
                      placeholder="Type your message"
                      variant="outlined"
                      fullWidth
                      required
                      multiline
                      rows={4}
                    />
                  </Grid>

                  <Grid xs={12} item>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      // color="warning"
                      onClick={() => setOpen(false)}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
                <Button
                  sx={{ marginTop: "5px", background: "aqua" }}
                  variant="contained"
                  fullWidth
                  onClick={() => setOpen(false)}
                >
                  Close
                </Button>
              </form>
            </CardContent>
          </Card>
        </center>
      ) : (
        <center>
          <Grid container maxWidth="lg">
            <Grid item lg={6} sx={{ marginTop: "10vh" }}>
              <Grid item lg={12}>
                {" "}
                <Typography
                  sx={{ fontSize: "10vh" }}
                  className="get_typography"
                >
                  Свяжитесь с нами
                </Typography>
              </Grid>

              <Grid item lg={12} sx={{ marginTop: "7vh" }}>
                <Typography
                  sx={{ fontSize: 20 }}
                  color="text.secondary"
                  gutterBottom
                  maxWidth="sm"
                ></Typography>
              </Grid>

              <Grid item lg={12}>
                {" "}
                <Typography
                  data-aos="fade-up-left"
                  sx={{ fontSize: 20 }}
                  color="aqua"
                  gutterBottom
                  maxWidth="sm"
                ></Typography>
              </Grid>

              <Grid lg={12} sx={{ marginTop: "10vh" }}>
                <button
                  href="https://google.com"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 900,
                    fontSize: "22px",
                    textDecoration: "none",
                  }}
                  color="text.secondary"
                  gutterBottom
                >
                  <LocalPhoneOutlinedIcon
                    className="grid-icon"
                    color="warning"
                    sx={{ marginRight: "1vw", transition: "all 0.5s ease" }}
                  />
                  +996 504334441
                </button>

                <button
                  href="https://google.com"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 900,
                    fontSize: "22px",
                    textDecoration: "none",
                  }}
                  color="text.secondary"
                  gutterBottom
                >
                  <InstagramIcon
                    color="warning"
                    sx={{ marginRight: "1vw", transition: "all 0.5s ease" }}
                    className="grid-icon"
                  />
                  MouseLAP_nout
                </button>

                <button
                  href="https://google.com"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 900,
                    fontSize: "22px",
                    textDecoration: "none",
                  }}
                  color="text.secondary"
                  gutterBottom
                >
                  <GitHubIcon
                    className="grid-icon"
                    color="warning"
                    sx={{ marginRight: "1vw", transition: "all 0.5s ease" }}
                  />
                  MouseLAP
                </button>

                <button
                  href="https://google.com"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 900,
                    fontSize: "22px",
                    textDecoration: "none",
                  }}
                  color="text.secondary"
                  gutterBottom
                >
                  <FacebookOutlinedIcon
                    className="grid-icon"
                    color="warning"
                    sx={{ marginRight: "1vw", transition: "all 0.5s ease" }}
                  />
                  MouseLAP
                </button>
              </Grid>
            </Grid>

            <Grid item lg={6}>
              {itemData.map((item) => (
                <ImageListItem>
                  <img
                    src={`${item.img}`}
                    style={{ maxWidth: "700px", marginTop: "6vh" }}
                  />
                </ImageListItem>
              ))}
            </Grid>
          </Grid>

          <Button
            className="grid-button"
            variant="contained"
            // color="warning"
            onClick={() => setOpen(true)}
            sx={{ marginTop: "50px", marginBottom: "6vh" }}
          >
            Отправить сообщение
          </Button>
        </center>
      )}
    </Grid>
  );
};

const itemData = [
  {
    img: "https://cdn.idropnews.com/wp-content/uploads/2021/12/20105117/New-MacBook-Pro-2021.jpg",
  },
];

export default Contacts;
