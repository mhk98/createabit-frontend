import Loader from "@/components/Common/Loader";
import { useGetServiceDetailsQuery } from "@/features/service/serviceDetailsApi";
import Layout from "@/layouts/default";
import Head from "next/head";
import { useRouter } from "next/router";
import LightNavbar from "../light-navbar";
import { useGetProductCategoryApiQuery } from "@/features/product/productCategory";

function PageServiceDetails() {
  const router = useRouter();

  // Get the query parameter from the URL
  const { id } = router.query;
  console.log("keyword", id);
  const { data, isLoading, isError, isSuccess, error } =
    useGetServiceDetailsQuery(id);
  const serviceDetails = data?.data;
  // console.log("serviceDetails", serviceDetails.title);
  return (
    <>
      <Head>
        <title>Geekfolio - Services</title>
      </Head>
      <Loader />
      <LightNavbar></LightNavbar>

      <main>
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4 items-start">
              <div>
                <img
                  src={`http://localhost:5000/${serviceDetails?.image}`}
                  alt=""
                />
              </div>
              <div>
                <h1 className="text-4xl">{serviceDetails?.title}</h1>
                <p className="mt-8">{serviceDetails?.text1}</p> <br />
                <p>{serviceDetails?.text2}</p>
              </div>
            </div>

            <div className="py-12">
              <h2 className="text-4xl text-center mb-16">
                {serviceDetails?.question}
              </h2>
              <div>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 mx-8 gap-20">
                  <p className="shadow-lg p-4 rounded-lg">
                    {serviceDetails?.shortText1}
                  </p>
                  <p className="shadow-lg p-4 rounded-lg">
                    {serviceDetails?.shortText2}
                  </p>
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 mx-8 gap-20 mt-6">
                  <p className="shadow-lg p-4 rounded-lg">
                    {serviceDetails?.shortText3}
                  </p>
                  <p className="shadow-lg p-4 rounded-lg">
                    {serviceDetails?.shortText4}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </main>
    </>
  );
}

// PageServiceDetails.getLayout = (page) => <Layout>{page}</Layout>;
PageServiceDetails.getLayout = (page) => <Layout lightMode>{page}</Layout>;

export default PageServiceDetails;
