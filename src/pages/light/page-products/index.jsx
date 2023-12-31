import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Products from "@/components/InnerPages/products/product";
import Footer from "@/components/Startup/Footer";
import LightNavbar from "../light-navbar";

function PageProducts() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  const headerMetadata = {
    subTitle: "WHAT CAN WE DO ?",
    title: "We combine our passion for design and code.",
    text: "Web Development",
  };

  return (
    <>
      <Head>
        <title>Geekfolio - Services</title>
      </Head>

      <Loader />
      {/* <Navbar mainBg /> */}
      <LightNavbar></LightNavbar>
      <main>
        {/* <Header data={headerMetadata} subBg={true} /> */}
        <Products />
        {/* <Services />
        <ServicesTab /> */}
        {/* <FAQ /> */}
        {/* <CallToAction innerPageStyle /> */}
      </main>
      <Footer />
    </>
  );
}

PageProducts.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default PageProducts;
