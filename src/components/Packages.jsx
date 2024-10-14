import React from "react";

function Packages() {
  return (
    <div className="flex  ">
      <section className="flex border w-1/2 gap-10">
        <div className="w-1/2 h-80">
          <img
            className=" "
            src="https://fliptripholidays.in/wp-content/uploads/2024/03/EUR-DES.jpg"
          />
        </div>
        <div className="border w-1/2">
          <img
            className=" h-72"
            src="https://fliptripholidays.in/wp-content/uploads/2024/03/TUR.jpg"
          />
        </div>
      </section>
      <section className="border w-1/2 gap-y-10">
        <div>
          <img
            className="h-44"
            src="https://fliptripholidays.in/wp-content/uploads/2024/08/THAILAND.png"
          />
        </div>
        <div>
          <img
            className="h-44"
            src="https://fliptripholidays.in/wp-content/uploads/2024/08/BAL.jpg"
          />
        </div>
      </section>
    </div>
  );
}

export default Packages;
