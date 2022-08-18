import React, { useState } from "react";
import InputField from "./input.js";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    sexo: "",
    comment: "",
  });

  const handlerInputs = (field) => (e) => {
    setDetails({ ...details, [field]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>
          Registrate<br></br> Llenando la información
        </h2>
        {/* ERROR */}
        <InputField
          id="nombre"
          label="Nombre"
          type="text"
          onChange={handlerInputs("name")}
          value={details.name}
        />

        <InputField
          id="correo"
          label="Correo"
          type="email"
          onChange={handlerInputs("email")}
          value={details.email}
        />

        <InputField
          id="password"
          label="Password"
          type="password"
          onChange={handlerInputs("password")}
          value={details.password}
        />

        <InputField
          id="mujer"
          name="sexo"
          label="Mujer"
          type="radio"
          onChange={handlerInputs("sexo")}
          value="mujer"
        />

        <InputField
          id="hombre"
          name="sexo"
          label="Hombre"
          type="radio"
          onChange={handlerInputs("sexo")}
          value="hombre"
        />

        <InputField
          id="comment"
          name="comment"
          label=" Comentario "
          type="textarea"
          onChange={handlerInputs("comment")}
        />

        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
}

export default LoginForm;
