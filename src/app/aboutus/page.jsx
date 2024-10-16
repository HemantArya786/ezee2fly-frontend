"use client";
import HeadAndPara from "@/components/HeadAndPara";
import HoverButton from "@/components/HoverButton";
import React from "react";

function AboutUs() {
  const contextData = {
    head: "Travel is the only thing you buy that makes you richer",
    para: [
      "Flip Trip Holidays promises to open you up to enriching new experiences and bring the world at your feet. No matter where you wish to go, we promise to craft an experience tailor made for your desires and one that stays in your memories for life. Our travel experts work tirelessly round the clock to design the itinerary ofyour dreams and coordinate every little aspect of your travel so that you can enjoy your holiday without any worry. You can count on Flip Trip to get you the best deal on flights hotels, sightseeing and all-inclusive packages. Whether you re looking to arrange corporate travel, a romantic getaway, a family vacation, a trip with friends or even a destination wedding, we will provide the best of everything to your utmost satisfaction with our extensive knowledge and network.",
    ],
  };

  const contextData2 = {
    head: "GO TRAVEL.DISCOVER. REMEMBER US!!",
    para: [
      " We have a package for anyone and everyone, no matter if you’relooking for budget options or a luxury holiday. We specialize in alldomestic and international packages and have extensive experience indesigning island holidays to Bali, Singapore, Mauritius, Maldives,Thailand, Sri Lanka along with cities like Hong Kong and Macau. We have a huge customer base with highly satisfactory experience for Europe, UK, New Zealand, and Australia. With Flip Trip you can turn your boring holidays into adventurous vacations. Experiencebeautiful nature, lush valleys, pristine beaches, ancient monuments,religious places, historical destinations, and cultural hubs: wewill plan it all.",
    ],
  };

  const contextData3 = {
    head: "Why choose Flip Trip Holidays?",
    para: [
      "Experience and knowledge go a long way in the travel industry and we’re proud to have both. We have been in business since the last 8years and have built a strong network of hospitality brands, airline operators, tourism boards, cruise liners and on-ground vendors required to execute a smooth holiday experience for our clients.",
      " In these 8 years we have served over 50000 happy travellers and have garnered over 1000 positive reviews on google and other onlineplatforms. These reviews speak volumes about the trust bestowed uponus by our patrons.",
      " Our comprehensive range of services includes Visa assistance, cruise bookings, sightseeing tours, 5-star domestic hotel bookings, international flights, private charters, corporate bookings and everything else under the sun.",
      "  Choose Flip Trip Holidays once and we promise you there's no going back: you will always choose us for all your travel need.",
    ],
  };

  return (
    <div className="container mx-auto">
      <section>
        <p className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-center py-10 md:py-16 lg:py-20 text-primary">
          About Us
        </p>
      </section>
      <HeadAndPara heading={contextData.head} paragraph={contextData.para} />
      <HeadAndPara heading={contextData2.head} paragraph={contextData2.para} />
      <section className="flex justify-center pb-10">
        <HoverButton title={"Contact Us"} />
      </section>
      <HeadAndPara heading={contextData3.head} paragraph={contextData3.para} />
    </div>
  );
}

export default AboutUs;
