import { MissionT } from "./MissionT";

const features = [
  {
    title: "Mission",
    description:
      "To empower Kenyan flower farmers by providing them with the tools and expertise to succeed in the global market.",
  },
  {
    title: "Vision",
    description:
      "To become the most trusted and reliable partner for flower exporters in Kenya.",
  },
  {
    title: "Values",
    description:
      "Integrity, excellence, innovation, and collaboration are at the heart of everything we do",
  },
];

export const Mission = () => {
  return (
    <div className=" text-white py-[10px] sm:py-6">
      <div className="container"></div>
      <div className="mt-16 flex flex-col sm:flex-row gap-4">
        {features.map(({ title, description }) => (
          <MissionT title={title} description={description} key={title} />
        ))}
      </div>
    </div>
  );
};
