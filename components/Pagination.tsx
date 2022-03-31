import React from "react";
import { IPokemonDetails } from "../interfaces";

type PaginationProps = {
  className?: string;
  variables: {
    count: number;
    next: string;
    previous: string;
  };
  changePage: (url: string) => void;
};

const Pagination = ({ variables, changePage }: PaginationProps) => {
  const { count, next, previous } = variables;
  console.log(next, previous);

  return (
    <div className="px-4 py-3 my-5 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex items-center justify-center">
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button
              className={`disabled:opacity-75 disabled:cursor-not-allowed  cursor-pointer elative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}
              onClick={() => changePage(previous)}
              disabled={!previous}
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="">Previous</span>
            </button>

            <button
              onClick={() => changePage(next)}
              className={`disabled:opacity-75 disabled:cursor-not-allowed  cursor-pointer relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}
              disabled={!next}
            >
              <span className="">Next</span>

              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
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
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
