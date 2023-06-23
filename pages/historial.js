import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { getPagos, getPagitos } from "@/services/itemService";
import axios from "axios";

export default function historial() {
  const [user, setUser] = useState();// Estado para almacenar el usuario logeado
  const [pagos, setPagos] = useState([]);// Estado para almacenar los pagos
  const [detalle, setPagitos] = useState([]);// Estado para almacenar los detalles de los pagos
  const [expandedRows, setExpandedRows] = useState([]);// Estado para almacenar las filas expandidas

  const handleRowClick = (index) => {// Función para manejar el click en una fila
    const updatedRows = [...expandedRows];
    const rowIndex = updatedRows.indexOf(index);
    if (rowIndex !== -1) {// Si la fila está expandida, la eliminamos del array
      updatedRows.splice(rowIndex, 1);
    } else {// Si no está expandida, la agregamos al array
      updatedRows.push(index);
    }
    setExpandedRows(updatedRows);// Actualizamos el estado
  };
  const isRowExpanded = (index) => expandedRows.includes(index);// Función para determinar si una fila está expandida

  //Metodo para recuperar el usuario logeado
  const getProfile = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/profile");
      console.log("logeado como:" + response.data.user);
      setUser(response.data.user);
    } catch (error) {
      console.log(error);
      setUser("");
    }
  }
  //Metodo para recuperar los pagos y detalles de la bd
  useEffect(() => {
    const fetchData = async () => {
      const pagosData = await getPagos();
      const pagitosData = await getPagitos();
      setPagos(pagosData);
      setPagitos(pagitosData);
    };
    fetchData();
    //Metodo para recuperar el usuario logeado
    getProfile();
  }, []);

  //Filtro para mostrar solo los pagos del usuario logeado
  const filtroPago = pagos.filter(pago => pago.usu === user)



  return (

    <div>
      <div>
        <Navbar />
      </div>
      <div className="m-10 overflow-x-auto rounded-t-lg">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-gray-800 uppercase bg-black">
            <tr>
              <th scope="col" className="text-white md:w-[30%]  py-4 text-center">
                ORDEN DE COMPRA
              </th>
              <th scope="col" className="text-white md:w-[30%] overflow-x-auto  py-4 text-center">
                PRECIO
              </th>
              <th scope="col" className="text-white md:w-[30%]  py-4 text-center">
                FECHA DE COMPRA
              </th>
              <th scope="col" className="text-white md:w-[10%]  py-4 text-center">
                Detalles
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Filas principales */}
            {filtroPago &&
              filtroPago.map((pago, index) => (
                <React.Fragment key={index}>
                  <tr className="border bg-white border-gray-700 hover:bg-gray-200 hover:text-white">
                    <td
                      scope="row"
                      className="md:w-[30%]  py-1 font-medium text-black text-center"
                    >
                      {pago.buyOrder}
                    </td>
                    <td
                      scope="row"
                      className="text-center md:w-[30%] overflow-x-auto  py-1 font-medium text-black"
                    >
                      ${pago.PRECIO}
                    </td>
                    <td
                      scope="row"
                      className="text-center md:w-[30%]  py-1 font-medium text-black"
                    >
                      {pago.fecha}
                    </td>
                    <td
                      scope="row"
                      className="text-center md:w-[10%]  py-1 font-medium text-black"
                    >
                      <button
                        className="text-purple-500 hover:underline focus:outline-none"
                        onClick={() => handleRowClick(index)}
                      >
                        {isRowExpanded(index) ? 'Ocultar' : 'Mostrar'}
                      </button>
                    </td>
                  </tr>
                  {isRowExpanded(index) && (
                    <React.Fragment>
                      {/* Fila con encabezados adicionales */}
                      <tr className="border bg-gray-300">
                        <th className="md:w-[30%]  py-1 text-black font-bold text-center">
                          ID
                        </th>
                        <th className="md:w-[30%] overflow-x-auto  py-1 text-black font-bold text-center">
                          NOMBRE
                        </th>
                        <th className="md:w-[30%]  py-1 text-black font-bold text-center">
                          CANTIDAD
                        </th>
                        <th className="md:w-[10%]  py-1 text-black font-bold text-center">
                          PRECIO
                        </th>
                      </tr>
                      {/* Fila con información adicional */}
                      {detalle
                        .filter((det) => det.bOr === pago.buyOrder)
                        .map((det, subIndex) => (
                          <tr className="border bg-gray-200" key={subIndex}>
                            <td className="md:w-[30%]  py-3 text-gray-700 text-center">
                              {det.ide}
                            </td>
                            <td className="md:w-[30%] py-3 text-gray-700 text-center text-ellipsis truncate">
                              {det.titulo}
                            </td>
                            <td className="md:w-[30%]  py-3 text-gray-700 text-center">
                              {det.qty}
                            </td>
                            <td className="md:w-[10%]  py-3 text-gray-700 text-center">
                              {det.precio}
                            </td>
                          </tr>
                        ))}
                    </React.Fragment>
                  )}
                </React.Fragment>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

