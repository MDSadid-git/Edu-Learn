import React from "react";
import useTitle from "../../Hook/Hook";

const SinglePro = () => {
  useTitle("Single Product");
  function scrool() {
    return window.scrollTo(0, 0);
  }
  scrool();
  return (
    <div>
      <section>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div>
            <h1 className="text-2xl font-bold lg:text-5xl my-10">
              Best Bag Here!!!
            </h1>

            <p className="mt-1 text-sm text-gray-500">SKU: #012345</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-4 lg:items-start">
            <div className="lg:col-span-3">
              <div className="relative mt-4">
                <img
                  alt="Tee"
                  src="https://5.imimg.com/data5/GA/PQ/MY-27070405/college-bags-1000x1000.jpg"
                  className="h-72 w-full rounded-xl object-cover lg:h-[540px]"
                />

                <div className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/75 px-3 py-1.5 text-white">
                  <svg
                    className="h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>

              <ul className="mt-1 flex gap-1">
                <li>
                  <img
                    alt="Tee"
                    src="https://cpimg.tistatic.com/04188301/b/4/Stylish-College-Bag.jpg"
                    className="h-16 w-16 rounded-md object-cover"
                  />
                </li>

                <li>
                  <img
                    alt="Tee"
                    src="https://cpimg.tistatic.com/04188301/b/4/Stylish-College-Bag.jpg"
                    className="h-16 w-16 rounded-md object-cover"
                  />
                </li>

                <li>
                  <img
                    alt="Tee"
                    src="https://cpimg.tistatic.com/04188301/b/4/Stylish-College-Bag.jpg"
                    className="h-16 w-16 rounded-md object-cover"
                  />
                </li>

                <li>
                  <img
                    alt="Tee"
                    src="https://cpimg.tistatic.com/04188301/b/4/Stylish-College-Bag.jpg"
                    className="h-16 w-16 rounded-md object-cover"
                  />
                </li>
              </ul>
            </div>

            <div className="lg:sticky lg:top-0">
              <form className="space-y-4 lg:pt-8">
                <fieldset>
                  <legend className="text-lg font-bold">Color</legend>

                  <div className="mt-2 flex flex-wrap gap-1">
                    <label for="color_green" className="cursor-pointer">
                      <input
                        type="radio"
                        id="color_green"
                        name="color"
                        className="peer sr-only"
                        checked
                      />

                      <span className="block h-6 w-6 rounded-full border border-gray-200 bg-green-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"></span>
                    </label>

                    <label for="color_blue" className="cursor-pointer">
                      <input
                        type="radio"
                        id="color_blue"
                        name="color"
                        className="peer sr-only"
                      />

                      <span className="block h-6 w-6 rounded-full border border-gray-200 bg-blue-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"></span>
                    </label>

                    <label for="color_pink" className="cursor-pointer">
                      <input
                        type="radio"
                        id="color_pink"
                        name="color"
                        className="peer sr-only"
                      />

                      <span className="block h-6 w-6 rounded-full border border-gray-200 bg-pink-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"></span>
                    </label>

                    <label for="color_red" className="cursor-pointer">
                      <input
                        type="radio"
                        id="color_red"
                        name="color"
                        className="peer sr-only"
                      />

                      <span className="block h-6 w-6 rounded-full border border-gray-200 bg-red-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"></span>
                    </label>

                    <label for="color_indigo" className="cursor-pointer">
                      <input
                        type="radio"
                        id="color_indigo"
                        name="color"
                        className="peer sr-only"
                      />

                      <span className="block h-6 w-6 rounded-full border border-gray-200 bg-indigo-700 ring-1 ring-transparent ring-offset-1 peer-checked:ring-gray-300"></span>
                    </label>
                  </div>
                </fieldset>

                <fieldset>
                  <legend className="text-lg font-bold">Material</legend>

                  <div className="mt-2 flex flex-wrap gap-1">
                    <label for="material_cotton" className="cursor-pointer">
                      <input
                        type="radio"
                        id="material_cotton"
                        name="material"
                        className="peer sr-only"
                        checked
                      />

                      <span className="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100">
                        Cotton
                      </span>
                    </label>

                    <label for="material_wool" className="cursor-pointer">
                      <input
                        type="radio"
                        id="material_wool"
                        name="material"
                        className="peer sr-only"
                        checked
                      />

                      <span className="block rounded-full border border-gray-200 px-3 py-1 text-xs peer-checked:bg-gray-100">
                        Wool
                      </span>
                    </label>
                  </div>
                </fieldset>

                <div className="rounded border bg-gray-100 p-4">
                  <p className="text-sm">
                    <span className="block">
                      {" "}
                      Pay as low as $3/mo with 0% APR.{" "}
                    </span>

                    <a href="" className="mt-1 inline-block underline">
                      {" "}
                      Find out more{" "}
                    </a>
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold">$19.99</p>
                </div>

                <button
                  type="submit"
                  className="w-full text-center duration-500 hover:bg-brand rounded-md bg-[#003262] px-5 py-3  text-xs font-bold uppercase text-white transition mt-5"
                >
                  {" "}
                  Add to cart
                </button>

                <button
                  type="button"
                  className="w-full rounded border border-gray-300 bg-gray-100 px-6 py-3 text-sm font-bold uppercase tracking-wide"
                >
                  Notify when on sale
                </button>
              </form>
            </div>

            <div className="lg:col-span-3">
              <div className="prose max-w-none">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  totam eos iusto repellat blanditiis voluptate aspernatur, quae
                  nemo exercitationem cum debitis! Sint consectetur laborum
                  tempora repellat odit. Impedit quasi reprehenderit harum illum
                  sequi provident soluta cum quisquam odit possimus? Officia
                  illum saepe magnam nostrum, officiis placeat iure itaque
                  cumque voluptate?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SinglePro;
