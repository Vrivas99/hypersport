import Link from "next/link";
import React, { useRef } from "react";

import axios from "axios";

import { useRouter } from "next/router";
import { Button } from "reactstrap";

const adminLog = () => {
  const router = useRouter();
  const emailInput = useRef();
  const passwordInput = useRef();
  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/auth/login", {
        email: emailInput.current.value,
        cont: passwordInput.current.value,
      });
      console.log(response);
      router.push("/adminPage");
    } catch (error) {
      console.log(`Aqui : ${error}`);
      router.push("/adminLog");
    }
  };

  return (
    <div className="bg-gray-900 h-screen flex justify-center">
      <div className="flex w-[30%] justify-center items-center">
        <form
          onSubmit={handleSumbit}
          className="w-[100%] bg-gray-800 p-10 rounded-md"
        >
          <div className="flex justify-center m-3">
            <h1 className="font-bold text-white text-2xl">Admin Login</h1>
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Usuario
            </label>
            <input
              ref={emailInput}
              autoComplete="off"
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Correo@admin.cl"
              required
            ></input>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Contraseña
            </label>
            <input
              ref={passwordInput}
              autoComplete="off"
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            ></input>
          </div>
          <div className="flex justify-center">
            <Button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Ingresar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default adminLog;
