"use client"
// import Team_mem from "./component/Team_member_box";
import CabinetCards from "@/components/cards/CabinetCard";
import Check from "@/components/Check";
import { InitiativeData } from "@/constants";
import SectionWrapper from "@/hoc/SectionWrapper";

const ComPage = () => {
    return (<>


        <section>
            {/* <div className=" flex items-center justify-center flex-col mx-auto pt-13">
                <h3 className="font-bold text-2xl text-[#fdbe33]">  Meet Our Cabinet</h3>
                <p className="text-[#4A4C70] text-4xl text-center letter-wider font-semibold px-13 py-7 ">
                    Guys who are responsible for smooth workening of Prayan Foundation
                </p>
            </div> */}

            <CabinetCards/>
        </section>
        <section className='mt-5'>
            <div className=" flex items-center justify-center flex-col mx-auto pt-13">
                <h3 className="font-bold text-2xl text-[#fdbe33]"> Our Initiatives</h3>
                <p className="text-[#4A4C70] text-4xl text-center letter-wider font-semibold px-13 py-7 ">
                    Let&apos;s know about the working of our Units across India
                </p>
            </div>

            <Check />
        </section>
    </>
    )

}

export default ComPage;
