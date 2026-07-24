import { useState } from "react";
 
import { authService } from "./services/auth.js";
// import { tokenStore } from "./tokenStore.js";
import { tokenStore } from "./services/tokenStore.js";

function ManualForm() {
  const [mode, setMode] = useState("login"); // "login" | "register"
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [profile, setProfile] = useState(tokenStore.getUser());

  function set(field) {
    return (e) => setValues((v) => ({ ...v, [field]: e.target.value }));
  }

  function validate() {
    const errs = {};
    if (mode === "register" && !values.name.trim()) {
      errs.name = "Name is required";
    }
    if (!values.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      errs.email = "Enter a valid email";
    }
    if (!values.password) {
      errs.password = "Password is required";
    } else if (values.password.length < 6) {
      errs.password = "Password must be at least 6 characters";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setServerError("");
    if (!validate()) return;

    setSubmitting(true);
    try {
      const data =
        mode === "register"
          ? await authService.register(values)
          : await authService.login(values);
      setProfile(data.user);
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Something went wrong. Please try again.";
      setServerError(message);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleLogout() {
    await authService.logout();
    setProfile(null);
    setValues({ name: "", email: "", password: "" });
  }

  async function handleRefreshProfile() {
    try {
      const user = await authService.getProfile();
      setProfile(user);
    } catch {
      setServerError("Could not load profile — please log in again.");
    }
  }

  // Logged-in view
  if (profile) {
    return (
      <div style={{ maxWidth: 360, margin: "0 auto", textAlign: "left" }}>
        <h2>Welcome, {profile.name}</h2>
        <p>Email: {profile.email}</p>
        <button onClick={handleRefreshProfile}>Refresh profile</button>{" "}
        <button onClick={handleLogout}>Log out</button>
      </div>
    );
  }

  // Login / register form
  return (
    <div style={{ maxWidth: 360, margin: "0 auto", textAlign: "left" }}>
      <div style={{ marginBottom: 16 }}>
        <button
          type="button"
          onClick={() => setMode("login")}
          disabled={mode === "login"}
        >
          Login
        </button>{" "}
        <button
          type="button"
          onClick={() => setMode("register")}
          disabled={mode === "register"}
        >
          Register
        </button>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {mode === "register" && (
          <div style={{ marginBottom: 12 }}>
            <label>
              Name
              <br />
              <input
                type="text"
                value={values.name}
                onChange={set("name")}
              />
            </label>
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          </div>
        )}

        <div style={{ marginBottom: 12 }}>
          <label>
            Email
            <br />
            <input
              type="email"
              value={values.email}
              onChange={set("email")}
            />
          </label>
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>
            Password
            <br />
            <input
              type="password"
              value={values.password}
              onChange={set("password")}
            />
          </label>
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password}</p>
          )}
        </div>

        {serverError && <p style={{ color: "red" }}>{serverError}</p>}

        <button type="submit" disabled={submitting}>
          {submitting
            ? "Please wait..."
            : mode === "register"
            ? "Create account"
            : "Log in"}
        </button>
      </form>
    </div>
  );
}

export default ManualForm;