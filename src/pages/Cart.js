import React from "react";
import { useTitle } from "../hooks";

export const Cart = ({title}) => {
    useTitle(title);
    return (
        <main>
            <section className="flex flex-col justify-center px-2">
                <div>Cart</div>
            </section>
        </main>
    );
};
