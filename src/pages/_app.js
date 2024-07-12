import "@/styles/globals.scss";
import "@/styles/partials/_navbar.scss";
import "@/styles/partials/_homepage.scss";
import "@/styles/partials/_games.scss";
import "@/styles/partials/_searchbar.scss";


export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }