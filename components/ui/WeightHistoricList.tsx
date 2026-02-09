import WeightHistoricCard from "./weightHistoricCard";

type WeightEntry = {
  date: string;
  value: number;
};

type Props = {
  data: WeightEntry[];
  unit?: string;
};

export default function WeightHistoryList({
  data,
  unit = "kg",
}: Props) {
  const sortedData = [...data].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      {sortedData.map((item, index) => {
        const previous = sortedData[index + 1];

        const delta = previous
          ? Number((item.value - previous.value).toFixed(1))
          : null;

        return (
          <WeightHistoricCard
            key={item.date}
            date={item.date}
            value={item.value}
            delta={delta}
            unit={unit}
          />
        );
      })}
    </>
  );
}
