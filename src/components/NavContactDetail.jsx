import React from "react";
import { IoIosMail } from "react-icons/io";
import { IoIosCall } from "react-icons/io";

function NavContactDetail() {
  return (
    <div>
      <div className="flex justify-around py-3 bg-[#F8F8F8] gap-96 ">
        <div className="flex  gap-2 text-[14px] ">
          <span className=" ">
            <IoIosMail size={20} />
          </span>
          <p className="">Ezee2fly@gmail.com</p>
        </div>
        <div className="flex gap-2 text-[14px]">
          <span className=" ">
            <IoIosCall size={18} />
          </span>
          <p>9911950150</p>
        </div>
      </div>
    </div>
  );
}

export default NavContactDetail;
