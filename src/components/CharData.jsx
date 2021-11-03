import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { EachChar } from "./EachChar";

export const CharData = ({ isPending, char }) => {
  return isPending ? (
    <Box className="loader">
      <CircularProgress />
    </Box>
  ) : (
    <section className="box">
      {char.map((eachChar) => (
        <EachChar key={eachChar.char_id} Character={eachChar}></EachChar>
      ))}
    </section>
  );
};
