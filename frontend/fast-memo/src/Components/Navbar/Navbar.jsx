import React, { useState } from "react";
import ProfileInfo from "../Cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const onLogout = () => {
    navigate("/login");
  };

  const handleSearch = () => {};

  const onClearSearch = () => {
    setSearchQuery("");
  };
  return (
    <>
      <div className="bg-white flex items-center justify-between px-6 py-8 drop-shadow">
        {/* <h2 className="text-xl text-black font-medium py-2">Notes</h2> */}
        <img src="https://res.cloudinary.com/dfeyofjln/image/upload/v1705255997/COLLEGE_QUARTERS_LOGO-removebg-preview_1_uxu3ds.png" alt="Logo" className="w-20 h-20 text-xl text-black font-medium py-2 mt-1  mx-6"/>
        <SearchBar
          value={searchQuery}
          onChange={({ target }) => {
            setSearchQuery(target.value);
          }}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />
        <ProfileInfo onLogout={onLogout} />
      </div>
    </>
  );
};

export default Navbar;
