// src/app/auth/prihlasenie/page.tsx

import SignInView from "@/sections/SignInView";

export const metadata = { title: 'Prihlásiť sa | KamNaKavu'};

//import { signIn } from "next-auth/react";

export default function SignInPage() {
  return (<SignInView/>);
}
