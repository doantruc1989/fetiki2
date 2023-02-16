import React from "react";
import Head from "next/head";

function HeadSeo({ prop }: any) {
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta name="keywords" content={prop.keywords}></meta>
        <meta name="description" content={prop.description}></meta>
        <meta property="og:title" content={prop.ogTitle || "tiki clone practice"} />
        <meta property="og:type" content={prop.ogType || 'book, phone, iphone, samsung, 13, 14'} />
        <meta property="og:url" content={prop.ogUlr || "https://fetiki2-bt1m-8g05lbo1s-doantruc1989.vercel.app/"} />
        <meta property="og:image" content={prop.ogImage || "https://fetiki2-bt1m-8g05lbo1s-doantruc1989.vercel.app/image/logotiki.png"} />
        <meta charSet="utf-8"></meta>
        <title>{prop.title}</title>
      </Head>
    </div>
  );
}

export default HeadSeo;
