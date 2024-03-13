import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";
import { CiSearch } from "react-icons/ci";
import { RiAdminLine } from "react-icons/ri";
const Sehirone = () => {
  const [activeElement, setActiveElement] = useState("");
  const handleClick = (value: string) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  return (
    <div
      className="px-5 py-5   m flex items-center border-1 ml-10 "
      style={{
        backgroundColor: "#1F4CA1",
        marginTop: "-4rem",
        borderRadius: "5px",
        width: "30%",
        marginLeft: "5rem",
        fontSize: "1.5rem",
      }}
    >
      <RiAdminLine className="text-white w-20 " />
      <p className="text-white">
        Şehir seçerek daha doğru ilanlara ulaşabilirsin
      </p>
    </div>
  );
};

export default Sehirone;
