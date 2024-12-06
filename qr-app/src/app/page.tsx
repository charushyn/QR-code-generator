"use client";

import Script from "next/script";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import generateQR from "./qr";
import React from "react";

// eslint-disable-next-line @next/next/no-async-client-component
export default function Home() {
  const [url, setUrl] = React.useState("https://example.com");
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    const req = async () => {
      const qr = await generateQR("дашка найкраща");
      setUrl(typeof qr === "string" ? qr : "");
    };

    req();
  }, []);
  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-10">
      <Script src="https://cdn.jsdelivr.net/gh/davidshimjs/qrcodejs/qrcode.min.js"></Script>
      <input
        className="w-fit p-2 rounded-2xl bg-white text-black"
        value={value}
        placeholder="Enter Value"
        onChange={(e: React.FormEvent<HTMLInputElement>) => {
          setValue(e.currentTarget.value);
        }}
      ></input>
      <img src={url} className="w-[200px] h-[200px]"></img>
      <button
        className="w-fit h-fit bg-white p-2 rounded-2xl text-black"
        onClick={async () => {
          const qr = await generateQR(value);
          setUrl(typeof qr === "string" ? qr : "");
        }}
      >
        Update QR Code
      </button>
    </div>
  );
}
