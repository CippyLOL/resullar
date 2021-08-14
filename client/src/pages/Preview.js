import "./Preview.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Preview() {
  const [listOfData, setListOfData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/resumebuilder").then((response) => {
    setListOfData(response.data);
    })
  }, []);
  
  return (
    <div className="Preview">
      {listOfData.map((value, key) => {
        return (
          <div className="userinfo">
            <div className="title">{"Resume"} </div>
            <div className="body"><span>{value.fullname}</span><br/> <span>{value.email}</span><br/><span>{value.phone}</span><br/><span>{value.address}</span></div>
            <div className="footer"></div>
          </div>
        );
      })}
    </div>
  );
}

export default Preview;
