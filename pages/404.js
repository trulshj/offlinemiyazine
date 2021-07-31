import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";

export default function Custom404() {
    return (
        <Layout title="404!">
            <Head>
                <title>404!</title>
            </Head>
            <h1>Page not found</h1>
            <div>Seems like our code monkey sent you somewhere that doesn't exist!</div>
            <br />
            <Link href="/">
                <a>Click here to go back to the main page</a>
            </Link> 
        </Layout>
    );
}
