import { SWRConfig } from "swr";
import { GetStaticProps } from "next";
import Layout from "../../components/Layout";
import Pokemons from "../../components/Pokemons";
import { baseUrl, fetchPokemonList } from "../../utils";
import { IPokemonList, IPokemonDetails } from "../../interfaces";

interface PageTypes extends IPokemonList {
  fallback: {
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=16": IPokemonDetails[];
  };
}

function PokemonPage({ fallback, pagination, url }: PageTypes): JSX.Element {
  return (
    <SWRConfig value={{ fallback }}>
      <Layout title="Pokemons">
        <Pokemons pagination={pagination} initialUrl={url} />
      </Layout>
    </SWRConfig>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const url = `${baseUrl}?offset=0&limit=16`;

  const props: IPokemonList = await fetchPokemonList(url);

  return {
    props: {
      ...props,
      fallback: {
        [url]: props.pokemons,
      },
    },
  };
};

export default PokemonPage;
