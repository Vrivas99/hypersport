import React from "react";
import axios from "axios";
import Link from "next/link";

const Formarioagregarusuario = () => {
  async function handleSubmit() {
    const response = await axios.post("/api/auth/agregar", {
      CORREO: "PRUEBA",
      CONTRASENNA: "PRUEBA",
      IDCAT: "1",
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='w-full max-w-lg"'>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <div className="relative">
              <p className="text-red-500 text-xs italic absolute -left-2 -top-1">
                *
              </p>
              <label
                className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                htmlFor="grid-correo"
              >
                Correo
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-correo"
                placeholder="user@gmail.com"
                type="email"
                required
              ></input>
            </div>
          </div>

          <div className="w-full px-3">
            <div className="relative">
              <p className="text-red-500 text-xs italic absolute -left-2 -top-1">
                *
              </p>
              <label
                className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Contraseña
              </label>
              <input
                autoComplete="off"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                placeholder="Ingrese Contraseña"
                type="password"
                required
              ></input>
            </div>
          </div>

          <div className="w-full px-3">
            <div className="relative">
              <p className="text-red-500 text-xs italic absolute -left-2 -top-1">
                *
              </p>
              <label
                className="block uppercase tracking-wide text-gray-400 text-xs font-bold mb-2"
                htmlFor="grid-passwo-rd"
              >
                Confirmar Contraseña
              </label>
              <input
                autoComplete="off"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password2"
                placeholder="Repita Su Contraseña"
                type="password"
                required
              ></input>
            </div>
          </div>
        </div>
        <div className="items-center">
          <Link
            href="/adminpageuser"
            className="mt-10 mr-3 flex float-left justify-center cursor-pointer bg-red-600 hover:bg-red-900 text-white px-6 py-2 rounded-md font-sans"
          >
            Volver
          </Link>
          <button
            className="mt-10 ml3 flex float-right justify-center cursor-pointer bg-green-600 hover:bg-green-900 text-white px-6 py-2 rounded-md font-sans"
            type="submit"
          >
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formarioagregarusuario;
