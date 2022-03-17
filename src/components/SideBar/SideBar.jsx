import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useProducts } from "../../contexts/ProductContext";
import "./SideBar.css";

const SideBar = () => {
  const { fetchByParams } = useProducts();
  return (
    <Grid>
      <Paper>
        <FormControl>
          <RadioGroup
            className="side-bar"
            onChange={(e) => fetchByParams("type", e.target.value)}
          >
            <h5 className="choose-type">TYPE</h5>
            <FormControlLabel value="HP" control={<Radio />} label="HP" />
            <FormControlLabel
              value="LENOVO"
              control={<Radio />}
              label="LENOVO"
            />
            <FormControlLabel value="ASUS" control={<Radio />} label="ASUS" />
            <FormControlLabel value="APPLE" control={<Radio />} label="APPLE" />

            <FormControlLabel value="all" control={<Radio />} label="ALL" />
          </RadioGroup>
        </FormControl>
      </Paper>
    </Grid>
  );
};

export default SideBar;
