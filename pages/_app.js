import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/utils/theme";
import withReduxStore from "../src/lib/with-redux-store";
import { Provider } from "react-redux";

class Woodify extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  renderHead() {
    return (
      <Head>
        <title>Woodify</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
        <link rel="icon" type="image/x-icon" href="static/images/favicon.ico" />
      </Head>
    );
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <div>
        {this.renderHead()}
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Provider store={reduxStore}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </div>
    );
  }
}
export default withReduxStore(Woodify);
