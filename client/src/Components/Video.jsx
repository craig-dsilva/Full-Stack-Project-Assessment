import React, { useContext } from "react";

import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

import Rating from "./Rating";

import Context from "../Context/Context";

const Video = ({ data }) => {
  const ctx = useContext(Context);

  return (
    <div>
      <h2>{data.title}</h2>
      <iframe
        title={data.title}
        width="420"
        height="315"
        src={data.url}
      ></iframe>
      <Rating rating={data.rating} />
      <Button
        variant="contained"
        color="error"
        startIcon={<DeleteIcon />}
        onClick={() => ctx.deleteVideo(data)}
      >
        Delete
      </Button>
    </div>
  );
};

export default Video;
