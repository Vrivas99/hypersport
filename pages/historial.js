import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { getPagos, getPagitos } from "@/services/itemService";

//ya no se estan usando
import Pagitos from "@/components/Pagitos";
import Tablahistorial from "@/components/Tablahistorial";
import axios from "axios";

const historial = ({ pagos, detalle }) => {
  const [user, setUser] = useState();

  // Estado para almacenar las filas expandidas
  const [expandedRows, setExpandedRows] = useState([]);

  // Función para manejar la expansión de una fila
  const handleExpandRow = (row) => {
    if (expandedRows.includes(row)) {
      {
        /* Filas adicionales si la fila principal está expandida */
      }
      setExpandedRows(expandedRows.filter((r) => r !== row));
    } else {
      {
        /* Si la fila no está expandida, la agregamos al estado de filas expandidas*/
      }
      setExpandedRows([...expandedRows, row]);
    }
  };

  // Función para verificar si una fila está expandida
  const isRowExpanded = (row) => {
    return expandedRows.includes(row);
  };
  const getProfile = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/profile')
      console.log('logeado como:' + response.data.user)
      setUser(response.data.user)
      console.log(response.data.user)
    } catch (error) {
      console.log(error)
      setUser('')
    }
  }
  useEffect(() => {
    getProfile();
  }, []);

  const filtroPago = pagos.filter(pago => pago.usu === user)



  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="m-11 relative overflow-x-auto sm:rounded-xl">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-black dark:text-gray-400">
            <tr>
              <th scope="col" className="text-white px-6 py-3 text-center">
                ORDEN DE COMPRA
              </th>
              <th scope="col" className="text-white px-6 py-3 text-center">
                PRECIO
              </th>
              <th scope="col" className="text-white px-6 py-3 text-center">
                FECHA DE COMPRA
              </th>
              <th scope="col" className="text-white px-6 py-3 text-center">
                Detalles
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Filas principales */}
            {filtroPago && filtroPago.map((pago) => (
              <>
                <tr className="border bg-white border-gray-700 hover:bg-gray-200 hover:text-white">
                  <td
                    scope="row"
                    className="px-4 py-1 font-medium text-black text-center"
                  >
                    {pago.buyOrder}
                  </td>
                  <td
                    scope="row"
                    className="text-center px-4 py-1 font-medium text-black"
                  >
                    ${pago.PRECIO}
                  </td>
                  <td
                    scope="row"
                    className="text-center px-4 py-1 font-medium text-black"
                  >
                    {pago.fecha}
                  </td>
                  <td
                    scope="row"
                    className="text-center px-4 py-1 font-medium text-black"
                  >
                    <button
                      className="text-purple-500 hover:underline focus:outline-none"
                      onClick={() => handleExpandRow(0)}
                    >
                      {isRowExpanded(0) ? "- Detalles" : "+ Detalles"}
                    </button>
                  </td>
                </tr>
                {isRowExpanded(0) && (
                  <>
                    {/* Fila con encabezados adicionales */}
                    <tr className="border bg-gray-300">
                      <th className="px-4 py-2 text-black font-bold text-center">
                        ID
                      </th>
                      <th className="px-4 py-2  text-black font-bold text-center">
                        NOMBRE
                      </th>
                      <th className="px-4 py-2 text-black font-bold text-center">
                        CANTIDAD
                      </th>
                      <th className="px-4 py-2 text-black font-bold text-center">
                        PRECIO
                      </th>
                    </tr>
                    {/* Fila con información adicional */}

                    {
                      detalle.filter(det => det.bOr === pago.buyOrder).map((det) => (
                        <tr className="border bg-gray-200">
                          <td className="px-4 py-2 text-gray-700  text-center">
                            {det.ide}
                          </td>
                          <td className="px-4 py-2 text-gray-700  text-center">
                            {det.titulo}
                          </td>
                          <td className="px-4 py-2 text-gray-700  text-center">
                            {det.qty}
                          </td>
                          <td className="px-4 py-2 text-gray-700  text-center">
                            {det.precio}
                          </td>
                        </tr>
                      ))
                    }
                  </>
                )}
              </>

            ))}
            {/* TODO ESTO DEBERIA ESTAR POR CADA ORDEN DE COMPRA*/}
            {/* SOLO SE RENDERIZA LOS PRODUCTOS DE LA PRIMERA ORDEN DE COMPRA */}

            {/* Filas adicionales si la fila principal está expandida */}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default historial

export async function getStaticProps() {

  const res = await getPagos();
  const res2 = await getPagitos();
  return {
    props: {
      pagos: res,
      detalle: res2,
    },
  };
}
