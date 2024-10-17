import React from "react";
import { IoIosMail } from "react-icons/io";
import { IoIosCall } from "react-icons/io";

function NavContactDetail() {
  return (
    <div>
      <div className="flex justify-between px-3 md:flex-row md:justify-around  items-center py-3 bg-[#F8F8F8] md:gap-96 gap-4">
        {/* Email Section */}
        <div className="flex gap-2 md:text-[14px] text-sm items-center">
          <span>
            <IoIosMail size={20} />
          </span>
          <p className="">Ezee2fly@gmail.com</p>
        </div>

        {/* Phone Section */}
        <div className="flex gap-2 text-sm md:text-[14px] items-center">
          <span>
            <IoIosCall size={18} />
          </span>
          <p>9911950150</p>
        </div>
      </div>
    </div>
  );
}

export default NavContactDetail;
