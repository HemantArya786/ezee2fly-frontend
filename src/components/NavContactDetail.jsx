import React from "react";
import { IoIosMail } from "react-icons/io";
import { IoIosCall } from "react-icons/io";

function NavContactDetail() {
  return (
    <div>
      <div className="flex justify-around py-5 bg-gray-600 gap-96 ">
        <div className="flex  gap-2 ">
          <span className="pt-1 ">
            <IoIosMail />
          </span>
          <p>Ezee2fly@gmail.com</p>
        </div>
        <div className="flex gap-2">
          <span className="pt-1 ">
            <IoIosCall />
          </span>
          <p>9911950150</p>
        </div>
      </div>
    </div>
  );
}

export default NavContactDetail;
