import { useState, useEffect, useRef } from "react";
import getAllStarships from "./services/sw_api";
import "./App.css";

import Grid from "./components/Grid/Grid";



export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {

    async function fetchData(params) {

      const x = await getAllStarships()
      setData(x)
    } fetchData()
  }, []);

  return (
    <>
      <h1
        style={{
          width: "100%",
          textAlign: "center",
          marginBottom: "50px",
          backgroundColor: "rgba(64, 5, 243, 0.99)",
        }}
      >
        Starships
      </h1>
      <Grid content={data}></Grid>
    </>
  );
}
