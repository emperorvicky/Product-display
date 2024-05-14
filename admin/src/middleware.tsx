import {NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers';



export function middleware(request : NextRequest) {

  const authToken = cookies().get('authToken')
 
if (authToken) {
  return NextResponse.next();
} else {
  return NextResponse.redirect(new URL('/login', request.url));
}


}
 
export const config = {
  matcher: [
    '/add-products', 
    '/', 
    '/products',

],
}
