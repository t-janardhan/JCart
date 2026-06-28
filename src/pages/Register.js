import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const password = watch("password");

  const onSubmit = (data) => {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find((u) => u.email === data.email);
    if (existingUser) {
      alert("User already exists");
      return;
    }

    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registered successfully");
    navigate("/");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "350px" }}>
        <h3 className="text-center mb-3">Register</h3>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-2">
            <input
              className="form-control"
              placeholder="Username"
              {...register("username", { required: "Username required" })}
            />
            <small className="text-danger">{errors.username?.message}</small>
          </div>

          <div className="mb-2">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              {...register("email", { required: "Email required" })}
            />
            <small className="text-danger">{errors.email?.message}</small>
          </div>

          <div className="mb-2">
            <input
              className="form-control"
              placeholder="Phone"
              {...register("phone", { required: "Phone required" })}
            />
            <small className="text-danger">{errors.phone?.message}</small>
          </div>

          <div className="mb-2">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              {...register("password", { required: "Password required" })}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            <small className="text-danger">
              {errors.confirmPassword?.message}
            </small>
          </div>

          <button className="btn btn-success w-100">Register</button>

          <p className="mt-3 text-center">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}