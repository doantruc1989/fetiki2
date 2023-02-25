import axios from "axios";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([] as any);
  const searchref: any = useRef();

  const handleSearch = async (e: any) => {
    setSearch(e.target.value);
    if (e.target.value) {
      try {
        await axios
          .get(
            `https://quocson.fatcatweb.top/product/all?search=searchall&sortBy=${e.target.value}`
          )
          .then((res) => {
            setResult(res.data);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      setResult([]);
    }
  };

  useEffect(() => {
    let handler = (e: any) => {
      if (!searchref.current?.contains(e.target)) {
        setSearch('');
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className="flex justify-around md:items-center md:flex-col w-6/12 md:w-5/12 lg:w-7/12 relative">
      <form className="flex items-center w-full">
        <label className="sr-only">Search</label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            value={search}
            type="text"
            id="voice-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Bạn tìm gì hôm nay?"
            required
            onChange={handleSearch}
          />
          <button
            type="button"
            className="hidden absolute inset-y-0 right-0 lg:flex lg:items-center pr-3"
          >
            <svg
              aria-hidden="true"
              className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <button
          type="submit"
          className="hidden lg:inline-flex lg:items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 mr-2 -ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          Search
        </button>
      </form>
      <div className="hidden lg:justify-start lg:flex">
        <Link href="/dienthoaimaytinhbang">iphone ,</Link>
        <Link href="/dienthoaimaytinhbang">android ,xiaomi ,</Link>
        <Link href="/dienthoaimaytinhbang">Oppo ,ios ,apple ,</Link>
        <Link href="/dienthoaimaytinhbang">máy tính bảng ,</Link>
        <Link href="/dienthoaimaytinhbang">realme </Link>
      </div>
     {search === "" ? null : (<div className="text-xs w-[380px] -left-5 md:w-full md:left-0 bg-gray-100 text-black h-auto absolute top-11 z-50 rounded-lg pb-1" ref={searchref}>
        {result ?
          result.map((res: any) => {
            return (
              <Link href={"/products/" + res.id} key={res.id}
              onClick={() => {setSearch('')}}
              >
                <div className="flex gap-3 items-center border-b border-gray-300 w-full py-1 hover px-3">
                  <img src={res.image} className="w-12 h-12 rounded-md" />
                  <div className="flex flex-col items-start">
                    <h1>{res.productName}</h1>
                    <h1 className="font-medium">{Intl.NumberFormat().format(res.price)}đ</h1>
                  </div>
                </div>
              </Link>
            );
          }) : null}
      </div>)}
    </div>
  );
}

export default Search;
