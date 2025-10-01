import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../services/api";
import "./Vehicle.css";

export default function VehicleForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [vehicle, setVehicle] = useState({
    vehicle_id: "",
    model: "",
    type: "",
    registration_number: "",
    daily_rate: "",
    available: true,
    fuel_type: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id) {
      API.get(`vehicles/${id}/`)
        .then((res) => setVehicle(res.data))
        .catch(() => alert("Failed to fetch vehicle data"));
    }
  }, [id]);

  const validate = () => {
    const newErrors = {};
    if (!vehicle.vehicle_id) newErrors.vehicle_id = "Vehicle ID is required";
    if (!vehicle.model) newErrors.model = "Model is required";
    if (!vehicle.type) newErrors.type = "Type is required";
    if (!vehicle.registration_number) newErrors.registration_number = "Registration Number is required";
    if (!vehicle.daily_rate || isNaN(vehicle.daily_rate) || vehicle.daily_rate <= 0)
      newErrors.daily_rate = "Daily Rate must be a number greater than 0";
    if (!vehicle.fuel_type) newErrors.fuel_type = "Fuel Type is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleChange = (e) => {
  const { name, value, type: inputType, checked } = e.target;
  setVehicle((prev) => ({
    ...prev,
    [name]: inputType === "checkbox" ? checked 
             : name === "daily_rate" ? Number(value) 
             : value,
  }));
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      if (id) {
        await API.put(`vehicles/${id}/`, vehicle);
        alert("Vehicle updated successfully");
      } else {
        await API.post("vehicles/", vehicle);
        alert("Vehicle added successfully");
      }
      navigate("/vehicles");
    } catch (err) {
      alert("Error saving vehicle");
    }
  };

  return (
    <div className="form-container">
      <h2>{id ? "Edit Vehicle" : "Add Vehicle"}</h2>
      <form onSubmit={handleSubmit}>
        {["vehicle_id", "model", "type", "registration_number", "daily_rate", "fuel_type"].map((field) => (
          <div key={field} className="form-group">
            <label>{field.replace("_", " ").toUpperCase()}:</label>
            <input
              type={field === "daily_rate" ? "number" : "text"}
              name={field}
              value={vehicle[field]}
              onChange={handleChange}
            />
            {errors[field] && <span className="error">{errors[field]}</span>}
          </div>
        ))}

        <div className="form-group">
          <label>
            Available:
            <input
              type="checkbox"
              name="available"
              checked={vehicle.available}
              onChange={handleChange}
              style={{ marginLeft: 6 }}
            />
          </label>
        </div>

        <button type="submit">{id ? "Update Vehicle" : "Add Vehicle"}</button>
      </form>
    </div>
  );
}
