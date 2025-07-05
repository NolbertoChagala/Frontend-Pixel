import React, { useEffect, useState } from "react";
import { fetchUsers, fetchLeads, updateLeadStatus } from "../services/dashboardService";
import "../styles/Dashboard.css";
import DashboardNavbar from "../components/DashboardNavbar";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [leads, setLeads] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingLeads, setLoadingLeads] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then((res) => {
        console.log("Leads:", res.data);
        setUsers(res.data);
        setLoadingUsers(false);
      })
      .catch(() => {
        setError("Error al cargar usuarios");
        setLoadingUsers(false);
      });

    fetchLeads()
      .then((res) => {
        setLeads(res.data);
        setLoadingLeads(false);
      })
      .catch(() => {
        setError("Error al cargar leads");
        setLoadingLeads(false);
      });
  }, []);

  if (loadingUsers || loadingLeads)
    return <p style={{ textAlign: "center" }}>Cargando datos...</p>;
  if (error)
    return <p style={{ textAlign: "center", color: "red" }}>{error}</p>;

  return (
    <>
      <DashboardNavbar />
      <div className="dashboard-container">
        <h1>Dashboard CRM</h1>

        <section className="dashboard-section">
          <h2>Usuarios</h2>
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="dashboard-section">
          <h2>Leads / Contactos</h2>
          <table className="dashboard-table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Mensaje</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id}>
                  <td>{lead.Nombre_Completo || "No disponible"}</td>
                  <td>{lead.Correo_Electronico}</td>
                  <td>{lead.Telefono}</td>
                  <td>{lead.Mensaje}</td>
                  <td>
                    <select
                      value={lead.status}
                      onChange={async (e) => {
                        const newStatus = e.target.value;
                        try {
                          await updateLeadStatus(lead.id, newStatus);
                          // Actualizamos el estado en el frontend sin recargar todo
                          setLeads((prevLeads) =>
                            prevLeads.map((l) =>
                              l.id === lead.id ? { ...l, status: newStatus } : l
                            )
                          );
                        } catch (err) {
                          alert("Error al actualizar el estado");
                          console.error(err);
                        }
                      }}
                    >
                      <option value="pendiente">Pendiente</option>
                      <option value="en_proceso">En proceso</option>
                      <option value="Atendido">Atendido</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
