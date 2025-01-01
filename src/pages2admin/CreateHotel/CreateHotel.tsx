import { FormEvent, useState } from "react";
import { hotelInputs } from "./formSorce";

import "./newHotel.scss";

const CreateHotel = () => {
  const [info, setInfo] = useState({});

  const handleChange = (e: { target: HTMLInputElement | HTMLSelectElement }) => {
    const key = e.target.id;
    const val = e.target.value;
    console.log(key, val);
    setInfo((prev) => ({ ...prev, [key]: val }));
  };

  const formSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // prepare and send data
      console.log(info);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="new">
      <div className="newContainer">
        <div className="top">
          <h1>Create New Hotel</h1>
        </div>
        <div className="bottom">
          <div className="left">todo: Left</div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">Image:</label>
                todo: input for files
              </div>

              {hotelInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input id={input.id} onChange={handleChange} type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <div className="formInput">
                <label>Featured</label>
                <select id="featured" onChange={handleChange}>
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
              <div className="selectRooms">
                <label>Rooms</label>
                todo: Rooms Select
              </div>
              <button onClick={formSubmitHandler}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateHotel;
