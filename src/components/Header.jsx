import React from "react";

const Header = () => {
  return (
    <>
      <div className="px-7">
        <div className="flex items-center justify-between">
          <h4>portfolio</h4>
          <div className="flex gap-10">
            <h4>about</h4>
            <h4>experience</h4>
            <h4>project</h4>
            <h4>contact</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
