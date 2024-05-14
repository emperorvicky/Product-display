"use server"
import { cookies } from 'next/headers';

export default async function MyCookies() {

   const expirationDate = new Date();
  expirationDate.setTime(expirationDate.getTime() + (12 * 60 * 60 * 1000));

   cookies().set('authToken', `${process.env.NEXT_PUBLIC_TOKEN}`, { expires: expirationDate });
}
export async function deleteCookies() {
   cookies().set('authToken', '', { expires: new Date(0) });
}