import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className=" flex items-center flex-col">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex ">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-red-800">
            BudgetBeam
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Start creating your budget and manage your expenses. You can track
            your expenses and income, and get a clear picture of your financial
            situation.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-primary dark:bg-primary px-12 py-3 text-sm font-medium text-white dark:text-black shadow focus:outline-none focus:ring active:bg-red-500 dark:active:bg-red-300 sm:w-auto"
              href="/sign-in"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
      <Image
        src="/dashboard.png"
        alt="dashboard"
        width={1000}
        height={700}
        className="-mt-9 rounded-xl border-2"
      />
    </section>
  );
}

export default Hero;
