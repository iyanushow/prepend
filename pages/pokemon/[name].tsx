import { GetStaticProps, GetStaticPaths } from "next";

import { IPokemonDetails, IResults } from "../../interfaces";
import Layout from "../../components/Layout";
import { baseUrl, fetchPokemonData } from "../../utils";
import Image from "next/image";
import Pill from "../../components/Pill";

type SingleType = {
  pokemon: IPokemonDetails;
  errors?: string;
};

const SinglePokemon = ({ pokemon }: SingleType) => {
  const {
    name = "Pokemon Detail",
    imageUrl,
    weight,
    height,
    stats,
    types,
    moves,
    species,
  } = pokemon;
  return (
    <Layout title={`${name}`}>
      <div className="w-full min-h-screen">
        <div className="w-full max-w-7xl mx-auto py-10"></div>
        <h1 className="text-center text-gray-900 text-5xl uppercase underline">{name}</h1>

        <figure className="w-48 mx-auto my-5">
          <Image src={imageUrl} layout="fixed" width={240} height={120} alt={name} />
        </figure>

        <div className="my-2.5 py-5 px-5">
          <h2 className="uppercase text-center text-2xl font-semibold border border-slate-50 py-2.5 px-2.5">
            Details about {name}
          </h2>

          <div className="w-full flex flex-wrap py-5 items-start gap-y-5">
            <div className=" items-center basis-1/2 ">
              <h3 className="text-slate-400 text-3xl underline my-2.5">Species:</h3>
              <p className="text-3xl uppercase italic">{species.name}</p>
            </div>
            <div className="basis-1/2">
              <h3 className="text-slate-400 my-2.5 text-3xl underline">Data</h3>
              <li>
                height:
                <span className="uppercase mx-1.5 font-semibold">{height}cm</span>
              </li>
              <li>
                weight:
                <span className="uppercase mx-1.5 font-semibold">{weight}kg</span>
              </li>
            </div>
            <div className="basis-1/2">
              <h3 className="text-slate-400 my-2.5 text-3xl underline">Stats</h3>
              <div>
                {stats.map(({ base_stat, effort, stat }, idx) => (
                  <div key={idx}>
                    <div className="mx-2 my-4 inline-block">
                      <span className="uppercase italic text-slate-400 inline-block ">Stat:</span>{" "}
                      <span className="font-medium hover:underline uppercase text-gray-900 text-xl">
                        {stat?.name}
                      </span>
                    </div>

                    <div className="mx-2 inline-block">
                      <span className="uppercase italic text-slate-400 inline-block ">Effort:</span>{" "}
                      <span className="font-medium hover:underline uppercase text-gray-900 text-xl">
                        {effort}
                      </span>
                    </div>
                    <div className="mx-2 inline-block">
                      <span className="uppercase italic text-slate-400 inline-block ">Rating:</span>{" "}
                      <span className="font-medium hover:underline uppercase text-gray-900 text-xl">
                        {base_stat}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="basis-1/2">
              <h3 className="text-slate-400 my-2.5 text-3xl underline">Moves</h3>
              <div className="flex gap-2.5 flex-wrap my-5">
                {moves.map(({ move, version_group_details }, idx) => (
                  <Pill key={idx}>{move?.name}</Pill>
                ))}
              </div>
            </div>

            <div className="basis-1/2">
              <h3 className="text-slate-400 my-2.5 text-3xl underline">Types</h3>
              <div className="text-sm italic text-gray-900">
                {types.map(({ slot, type }) => type.name).join(",")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data: Response = await fetch(`${baseUrl}?limit=1126`);

  const response = (await data.json()) as IResults;

  const paths = response.results.map(pokemon => ({
    params: { name: pokemon.name },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params = {} }) => {
  try {
    const { name } = params;
    const pokemon: IPokemonDetails = await fetchPokemonData(`${baseUrl}/${name}`);

    return { props: { pokemon }, notFound: !pokemon };
  } catch (err: any) {
    return { props: {}, notFound: true };
  }
};

export default SinglePokemon;
