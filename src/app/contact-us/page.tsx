import Banner from "@/components/banner";
import ContactUsCard from "@/components/contact-us/contact-us-card";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  PhoneCall,
  Twitter,
} from "lucide-react";
import React from "react";

const page = () => {
  return (
    <>
      <Banner
        source="/assets/image/aboutImage.jpg"
        title="Contact Us"
        description="Beersheba - Haldwani"
      />
      <ContactUsCard />
    </>
  );
};

export default page;
