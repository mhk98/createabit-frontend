import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import ServicesTab from "@/components/DigitalAgency/ServicesTab";
import Services from "@/components/InnerPages/About/Services";
import Header from "@/components/InnerPages/Header";
import FAQ from "@/components/InnerPages/Services/FAQ";
import Portfolio from "@/components/InnerPages/Services/Portfolio";
import CallToAction from "@/components/Startup/CallToAction";
import Footer from "@/components/Startup/Footer";
import LightNavbar from "../light-navbar";

function PageServicesLight() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList?.remove("main-bg");
  }, []);

  const headerMetadata = {
    subTitle: "WHAT CAN WE DO ?",
    title: "We combine our passion for design and code.",
    text: "SERVICES",
  };

  return (
    <>
      <Head>
        <title>Geekfolio - Services</title>
      </Head>

      <Loader />
      {/* <Navbar mainBg lightMode /> */}
      <LightNavbar></LightNavbar>
      <main>
        <Header data={headerMetadata} subBg={true} />
        <Portfolio />
        <Services lightMode />
        <ServicesTab lightMode />

        <FAQ />
        <CallToAction innerPageStyle />
      </main>
      <Footer lightMode />
    </>
  );
}

PageServicesLight.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default PageServicesLight;
