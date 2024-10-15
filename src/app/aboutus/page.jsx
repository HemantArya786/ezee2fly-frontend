import React from "react";

function AboutUs() {
  return (
    <div>
      <section>
        <img
          className="h-72 w-full"
          src="https://static.vecteezy.com/system/resources/previews/007/932/618/non_2x/about-us-button-about-us-text-template-for-website-about-us-icon-flat-style-vector.jpg"
        />
      </section>
      <section className="flex">
        <div className="w-1/2 flex justify-center items-center text-4xl p-10 font-bold text-center">
          <p>Travel is the only thing you buy that makes you richer</p>
        </div>
        <div className="w-1/2 p-10 text-start ">
          <p className="py-3">
            Flip Trip Holidays promises to open you up to enriching new
            experiences and bring the world at your feet. No matter where you
            wish to go, we promise to craft an experience tailor made for your
            desires and one that stays in your memories for life. Our travel
            experts work tirelessly round the clock to design the itinerary of
            your dreams and coordinate every little aspect of your travel so
            that you can enjoy your holiday without any worry.
          </p>
          <p className="py-3">
            You can count on Flip Trip to get you the best deal on flights,
            hotels, sightseeing and all-inclusive packages. Whether you’re
            looking to arrange corporate travel, a romantic getaway, a family
            vacation, a trip with friends or even a destination wedding, we will
            provide the best of everything to your utmost satisfaction with our
            extensive knowledge and network.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="text-5xl font-bold flex justify-center">
          <p>GO TRAVEL.DISCOVER. REMEMBER US!!</p>
        </div>
        <div className="text-center px-10 py-10">
          <p>
            We have a package for anyone and everyone, no matter if you’re
            looking for budget options or a luxury <br />
            holiday. We specialize in all domestic and international packages
            and have extensive experience in <br />
            designing island holidays to Bali, Singapore, Mauritius, Maldives,
            Thailand, Sri Lanka along with cities like <br /> Hong Kong and
            Macau. We have a huge customer base with highly satisfactory
            experience for Europe, UK, <br /> New Zealand, and Australia. With
            Flip Trip you can turn your boring holidays into adventurous
            vacations. <br /> Experience beautiful nature, lush valleys,
            pristine beaches, ancient monuments, religious places, historical
            <br />
            destinations, and cultural hubs: we will plan it all.
          </p>
        </div>
      </section>
      <section className="flex justify-center pb-10">
        <button className="border py-3 px-16">Contact Us</button>
      </section>
      <section className="py-10">
        <div>
          <p className="text-5xl font-bold text-center">
            Why choose Flip Trip Holidays?
          </p>
        </div>

        <div className="px-48 py-10">
          <p className="py-2">
            Experience and knowledge go a long way in the travel industry and
            we’re proud to have both. We have been in business since the last 8
            years and have built a strong network of hospitality brands, airline
            operators, tourism boards, cruise liners and on-ground vendors
            required to execute a smooth holiday experience for our clients.
          </p>
          <p className="py-2">
            In these 8 years we have served over 50000 happy travellers and have
            garnered over 1000 positive reviews on google and other online
            platforms. These reviews speak volumes about the trust bestowed upon
            us by our patrons.
          </p>
          <p className="py-2">
            Our comprehensive range of services includes Visa assistance, cruise
            bookings, sightseeing tours, 5-star domestic hotel bookings,
            international flights, private charters, corporate bookings and
            everything else under the sun.
          </p>
          <p className="py-2">
            Choose Flip Trip Holidays once and we promise you there’s no going
            back: you will always choose us for all your travel need.
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
