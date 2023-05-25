import { useEffect } from 'react';
import '@/styles/globals.css'
import Aos from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {

  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []); 

  return <Component {...pageProps} />;
}
