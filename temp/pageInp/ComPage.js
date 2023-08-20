"use client"
// import Team_mem from "./component/Team_member_box";
import Cards from "@/components/Cards";
import Initbx from "./component/check";
import {Cardsdata} from "./component/data";


export default function ComPage() {
    return (<>
        <section>
            <img src="https://source.unsplash.com/random/"></img>
        </section>
        <section>
            <div class="container">
                <div class="section-header text-center">
                    <p>Meet Our Cabinet</p>
                    <h2>Guys who are responsible for smooth workening of Prayan Foundation</h2>
                </div>
            </div>
            <Cards/>
        </section>
        <section>
            <div class="container">
                <div class="section-header text-center">
                    <p>Our Initiatives</p>
                    <h2>Let's know about the working of our Units across India</h2>
                </div></div>
            <Initbx Cardsdata={Cardsdata} />
        </section>
    </>
    )

}

