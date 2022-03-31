import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home | Welcome">
    <div className="w-full h-screen bg-hero bg-no-repeat bg-cover bg-black bg-opacity-25 flex justify-center items-center">
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-black uppercase text-4xl text-center">Welcome to Pokemon !</h1>
        <Link href="/pokemon">
          <a>
            <button className="px-3 py-3 w-52 mx-auto uppercase text-xs text-center text-main cursor-pointer rounded-3xl bg-gray-600 hover:bg-gray-700 my-2.5">
              Checkout Pokemons
            </button>
          </a>
        </Link>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
