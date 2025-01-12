import { FormEvent, useState } from "react";

import { createHotel } from "@/api/api";
import noImage from "/no_image.png";
import folderImage from "/folder-arrow.png";

import { hotelInputs } from "./formSorce";
import "./newHotel.scss";
import { ICloudinaryCreateResponse } from "@/interfaces/service.interface";

// todo: to CONST / ENV
const CLOUD_API = "https://api.cloudinary.com/v1_1/";
const CLOUD_NAME = "abr";
const CLOUD_PRESET = "booking";

const CreateHotel = () => {
  const [info, setInfo] = useState({});
  const [files, setFiles] = useState<FileList | null>(null);

  const handleChange = (e: { target: HTMLInputElement | HTMLSelectElement }) => {
    const key = e.target.id;
    const val = e.target.value;
    console.log(key, val);
    setInfo((prev) => ({ ...prev, [key]: val }));
  };

  const formSubmitHandler = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // upload files
      let photos = null;
      if (files) {
        photos = await Promise.all(
          Object.values(files).map(async (file) => {
            const body = new FormData();
            body.append("file", file);
            body.append("upload_preset", CLOUD_PRESET);
            const uploadRes = await fetch(`${CLOUD_API}${CLOUD_NAME}/image/upload`, { method: "POST", body });
            const typedRes: ICloudinaryCreateResponse = await uploadRes.json();

            return typedRes.url;
          }),
        );
      } else {
        console.log("Photos not selected!");
      }
      // prepare and send data
      console.log("will create hotel: ", info, photos);
      const payload = { ...info, photos };
      await createHotel(payload).then((res) => console.log(res));
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
          <div className="left">
            <img src={files ? URL.createObjectURL(files[0] as Blob) : noImage} alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file" className="pointer">
                  Image(s)
                  <img src={folderImage} alt="Add photos" width={80} height={80} />
                </label>
                <input
                  type="file"
                  id="file"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                  style={{ display: "none" }}
                />
              </div>

              {hotelInputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input id={input.id} onChange={handleChange} type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              {/* todo: Description to Textarea! */}
              <div className="formInput">
                <label>Featured</label>
                <select id="featured" onChange={handleChange}>
                  <option value={0}>No</option>
                  <option value={1}>Yes</option>
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
