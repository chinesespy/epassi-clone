import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MetadataRoute } from 'next'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export function manifest(): MetadataRoute.Manifest  {
//   return {
//     name: "Epassi",
//     description: "Henkilöstöedut jokapäiväiseen hyvinvointiin.",
//     start_url: "/",
//     lang: "en",
//     theme_color: "#fff",
//     display: "fullscreen",
//     orientation: "portrait",
//     background_color: "#fff",
//   };
// }
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover"/>
      <meta name="robots" content="NOINDEX, NOFOLLOW"/>
      <link rel="manifest" href="../../manifest.json" />
      <meta name="mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="application-name" content="Epassi"/>
      <meta name="apple-mobile-web-app-title" content="Epassi"/>
      <meta name="theme-color" content="#ffffff"/>
      <meta name="msapplication-navbutton-color" content="#ffffff"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
      <meta name="msapplication-starturl" content="/"/>
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <link rel="icon" type="image/png" sizes="196x196" href="./favicon-196.png"/>

      <link rel="apple-touch-icon" href="./apple-icon-180.png"/>

      <meta name="apple-mobile-web-app-capable" content="yes"></meta>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-2048-2732.jpeg" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-2732-2048.jpeg" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-1668-2388.jpeg" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-2388-1668.jpeg" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-1536-2048.jpeg" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-2048-1536.jpeg" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-1488-2266.jpeg" media="(device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-2266-1488.jpeg" media="(device-width: 744px) and (device-height: 1133px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-1640-2360.jpeg" media="(device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-2360-1640.jpeg" media="(device-width: 820px) and (device-height: 1180px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-1668-2224.jpeg" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-2224-1668.jpeg" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-1620-2160.jpeg" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-2160-1620.jpeg" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-1290-2796.jpeg" media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-2796-1290.jpeg" media="(device-width: 430px) and (device-height: 932px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-1179-2556.jpeg" media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-2556-1179.jpeg" media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-1284-2778.jpeg" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-2778-1284.jpeg" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-1170-2532.jpeg" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-2532-1170.jpeg" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-1125-2436.jpeg" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-2436-1125.jpeg" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-1242-2688.jpeg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-2688-1242.jpeg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-828-1792.jpeg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-1792-828.jpeg" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-1242-2208.jpeg" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-2208-1242.jpeg" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-750-1334.jpeg" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-1334-750.jpeg" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-640-1136.jpeg" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"/>
      <link rel="apple-touch-startup-image" href="../../splash/apple-splash-1136-640.jpeg" media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"/>
      <body className={`${inter.className} bg-white`}>{children}</body>
    </html>
  );
}
