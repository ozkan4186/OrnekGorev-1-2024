import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";
import { CiSearch } from "react-icons/ci";
import Pozition from "../Pozitionone";
import Pozitionone from "../Pozitionone";
import Pozitiontwo from "../Pozitiontwo";
import Sehirone from "../Sehirone";
import Sehirtwo from "../Sehirtwo";

const Sehirfive = () => {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value: string) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };

  return (
    <>
      <div id="accordionExample">
        <div
          style={{
            border: "2px solid ",
            width: "30%",
            margin: "5rem",
            height: "70%",
            borderRadius: "5px",
            backgroundColor: "#E1E1E1",
            marginTop: "-4rem",
          }}
        >
          <h2
            className="mb-0"
            id="headingOne"
            style={{
              display: "flex",
              justifyContent: "space-between",
              // border: "2px solid red ",
            }}
          >
            <button
              className={`${
                activeElement === "element1" &&
                `text-darkblack [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
              } group relative flex w-2/6  items-center rounded-t-[15px] border-0  px-5 py-4 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
              type="button"
              onClick={() => handleClick("element1")}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Anahtar Kelime
              <span
                className={`${
                  activeElement === "element1"
                    ? `rotate-[-180deg]`
                    : `rotate-0 fill-[#212529]  dark:fill-white`
                } ml-72 h-5 w-12 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === "element1"}
            className="!mt-0  !shadow-none w-1/2"
          >
            <div className="flex flex-col px-7 py-4 items-center relative ">
              <CiSearch className="w-18 absolute right-44 top-8 " />
              <input
                type="text"
                placeholder="Anahtar kelime giriniz"
                className="ml-3 py-3 px-4 border border-gray-300 rounded-md"
              />
              <div className="flex flex-col justify-center -ml-20">
                <div className="flex items-center ">
                  <input
                    type="radio"
                    id="radio1"
                    name="radioGroup"
                    value="option1"
                    className="h-4 w-4 items-center align-middle text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="radio1" className="ml-1 text-gray-700">
                    Tüm İlanda
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    type="radio"
                    id="radio2"
                    name="radioGroup"
                    value="option2"
                    className="h-4 w-4 items-center align-middle text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="radio2" className="ml-1 text-gray-700">
                    İlan Başlığında
                  </label>
                </div>
                <div className="flex items-center ">
                  <input
                    type="radio"
                    id="radio3"
                    name="radioGroup"
                    value="option3"
                    className="h-4 w-4 items-center align-middle text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <label htmlFor="radio3" className="ml-1 text-gray-700">
                    Firma Adında
                  </label>
                </div>
              </div>
            </div>
          </TECollapse>
        </div>
      </div>
    </>
  );
};
export default Sehirfive;
