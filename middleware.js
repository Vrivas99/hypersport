import { NextResponse } from "next/server";

export function middleware(request) {
  const jwt = request.cookies.get("adminTOKEN");
  //console.log(jwt);
  if (request.nextUrl.pathname.includes("/adminPage")) {
    console.log(`Validando ${request.nextUrl.pathname}`);
  } else {
  }
  return NextResponse.next();
}
