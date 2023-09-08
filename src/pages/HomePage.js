import React from "react";
import {useTitle} from "../hooks";

export const HomePage = ({title}) => {
  useTitle(title);
    return (
        <main>
            <section className="flex flex-col justify-center px-2">
                <h1>Homepage</h1>
            </section>
        </main>
    );
};
