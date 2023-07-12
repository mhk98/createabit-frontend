import { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/preview";
//= Components
import Overlay from "@/components/Preview/Overlay";
import HomeCreativeAgency from "./dark/home-creative-agency";
import DarkNavbar from "./dark/dark-navbar";

function LandingPreview() {
  useEffect(() => {
    document.body.classList.add("sub-bg");
    return () => document.body.classList.remove("sub-bg");
  }, []);

  return (
    <>
      <Head>
        <title>Geekfolio - Preview</title>
      </Head>

      {/* <Navbar /> */}
      {/* <MainNavbar></MainNavbar> */}

      <Overlay />

      <main>
        {/* <Header />
        <Demos />
        <Marq />
        <Pages />
        <ShopDemos />
        <CallToAction />
        <Footer /> */}
        <HomeCreativeAgency></HomeCreativeAgency>
      </main>
    </>
  );
}

LandingPreview.getLayout = (page) => <Layout>{page}</Layout>;

export default LandingPreview;
