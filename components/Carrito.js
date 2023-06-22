import { useAppContext } from "./StateWrapper";
import Prodcards from "./Prodcards";
import Image from "next/image";
import Sad from "../public/img/sadcartman.png";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Carrito() {
  const cart = useAppContext();
  const [tokenResponse, setToken] = useState([]);
  const [urlResponse, setUrl] = useState([]);
  const [tot, settot] = React.useState(0);
  const [shopin, setshopin] = useState([]);
  const [user, setUser] = useState();

  const getProfile = async () => {
    try {
      const response = await axios.get("api/profile");
      console.log(response.data.user);
      setUser(response.data.user);
    } catch (error) {
      setUser("");
    }
  };

  const handleSubmit = async (e) => {
    if (user == "" || user == null) {
      const tempuser = "";
    } else {
      const tempuser = user;
    }
    e.preventDefault();
    console.log("posteando datos");
    console.log(shopin);
    const buyO = "O-" + Math.floor(Math.random() * 10000) + 1;
    const sessID = "S-" + Math.floor(Math.random() * 10000) + 1;
    const amt = tot;
    await axios.post("api/carrito", {
      lis: shopin,
      buyO: buyO,
      amt: amt,
      user: user,
    });
    //POST a WEBPAY para generar transacccion
    //aca debe ir el post
    //descomentar esto
    const res = await axios
      .post("api/webpay", {
        buyO: buyO + 1,
        sessID: "S-" + Math.floor(Math.random() * 10000) + 1,
        amt: tot,
        retUrl: "http://localhost:3000/pagar",
      })
      .then(
        (response) => {
          console.log("data post:" + response);
          console.log(response.data.token);
          console.log(response.data.url);
          setToken(response.data.token);
          setUrl(response.data.url);
          getForm(response);
          doit();
        },
        (error) => {
          console.log(error);
        }
      );
  };

  function getForm(res) {
    const web = (document.getElementById("web").action = res.data.url);
    const web1 = document.getElementById("web").action;
    const web2 = (document.getElementById("tok").value = res.data.token);
    const web3 = document.getElementById("web");
    console.log(web3);
  }

  //descomentar esto
  function doit() {
    const transac = document.getElementById("web").submit();
  }

  function handleCloseCart() {
    cart.closeCart();
  }
  function getTotal() {
    const total = cart.items.reduce(
      (acc, item) =>
        acc +
        item.qty *
          Math.floor(
            item.originalPrice - (item.originalPrice * item.Descu) / 100
          ),
      0
    );
    return total;
  }

  function getShoping() {
    const kk = cart.items;
    return kk;
  }

  useEffect(() => {
    settot(getTotal());
    setshopin(getShoping());
    getProfile();
    console.log(shopin);
  });
  return (
    <div
      style={{ display: cart.isOpen ? "block" : "none" }}
      className="overflow-y-auto z-50 fixed right-0 top-0 bg-white w-screen md:w-3/6 xl:w-4/12 h-screen p-6 shadow-2xl shadow-slate-950 flex flex-col"
    >
      <button
        className=" cursor-pointer bg-purple-600 hover:bg-purple-900 text-white px-6 py-2 rounded-full font-sans"
        onClick={handleCloseCart}
      >
        Cerrar
      </button>
      {cart.items.length === 0 ? (
        <div className=" h-full flex items-center justify-center flex-col">
          <Image className=" w-56" src={Sad} alt="carritoimg"></Image>
          <div className="text-3xl font-bold text-slate-900">Carrito vacio</div>
        </div>
      ) : (
        <div className="grid gap-5">
          <div className="relative text-2xl font-bold text-slate-900 mb-2 mt-2">
            Tus productos
          </div>
          <div>
            {cart.items.map((item) => (
              <div key={item.id}>
                <Prodcards
                  key={item.id}
                  item={item}
                  showAs="ListItem"
                  qty={item.qty}
                />
              </div>
            ))}
          </div>
          <div className="grid gap-7 justify-center">
            <div
              id="este"
              className=" w-full font-bold font-sans text-2xl flex justify-center"
            >
              Total: ${getTotal()}
            </div>
            <form id="hola" onSubmit={handleSubmit}>
              <button className="w-72 flex justify-center cursor-pointer bg-green-600 hover:bg-green-900 text-white px-6 py-2 rounded-md font-sans">
                Ir a pagar
              </button>
            </form>
            <form id="web" action={urlResponse} method="POST">
              <input
                id="tok"
                type="hidden"
                name="token_ws"
                value={tokenResponse}
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
