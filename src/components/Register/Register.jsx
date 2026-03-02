import { useState } from "react";
import { registerStudent, registerInstructor } from "../../services/authService";
import { useNavigate, Link } from "react-router-dom";
import "../../styles/auth.css";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "Student"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      if (form.role === "Student") {
        await registerStudent(form);
      } else {
        await registerInstructor(form);
      }

      alert("Registered successfully");
      navigate("/login");

    } catch {
      alert("Registration failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2>Register</h2>

        <form onSubmit={handleSubmit}>

          <input
            placeholder="First Name"
            required
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          />

          <input
            placeholder="Last Name"
            required
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />

          <select
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="Student">Student</option>
            <option value="Instructor">Instructor</option>
          </select>

          <button type="submit">
            Register
          </button>

        </form>

        <div className="auth-link">
          Already have an account? <Link to="/login">Login</Link>
        </div>

      </div>
    </div>
  );
}

export default Register;