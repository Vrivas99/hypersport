import React from "react";
import Link from "next/link";
import LeftAside from "@/components/LeftAside";
import Formarioagregarusuario from "@/components/Formarioagregarusuario";
import axios from "axios";

export default function agregarusuario() {
  async function handleSubmit() {
    try {
      const response = await axios.post("/api/auth/agregar", {
        CORREO: "PRUEBA",
        CONTRASENNA: "PRUEBA",
        IDCAT: "1",
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-gray-900 antialiased h-screen ">
      <button
        data-drawer-target="sidebar-multi-level-sidebar"
        data-drawer-toggle="sidebar-multi-level-sidebar"
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <LeftAside />

      <div className="p-4 sm:ml-64 h-screen flex flex-col justify-center items-center">
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
      </div>
    </div>
  );
}
