const About = () => {
  return (
    <>
      <div className=" sm:h-full md:h-screen min-w-[185px] bg-slate-200 p-4 bg-no-repeat bg-contain bg-center bg-blend-lighten">
        <div className="h-full flex">
          <section className="mt-5 text-justify">
            <h1 className="text-xl font-bold">
              About Monthly Budget Calculator
            </h1>
            <div className="before:p-5 text-lg mt-3">
              <p>
                Welcome to the Monthly Budget Calculator, a simple yet powerful
                tool designed to help you manage your finances effectively. Our
                application is built using cutting-edge technologies such as
                HTML, CSS, Tailwind CSS, JavaScript, and ReactJS, ensuring a
                seamless and intuitive user experience.
              </p>
              <br/>
              <h2 className="font-bold">What is the 50/30/20 Rule?</h2>
              <p>
                The 50/30/20 rule is a widely accepted principle for allocating
                one's income towards different expenses. The rule suggests that:
                50% of your income should go towards Needs, such as:
                Rent/Mortgage Utilities (electricity, water, gas, internet)
                Groceries Transportation (car loan/insurance, gas, maintenance)
                Minimum debt payments (credit cards, loans) 30% towards Wants,
                such as: Entertainment (dining out, movies, hobbies) Travel
                Personal expenses (clothing, accessories, gadgets) Upgrades
                (latest smartphones, laptops, etc.) 20% towards Savings, such
                as: Emergency fund Retirement savings Long-term investments
                (stocks, bonds, etc.) Debt repayment (paying off high-interest
                loans or credit cards)
              </p>
                  <br/>
              <h2 className="font-bold">How Does the Monthly Budget Calculator Work?</h2>
              <p>
                Our application uses the 50/30/20 rule to help you allocate your
                income effectively. Simply enter your monthly income, and our
                calculator will automatically allocate the amounts towards
                needs, wants, and savings. You can then adjust the amounts as
                per your individual requirements.
              </p>
            </div>
            <p className="mt-3 text-lg">
              <mark>IMPORTANT:</mark> The illustrations or other information generated by the
              calculators are hypothetical in nature, do not reflect actual
              investment results, and are not guarantees of future results.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;