import React, { useState } from "react";
import InputField from "./InputField";

function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
    sexo: "",
    comment: "",
  });

  //reads and updates the text typed by user
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

        <div>
          <label htmlFor="sexo">Sexo</label>
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
        </div>

        <InputField
          id="comment"
          name="comment"
          label=" Comentario "
          type="textarea"
          onChange={handlerInputs("comment")}
          value={details.comment}
        />

        <input type="submit" value="LOGIN" />
      </div>
    </form>
  );
}

export default LoginForm;
