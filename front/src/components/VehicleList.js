import React, { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";
import Logout from "./logout";
import "./Vehicle.css"; 

export default function VehicleList() {
  const [vehicles, setVehicles] = useState([]);
  const [typeFilter, setTypeFilter] = useState("");
  const [availFilter, setAvailFilter] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchVehicles = async () => {
    setLoading(true);
    setError("");
    try {
      const params = {};
      if (typeFilter) params.type = typeFilter;
      if (availFilter) params.available = availFilter;
      if (search) params.search = search;

      const res = await API.get("vehicles/", { params });
      setVehicles(res.data);
      if (res.data.length === 0) setError("No vehicles found.");
    } catch (err) {
      console.error(err);
      setError("Unable to fetch vehicles. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicles();
    // eslint-disable-next-line
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this vehicle?")) return;
    try {
      await API.delete(`vehicles/${id}/`);
      setVehicles((prev) => prev.filter((v) => v.id !== id));
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  return (
    <div className="container">
      <h2>Vehicle Inventory</h2>
      <div className="controls">
        <Logout />

        <label>
          Type:
          <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
            <option value="">All</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
            <option value="Hatchback">Hatchback</option>
          </select>
        </label>

        <label>
          Availability:
          <select value={availFilter} onChange={(e) => setAvailFilter(e.target.value)}>
            <option value="">All</option>
            <option value="true">Available</option>
            <option value="false">Not Available</option>
          </select>
        </label>

        <input
          placeholder="Search model"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={fetchVehicles}>Apply</button>
        <Link to="/vehicles/new">
          <button>Add Vehicle</button>
        </Link>
      </div>

      {loading ? (
        <div className="loading">Loading vehicles...</div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Vehicle ID</th>
                <th>Model</th>
                <th>Type</th>
                <th>Reg. No</th>
                <th>Daily Rate</th>
                <th>Available</th>
                <th>Fuel</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {vehicles.map((v) => (
                <tr key={v.id}>
                  <td>{v.vehicle_id}</td>
                  <td>{v.model}</td>
                  <td>{v.type}</td>
                  <td>{v.registration_number}</td>
                  <td>{v.daily_rate}</td>
                  <td>{v.available ? "Yes" : "No"}</td>
                  <td>{v.fuel_type}</td>
                  <td>
                    <Link to={`/vehicles/edit/${v.id}`} className="edit-btn">Edit</Link>
                    <button onClick={() => handleDelete(v.id)} className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
