import App, { Container } from "next/app";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";

export default class Woodify extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
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
        const { Component, pageProps } = this.props;
        return (
            <Container>
                {this.renderHead()}
                <CssBaseline />
                <Component {...pageProps} />
            </Container>
        );
    }
}