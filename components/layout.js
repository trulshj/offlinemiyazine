import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.css";

import minimizeSvg from "../public/space-bar.svg";
import windowSvg from "../public/minus.svg";
import closeSvg from "../public/close.svg";

import twitterLogo from "../public/twitter.svg";
import tumblrLogo from "../public/tumblr.svg";

import React, { useState } from "react";

let buttons = [
    { id: "01", label: "Home", link: "" },
    { id: "02", label: "About", link: "about" },
    { id: "03", label: "FAQ", link: "faq" },
    { id: "04", label: "Schedule", link: "schedule" },
    { id: "05", label: "Rules", link: "rules" },
    { id: "06", label: "Mods", link: "mods" },
    /* { id: "06", label: "", link: "" },
    { id: "07", label: "", link: "" },
    { id: "08", label: "", link: "" },
    { id: "09", label: "", link: "" }, */
];

export default function Layout({ children, shortTitle }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.container}>
            <Head>
                <title>OFFLINE</title>
                <meta
                    name="description"
                    content="A SK8 Zine about Miya Chinen!"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
                <link rel="icon" href="/favicon.ico?v=2" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&family=Red+Hat+Display&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,300;0,400;0,700;1,100;1,300;1,400;1,700&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <main className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.numberBtnsWrapper}>
                        <button
                            className={styles.burger}
                            onClick={() => setOpen(!open)}
                        >
                            ≡
                        </button>
                        {buttons.map((b) => (
                            <Link href={`/${b.link}`}>
                                <button
                                    key={b.id}
                                    onClick={() => setOpen(false)}
                                    className={
                                        styles.numberBtn +
                                        `${open ? ` ${styles.wideButton}` : ""}`
                                    }
                                >
                                    {b.id}
                                    {open ? ` ${b.label}` : ""}
                                </button>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className={styles.screen}>
                    <div className={styles.titleBar}>
                        <div class={styles.title}>{shortTitle}</div>
                        <div className={styles.titleBtns}>
                            <div className={styles.titleBtn}>
                                <Image src={minimizeSvg} />
                            </div>
                            <div className={styles.titleBtn}>
                                <Image src={windowSvg} />
                            </div>
                            <Link href="/">
                                <div className={styles.titleBtn}>
                                    <Image src={closeSvg} />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.screenContent}>{children}</div>
                </div>
                <footer className={styles.footer}>
                    <a
                        href="https://twitter.com/chinenmiyazine"
                        target="_blank"
                    >
                        <Image src={twitterLogo} />
                    </a>
                    <a
                        href="https://chinenmiyazine.tumblr.com/"
                        target="_blank"
                    >
                        <Image src={tumblrLogo} />
                    </a>
                    <span>@chinenmiyazine</span>
                </footer>
                <footer className={styles.credit}>
                    website and hosting by{" "}
                    <a href="https://github.com/trulshj" target="_blank">
                        @trulshj
                    </a>{" "}
                    and{" "}
                    <a href="https://fishnobi.tumblr.com" target="_blank">
                        @fishnobi
                    </a>
                </footer>
            </main>
        </div>
    );
}
