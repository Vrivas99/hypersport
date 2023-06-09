import { NextResponse } from "next/server";

export function middleware(request) {
  const jwt = request.cookies.get("adminTOKEN");
  const zwt = request.cookies.get("myTokenName");

  //console.log(jwt);
  const conditions = [
    "/adminPage",
    "/adminpageuser",
    "/agregarprod",
    "/modifprod",
    "/agregarusuario",
  ];

  if (
    conditions.some((condition) => request.nextUrl.pathname.includes(condition))
  ) {
    console.log(`Validando ${request.nextUrl.pathname}`);
    if (jwt == undefined) {
      return NextResponse.redirect(new URL("/adminLog", request.url));
    }
  }

  if (request.nextUrl.pathname.includes("/historial")) {
    if (zwt == undefined) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  return NextResponse.next();
}
