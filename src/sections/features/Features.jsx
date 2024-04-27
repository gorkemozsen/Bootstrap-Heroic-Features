import Feature from "../../components/Feature";

function Features() {
  const card1 = {
    title: "Solar Power",
    desc: "Utilize solar panels to generate clean energy and save money.",
    icon: "sun-fill",
  };
  const card2 = {
    title: "Wind Turbines",
    desc: "Wind energy is a renewable and clean source of power.",
    icon: "wind",
  };
  const card3 = {
    title: "Hydropower",
    desc: "Produce electricity from water power and protect nature.",
    icon: "droplet-fill",
  };
  const card4 = {
    title: "Biomass Energy",
    desc: "Convert organic waste into energy, keeping the environment clean.",
    icon: "tree",
  };
  const card5 = {
    title: "Geothermal",
    desc: "Use earth’s heat for constant and reliable energy supply.",
    icon: "moisture",
  };
  const card6 = {
    title: "Energy Saving",
    desc: "Increase efficiency to reduce costs and conserve the environment.",
    icon: "life-preserver",
  };

  const cardsArr = [card1, card2, card3, card4, card5, card6];

  return (
    <>
      <section className="pt-4">
        <div className="container px-lg-5">
          <div className="row gx-lg-5">
            {cardsArr.map((card, index) => (
              <Feature
                key={index}
                title={card.title}
                desc={card.desc}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Features;
