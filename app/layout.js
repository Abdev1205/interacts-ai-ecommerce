'use client'

import { montserrat, openSans, poppins } from "../public/font.js"
import "./globals.css";
import ConfigProviders from "@/providers/ConfigProviders.js";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable} ${poppins.variable}`}>
        <ConfigProviders>
          {children}
        </ConfigProviders>
      </body>
    </html>
  );
}
