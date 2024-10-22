import React from "react";

const landingPage = () => {
    return (
        <div className=" w-full flex flex-col items-center ">
            <div>
                <h1 className="text-3xl">
                    Learn <span className="opacity-50">the core of coding</span>{" "}
                    <span className="underline underline-offset-4">Algorithms</span>,{" "}
                    <span className="opacity-50">not just the trendy</span> Problems.
                </h1>
                <p className="pt-3 text-justify">
                    Go beyond the buzz of interview prep by building a deep understanding of algorithms that form the foundation of a strong tech career.
                </p>
                <p className="pt-2 text-justify">
                    In the fast-paced world of tech, it’s common to focus on memorizing popular interview questions. However, algorithms are the true core of coding, empowering you to solve complex problems with precision and creativity.
                </p>
            </div>
        </div>
    );
};

export default landingPage;