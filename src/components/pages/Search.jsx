import React, { useEffect } from "react";
import { NavLink, useParams, useSearchParams } from "react-router-dom";
import useFakeStore from "../hooks/FakeStoreApi";
import Products from "../products";
import { FaStar } from "react-icons/fa";

const SearchPage = () => {
  const { fetchProductSearch, searchProducts } = useFakeStore();
  const [searchParams] = useSearchParams();
  for (const entry of searchParams.entries()) {
    const [param, value] = entry;
  }
  console.log(Object.fromEntries([...searchParams]));

  const query = searchParams.get("q");
  useEffect(() => {
    fetchProductSearch("search", `q=${searchParams.get("q")}`);
  }, []);
  console.log(searchProducts);
  return (
    <div className="pt-14 pb-12 bg-neutral-100">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 className="text-3xl font-bold">
            Searching For ... <span className="text-teal-700">{query}</span>
            {!searchProducts.products && <div>Notfound</div>}
          </h1>
        </div>
        {/* Body */}
        <div>
          <div className="grid sm:flex md:grid lg:flex place-items-center gap-5">
            {/* Card Section */}
            {searchProducts.products?.map((data) => (
              <div key={data.id} className="space-y-3 ">
                <img
                  src={data.images[0]}
                  alt=""
                  className="h-[220px] w-[250px] bg-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <h3 className="font-semibold py-1">{data.brand}</h3>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
