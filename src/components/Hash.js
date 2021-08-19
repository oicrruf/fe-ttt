import React from "react";
import { FaRegTimesCircle, FaRegCircle } from "react-icons/fa";

const selectRegion = (id) => {
  console.log(id);
};

const iconStyle = { color: "white" }

const Hash = () => {
  return (
    <div className="bg">
        <div className="region" id="region-1"> 
          <button onClick={() => selectRegion(1)}>
                <FaRegTimesCircle style={iconStyle} size="50" />
          </button> 
        </div>
        <div className="region"> 
          <button onClick={() => selectRegion(2)}>
                <FaRegCircle style={iconStyle} size="50" />
          </button> 
        </div>
        <div className="region" id="region-3"> 
          <button onClick={() => selectRegion(3)}>
                <FaRegTimesCircle style={iconStyle} size="50" />
          </button> 
        </div>
        <div className="region"> 
          <button onClick={() => selectRegion(4)}>
                <FaRegCircle style={iconStyle} size="50" />
          </button> 
        </div>
        <div className="region"> 
          <button onClick={() => selectRegion(5)}>
                <FaRegTimesCircle style={iconStyle} size="50" />
          </button> 
        </div>
        <div className="region"> 
          <button onClick={() => selectRegion(6)}>
                <FaRegCircle style={iconStyle} size="50" />
          </button> 
        </div>
        <div className="region" id="region-7"> 
          <button onClick={() => selectRegion(7)}>
                <FaRegTimesCircle style={iconStyle} size="50" />
          </button> 
        </div>
        <div className="region"> 
          <button onClick={() => selectRegion(8)}>
                <FaRegCircle style={iconStyle} size="50" />
          </button> 
        </div>
        <div className="region" id="region-9"> 
          <button onClick={() => selectRegion(9)}>
                <FaRegTimesCircle style={iconStyle} size="50" />
          </button> 
        </div>
    </div>
    );
    {/* <div>
      <table id="all-regions">
        <tbody> 
          <tr>
            <td id="region-1" className="region">
              <button onClick={() => selectRegion(1)}>
                <FaRegTimesCircle size="50" />
              </button>
            </td>
            <td id="region-2" className="region"> 
              <button onClick={() => selectRegion(2)}>
                <FaRegCircle size="50" />
              </button>
            </td>
            <td id="region-3" className="region">
              <button onClick={() => selectRegion(3)}>
                <FaRegTimesCircle size="50" />
              </button>
            </td>
          </tr>
          <tr>
            <td id="region-4" className="region">
              <button onClick={() => selectRegion(4)}>
                <FaRegCircle size="50" />
              </button>
            </td>
            <td id="region-5" className="region">
              <button onClick={() => selectRegion(5)}>
                <FaRegTimesCircle size="50" />
              </button>
            </td>
            <td id="region-6" className="region">
              <button onClick={() => selectRegion(6)}>
                <FaRegCircle size="50" />
              </button>
            </td>
          </tr>
          <tr>
            <td id="region-7" className="region">
              <button onClick={() => selectRegion(7)}>
                <FaRegCircle size="50" />
              </button>
            </td>
            <td id="region-8" className="region">
              <button onClick={() => selectRegion(8)}>
                <FaRegCircle size="50" />
              </button>
            </td>
            <td id="region-9" className="region">
              <button onClick={() => selectRegion(9)}>
                <FaRegTimesCircle size="50" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div> */}
};

export { Hash };
