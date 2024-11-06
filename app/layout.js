'use client'

import TopPromo from "@/components/common/promo/top/TopPromo.js";
import { montserrat, openSans, poppins } from "../public/font.js"
import "./globals.css";
import ConfigProviders from "@/providers/ConfigProviders.js";
import Navbar from "@/components/common/navbar/index.js";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'


export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${montserrat.variable} ${openSans.variable} ${poppins.variable}`}>
          <ConfigProviders>
            {children}
          </ConfigProviders>
        </body>
      </html>
    </ClerkProvider>
  );
}
