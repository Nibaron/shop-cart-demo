import React from "react";
import { useTitle } from "../hooks";
import { CustomizedCard } from "../components";
import img1 from "../assets/images/1002.png";

export const Cart = ({ title }) => {
    useTitle(title);
    return (
        <main>
            <section className="flex flex-col justify-center px-2">
                <div className="flex flex-col items-center">
                    <p className="text-4xl text-gray-700 font-bold my-10 dark:text-white">
                        Carts: 2
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
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
