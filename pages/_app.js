import { useEffect } from "react";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "../store/store";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
