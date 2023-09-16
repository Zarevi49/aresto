import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, classes }) => {
    return (
        <div className={classes}>
            <Header />
            <main className="flex min-h-screen flex-col items-center justify-between">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
