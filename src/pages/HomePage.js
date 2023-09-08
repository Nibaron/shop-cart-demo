import React from "react";
import { useTitle } from "../hooks";
import { CustomizedCard } from "../components";
import img1 from "../assets/images/1002.png";

export const HomePage = ({ title }) => {
    useTitle(title);
    return (
        <main>
            <section className="flex flex-col justify-center px-2">
                <div className="grid grid-cols-3 gap-4">
                    <CustomizedCard
                        title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
                        imageSrc={img1}
                        price="599"
                        rating="4.8"
                    />
                    <CustomizedCard
                        title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
                        imageSrc={img1}
                        price="599"
                        rating="4.8"
                    />
                    <CustomizedCard
                        title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
                        imageSrc={img1}
                        price="599"
                        rating="4.8"
                    />
                    <CustomizedCard
                        title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
                        imageSrc={img1}
                        price="599"
                        rating="4.8"
                    />
                    <CustomizedCard
                        title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
                        imageSrc={img1}
                        price="599"
                        rating="4.8"
                    />
                    <CustomizedCard
                        title="Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport"
                        imageSrc={img1}
                        price="599"
                        rating="4.8"
                    />
                </div>
            </section>
        </main>
    );
};
