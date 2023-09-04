import React from "react";
import VerticalTabs from "@/components/dashboard/VerticalTabs";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div><span className="tex-red-500 text-2xl text-bold">for admin: </span>
        For any kind of data manipulation, best and easy way is to manipulate directly from mongodb atlas dashboard. Visit
        <span><Link href="https://cloud.mongodb.com/v2/64ecc91b66f0ec497b646617#/overview">Mongodb Atlas dashboard</Link></span> OR <span ><Link href="https://www.mongodb.com/atlas">MongoDB atlas</Link></span></div>
      <VerticalTabs />
    </>
  );
};

export default page;
