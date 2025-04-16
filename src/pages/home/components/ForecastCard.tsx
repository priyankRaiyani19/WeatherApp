import Card from "../../../component/Card";

export function ForecastCard({ day, src, temp, i }: { day: string; src: string; temp: number; i: string }) {
  return (
    <Card className="flex-col ">
      <p className="font-medium text-blue-200">
        {i === "0" ? "Today" : day}
      </p>
      <img src={src} alt={src} className="w-16 h-16 my-2" />
      <span className="text-2xl font-bold">{`${temp}°C`}</span>
    </Card>
  );
}
