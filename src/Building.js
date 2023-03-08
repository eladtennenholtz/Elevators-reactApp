import React from "react";

import "./Building.css";
import Floor from "./Floor";
import Button from "./Button";
import Elevator from "./Elevator";
function Building() {
  const floors = [
    "9th",
    "8th",
    "7th",
    "6th",
    "5th",
    "4th",
    "3rd",
    "2nd",
    "1st",
    "Ground Floor",
  ];
  const matrix = [];
  for (let i = 0; i < 7; i++) {
    matrix[i] = new Array(10);
  }

  return (
    <div>
      <p className="elevator-title">Elevator Exercise</p>
      <div>
        <div className="container">
          <table>
            <tbody>
              {[...Array(10)].map((_, rowIndex) => (
                <tr key={rowIndex}>
                  <td>
                    <Floor floor={floors[rowIndex]} />
                  </td>
                  {[...Array(5)].map((_, colIndex) => (
                    <td className="col" key={colIndex}></td>
                  ))}
                  <td>
                    <Button label="Call" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Building;
