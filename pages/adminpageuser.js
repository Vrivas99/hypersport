import React, { useEffect, useState } from "react";
import Link from "next/link";
import LeftAside from "@/components/LeftAside";
import axios from "axios";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/auth/usuarios");
  const repo = await res.json();
  return { props: { repo } };
};

export default function adminpageuser({ repo }) {
  console.log(repo);

  return (
    <div className="bg-gray-900 antialiased h-screen">
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

      <div className="p-4 sm:ml-64 relative overflow-x-auto shadow-md rounded-lg">
        <div className="relative overflow-x-auto sm:rounded-xl">
          <div className="pb-4 bg-gray-900">
            <label htmlFor="table-search" className="sr-only">
              Buscar
            </label>
            <div className="relative mt-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <Link
                href="/agregarusuario"
                className="text-center float-right bg-green-600 align-middle hover:bg-green-900 text-white px-6 py-2 rounded-xl font-sans"
              >
                Ingresar
              </Link>
              <input
                type="text"
                id="table-search"
                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Buscar Usuarios"
              ></input>
            </div>
          </div>

          <div className="relative overflow-x-auto sm:rounded-xl">
            <table className="w-full pl-10 text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="text-white px-4 py-3 text-center">
                    ID
                  </th>
                  <th scope="col" className="text-white px-4 py-3 text-center">
                    CORREO
                  </th>
                  <th scope="col" className="text-white px-4 py-3 text-center">
                    CONTRASEÑA
                  </th>
                  <th scope="col" className="text-white px-4 py-3 text-center">
                    OPCIONES
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* aqui se deberia recorrer la base de datos */}
                {repo.map((rep) => {
                  return (
                    <tr className="border-b bg-gray-900 border-gray-700 hover:bg-gray-700 hover:text-white">
                      <td
                        scope="row"
                        className="px-4 py-2 font-medium text-white text-center"
                      >
                        {rep.ID}
                      </td>
                      <td
                        scope="row"
                        className="px-4 py-2 font-medium text-white text-center"
                      >
                        {rep.CORREO}
                      </td>
                      <td
                        scope="row"
                        className="px-4 py-2 font-medium text-white text-center"
                      >
                        {rep.CONTRASENNA}
                      </td>
                      <td
                        scope="row"
                        className="px-4 py-2 font-medium text-white text-center"
                      >
                        {/* descomentar en caso de querer modificar tambien a el administrador */}
                        {/*<Link href='#' className='cursor-pointer p-1 font-medium text-blue-600 hover:underline'>MODIFICAR</Link>*/}
                        <Link
                          href="#"
                          className="cursor-pointer p-1 font-medium text-red-500 hover:underline"
                        >
                          ELIMINAR
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
