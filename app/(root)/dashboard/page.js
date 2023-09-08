import React from "react";
import VerticalTabs from "@/components/dashboard/VerticalTabs";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="p-3 md:p-5 text-center  items-center justify-center bg-red-300 mx-auto"><span className="font-bold text-2xl text-bold ">for admin: </span>
        <ul>
          <li> For any kind of data manipulation, best and easy way is to manipulate directly from mongodb atlas dashboard. Visit
            <span className="text-blue-600 font-bold cursor:pointer"><Link href="https://cloud.mongodb.com/v2/64ecc91b66f0ec497b646617#/overview" target="_blank"> Mongodb Atlas dashboard</Link></span > OR <span className="text-blue-600 font-bold cursor:pointer"><Link href="https://www.mongodb.com/atlas" target="_blank">MongoDB atlas</Link></span></li>
            <li className="font-bold">If you can&apos;t see admin dashboard or any other kind of error, try refreshing the page</li>
        </ul>
      </div>
      <VerticalTabs />
    </>
  );
};

export default page;
