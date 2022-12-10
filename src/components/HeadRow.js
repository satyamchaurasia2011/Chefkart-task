import React, { useEffect, useState } from "react";
import data from "../data/data.json";
export default function HeadRow({
  head,
  setRowName,
  setFilterBy,
  userData,
  setUserData,
}) {
  const [isVisibile, setIsVisible] = useState(false);
  //   const [filterBy, setFilterBy] = useState("unsort");
  //   useEffect(() => {
  //     if (filterBy === "asc") {
  //       setUserData(
  //         userData.sort((p1, p2) =>
  //           p1[head[0]] < p2[head[0]] ? 1 : p1[head[0]] > p2[head[0]] ? -1 : 0
  //         )
  //       );
  //     } else if (filterBy === "desc") {
  //       setUserData(
  //         userData.sort((p1, p2) =>
  //           p1[head[0]] > p2[head[0]] ? 1 : p1[head[0]] < p2[head[0]] ? -1 : 0
  //         )
  //       );
  //     }
  //   }, [filterBy]);
  // console.log(userData);
  return (
    <th>
      <h5>{head[0]}</h5>
      <span
        onClick={() => {
          setIsVisible((prev) => !prev);
          setRowName(head[0]);
        }}
        class="material-symbols-outlined"
      >
        more_vert
      </span>
      <div
        className="filter"
        style={{ display: isVisibile ? "block" : "none" }}
      >
        <p
          onClick={() => {
            setFilterBy("unsort");
            setUserData(userData.sort((p1, p2) => (p1.id < p2.id ? -1 : 1)));
            setIsVisible((prev) => !prev);
          }}
        >
          Unsort
        </p>
        <p
          onClick={() => {
            setFilterBy("asc");
            setUserData(
              userData.sort((p1, p2) => (p1[head[0]] < p2[head[0]] ? -1 : 1))
            );
            setIsVisible((prev) => !prev);
          }}
        >
          Sort by ASC
        </p>
        <p
          onClick={() => {
            setFilterBy("desc");
            setIsVisible((prev) => !prev);
            setUserData(
              userData.sort((p1, p2) => (p1[head[0]] > p2[head[0]] ? -1 : 1))
            );
          }}
        >
          Sort by DESC
        </p>
      </div>
    </th>
  );
}
