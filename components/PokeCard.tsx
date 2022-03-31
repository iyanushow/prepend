import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IPokemonDetails } from "../interfaces";

const PokeCard = ({ id, imageUrl = "", name, types }: IPokemonDetails) => {
  // convert pokemon types to string for display
  const pokemonTypes = types.map(pokeType => pokeType.type.name).join(",");

  return (
    <div className="text-[#e4c439] p-4 text-center relative overflow-hidden transition-all duration-200 hover:scale-105 bg-gray-800 shadow-xl rounded-lg">
      <span className="bg-main min-w-10 h-6 text-xs flex items-center px-1 text-white absolute left-5 rounded">{`#${id}`}</span>

      {imageUrl ? (
        <figure className="w-auto mx-auto">
          <Image src={imageUrl} layout="fixed" width={120} height={120} alt={name} />
        </figure>
      ) : (
        <p className="text-xs uppercase italic text-center text-red-400 h-[120px]">
          No Image Found
        </p>
      )}

      <h1 className="capitalize text-white text-2xl font-semibold mt-2 mb-4">{name}</h1>

      <p className="my-2 italic text-xs">{pokemonTypes}</p>

      <Link href={`/pokemon/${name}`}>
        <a>
          <button className="px-3 py-3 w-48 uppercase text-xs text-center rounded-3xl bg-gray-600 hover:bg-gray-700 my-5 flex justify-center gap-2.5 mx-auto">
            <span className="text-sm max-w-[20ch] line-clamp-1">Go {name}</span>
            {/* copied simple svg icon from tailwind */}

            <svg
              className="h-5 w-5 inline-flex relative -top-0.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </a>
      </Link>
    </div>
  );
};

export default PokeCard;
