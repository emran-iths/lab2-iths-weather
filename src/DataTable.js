import { useEffect, useState, useContext, useReducer, useMemo } from "react";
import axios from "axios";
import LongLatContext from "./LongLatContext";
import styled from "styled-components";

const pageSize = 10;

const filterData = (paginator, data) => {
  return data.filter((a, b) => {
    return (
      b >= paginator["page"] * pageSize &&
      b < (paginator["page"] + 1) * pageSize
    );
  });
};

const Button = styled.button`
  border-radius: 4px;
  background-image: linear-gradient(#ccddff, #9999dd);
  border: 0;
  margin: 8px;
  padding: 6px;
  font-weight: bold;
`;

export function DataTable(props) {
  let dataType = props.dataType;

  // -- hooks
  const [data, setData] = useState([]);
  const longLatState = useContext(LongLatContext);
  const [longLat, setLongLat] = longLatState;
  const [paginator, paginatorDispatcher] = useReducer(
    (state, action) => {
      if (action == "next") return { page: state["page"] + 1 };
      if (action == "previous") return { page: Math.max(state["page"] - 1, 0) };
    },
    { page: 0 },
  );
  const pageData = useMemo(
    () => filterData(paginator, data),
    [paginator.page, JSON.stringify(data)],
  );
  //[paginator.page,longLat]); <-- better?
  // --

  useEffect(() => {
    if (!longLat) return;
    let base = "https://api.open-meteo.com";
    //let base = 'http://localhost:5000'; // <-- test server

    let url = `${base}/v1/forecast?latitude=${longLat[1]}&longitude=${longLat[0]}&past_days=0&hourly=${dataType}`;

    axios({ method: "get", url: url }).then((r) => {
      // --- reformat data structure
      let a = r.data["hourly"]["time"];
      let b = r.data["hourly"][dataType];
      let c = a.map(function (e, i) {
        return [e, b[i]];
      });
      // ---
      setData(c);
    });
  }, [longLat]);

  return (
    <>
      {!longLat && (
        <>
          <i>
            Press map to set long and lat, you need to do that before can view
            any data{" "}
          </i>
          <br />
        </>
      )}
      {paginator["page"]}
      <Button
        onClick={(e) => {
          paginatorDispatcher("previous");
        }}
      >
        previous
      </Button>
      <Button
        onClick={(e) => {
          paginatorDispatcher("next");
        }}
      >
        next
      </Button>
      <table border="1">
        {pageData.map((d) => (
          <tr>
            <td>{d[0]}</td>
            <td>{d[1]}</td>
          </tr>
        ))}
      </table>
    </>
  );
}
