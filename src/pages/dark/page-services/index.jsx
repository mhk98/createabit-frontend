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
import Portfolio from "@/components/InnerPages/Services/Portfolio";
import CallToAction from "@/components/Startup/CallToAction";
import Footer from "@/components/Startup/Footer";
import DarkNavbar from "../dark-navbar";

function PageServices() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList?.remove("main-bg");
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
      <DarkNavbar></DarkNavbar>
      <main>
        <Header data={headerMetadata} subBg={true} />
        <Portfolio />
        <Services />
        <ServicesTab />
        {/* <FAQ /> */}
        <CallToAction innerPageStyle />
      </main>
      <Footer />
    </>
  );
}

PageServices.getLayout = (page) => <Layout>{page}</Layout>;

export default PageServices;
