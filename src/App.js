import { useEffect, useState } from "react";
import "./App.css";
import data from "./data/data.json";
import Row from "./components/Row";
import HeadRow from "./components/HeadRow";
function App() {
  const [userData, setUserData] = useState(data);
  const [filterBy, setFilterBy] = useState("unsort");
  const [rowName, setRowName] = useState("");
  console.log(filterBy, rowName)
  // useEffect(() => {
  //   if (filterBy === "asc") {
  //     setUserData(
  //       userData.sort((p1, p2) =>
  //         p1[rowName] < p2[rowName] ? -1 : 1
  //       )
  //     );
  //   } else if (filterBy === "desc") {
  //     setUserData(
  //       userData.sort((p1, p2) =>
  //         p1[rowName] > p2[rowName] ? -1 : 1
  //       )
  //     );
  //   }
  //   else setUserData(data)
  // }, []);
  return (
    <div className="App">
      <h1>User Data</h1>
      <div className="table-data">
        <table>
          <tr>
            {Object.entries(userData[0]).map((head, index) => {
              return <HeadRow head={head} key={index} setRowName={setRowName} setFilterBy={setFilterBy} userData={userData} setUserData={setUserData} />;
            })}
          </tr>
          
          {
            userData.map(entry => {
              return <Row entry={entry}/>
            })
          }
        </table>
      </div>
    </div>
  );
}

export default App;
