import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import UploadImage from "../helpers/UploadImage";

const SEATS = [
  "2 personas",
  "4 personas",
  "5 personas",
  "7 personas",
  "9 personas",
];
const DOORS = ["3 puertas", "5 puertas", "7 puertas"];
const TRANSMISSION = ["Manual", "Automatico"];
const AIRCON = ["Con aire acond.", "Sin aire acond."];
const TRUNK = ["1 maleta", "2 maletas", "3 maletas"];
const CONSUMPTION = ["Bajo", "Alto"];

const CarPage = () => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [location, setLocation] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [seats, setSeats] = useState("");
  const [doors, setDoors] = useState("");
  const [transmission, setTransmission] = useState("");
  const [aircon, setAircon] = useState("");
  const [trunk, setTrunk] = useState("");
  const [consumption, setConsumption] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [price, setPrice] = useState("");

  const { action } = useParams();

  return (
    <div>
      {action !== "new" && (
        <div className="text-center">
          <Link
            to="/acc/cars/new"
            className="inline-flex bg-primary text-white py-2 px-6 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
            Add New
          </Link>
        </div>
      )}
      {action === "new" && (
        <div>
          <form>
            <div className="mb-2">
              {" "}
              <label className="text-gray-800 text-lg" htmlFor="brand">
                Marca
              </label>
              <input
                type="text"
                id="brand"
                placeholder="Marca del coche"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>
            <div className="mb-2">
              {" "}
              <label className="text-gray-800 text-lg" htmlFor="model">
                Modelo
              </label>
              <input
                type="text"
                id="model"
                placeholder="Modelo del coche"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label className="text-gray-800 text-lg" htmlFor="location">
                Lugar
              </label>
              <input
                type="text"
                id="location"
                placeholder="Lugar donde se encuentra el coche"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <UploadImage addedPhotos={addedPhotos} onChange={setAddedPhotos} />
            <div className="mb-2">
              {" "}
              <label className="text-gray-800 text-lg" htmlFor="description">
                Descripción
              </label>
              <textarea
                type="text"
                id="description"
                placeholder="Descripción del coche: años, km, etc."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label htmlFor="price" className="text-gray-800 text-lg">
                Precio por día
              </label>
              <input
                type="text"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="grid gap-2 grid-cols-2 md:grid-cols-8">
              <label htmlFor="check-in" className="mt-3 text-gray-800 text-lg">
                Check in time
              </label>
              <input
                type="text"
                id="check-in"
                placeholder="Check in"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
              <label htmlFor="check-out" className="mt-3 text-gray-800 text-lg">
                Check out time
              </label>
              <input
                type="text"
                id="check-out"
                placeholder="Check out"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <div>
                <div className="mb-2">
                  {" "}
                  <label className="text-gray-800 text-lg" htmlFor="seats">
                    Plazas
                  </label>{" "}
                  <select
                    id="seats"
                    className="border-2 p-2 mt-2 ml-2 placeholder-gray-400 rounded-lg"
                    value={seats}
                    onChange={(e) => setSeats(e.target.value)}
                  >
                    <option value="">Elige entre 2, 4, 5, 7 o 9 plazas</option>
                    {SEATS.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-2">
                  {" "}
                  <label className="text-gray-800 text-lg" htmlFor="doors">
                    {" "}
                    Nº de puertas
                  </label>{" "}
                  <select
                    id="doors"
                    className="border-2 p-2 mt-2 ml-2 placeholder-gray-400 rounded-lg"
                    value={doors}
                    onChange={(e) => setDoors(e.target.value)}
                  >
                    <option value="">Elige entre 3, 5 o 7 puertas</option>
                    {DOORS.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-2">
                  {" "}
                  <label className="text-gray-800 text-lg" htmlFor="trunk">
                    {" "}
                    Capacidad del maletero
                  </label>{" "}
                  <select
                    id="trunk"
                    className="border-2 p-2 mt-2 ml-2 placeholder-gray-400 rounded-lg"
                    value={trunk}
                    onChange={(e) => setTrunk(e.target.value)}
                  >
                    <option value="">Elige entre 1, 2 o 3 maletas</option>
                    {TRUNK.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-2">
                  {" "}
                  <label
                    className="text-gray-800 text-lg"
                    htmlFor="transmission"
                  >
                    Transmisión
                  </label>{" "}
                  <select
                    id="transmission"
                    className="border-2 p-2 mt-2 ml-2 placeholder-gray-400 rounded-lg"
                    value={transmission}
                    onChange={(e) => setTransmission(e.target.value)}
                  >
                    <option>Elige entre manual o automático</option>
                    {TRANSMISSION.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-2">
                  <label className="text-gray-800 text-lg" htmlFor="aircon">
                    {" "}
                    Aire acondicionado
                  </label>{" "}
                  <select
                    id="aircon"
                    className="border-2 p-2 mt-2 ml-2 placeholder-gray-400 rounded-lg"
                    value={aircon}
                    onChange={(e) => setAircon(e.target.value)}
                  >
                    <option value="">Elige con o sin aire </option>
                    {AIRCON.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-2">
                  {" "}
                  <label
                    className="text-gray-800 text-lg"
                    htmlFor="consumption"
                  >
                    Consumo
                  </label>{" "}
                  <select
                    id="consumption"
                    className="border-2 p-2 mt-2 ml-2 placeholder-gray-400 rounded-lg"
                    value={consumption}
                    onChange={(e) => setConsumption(e.target.value)}
                  >
                    <option value="">Elige entre alto o bajo consumo</option>
                    {CONSUMPTION.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <button className="primary w-4 my-8">Save</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CarPage;
