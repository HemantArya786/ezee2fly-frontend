import React from "react";

function Footer() {
  return (
    <footer className=" flex-col bg-black px-10 py-10 flex ">
      <div className="flex  h-64 ">
        <section className="flex w-1/3 justify-center items-center">
          <img
            className=" h-20  "
            src="https://thumbs.dreamstime.com/b/ready-summer-vacation-travel-background-d-rendering-114574299.jpg"
          />
        </section>
        <section className="w-1/3  items-center  flex justify-start">
          <div className="">
            <p className="mb-4 font-bold">Office address </p>
            <p>
              209A 2nd Floor
              <br /> Tower D Golden I<br /> Greater Noida West <br />
               201306
            </p>
          </div>
        </section>
        <section className="w-1/3 flex items-center justify-start gap-y-6">
          <div>
            <p className="mb-4 font-bold">Pages</p>

            <ul className="flex flex-col gap-2">
              <p>links</p>
              <p>links</p>
              <p>links</p>
              <p>links</p>
            </ul>
          </div>
        </section>
      </div>
      <div className="flex justify-center py-10  ">
        <p>Contact Email :</p> <p> Ezee2fly@gmail.com</p>
      </div>
    </footer>
  );
}

export default Footer;
