import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Blog from "@/components/CreativeAgency/Blog";
import Footer from "@/components/CreativeAgency/Footer";
import Header from "@/components/CreativeAgency/Header";
import HzScroll from "@/components/CreativeAgency/HorizontalScroll";
import Intro from "@/components/CreativeAgency/Intro";
import Marq from "@/components/CreativeAgency/Marq";
import Portfolio from "@/components/CreativeAgency/Portfolio";
import SectionImage from "@/components/CreativeAgency/SectionImage";
import Services from "@/components/CreativeAgency/Services";
import Team from "@/components/CreativeAgency/Team";
import Testimonials from "@/components/CreativeAgency/Testimonials";
import DarkNavbar from "../dark-navbar";

function HomeCreativeAgency() {
  useEffect(() => {
    document.body.classList.add("sub-bg");
    return () => document.body.classList.remove("sub-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Creative Agency</title>
      </Head>

      <Loader />
      {/* <Navbar mainBg /> */}
      <DarkNavbar></DarkNavbar>
      <main className="main-bg position-re">
        <Header />
        <Marq />
        <Intro />
        <SectionImage />
        <Services />
        <Portfolio />
        <Testimonials />
        <Team />
        <HzScroll />
        <Blog />
      </main>
      <Footer />
    </>
  );
}

HomeCreativeAgency.getLayout = (page) => <Layout>{page}</Layout>;

export default HomeCreativeAgency;
