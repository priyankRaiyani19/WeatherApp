import Card from "../../../component/Card";

export function ForecastCard({ day, src, temp, i }: { day: string; src: string; temp: number; i: string }) {
  return (
    <Card className="bg-blue-900/30 rounded-lg p-4 flex flex-col items-center transition-transform hover:scale-105">
      <p className="font-medium text-blue-200">
        {i === "0" ? "Today" : day}
      </p>
      <img src={src} alt={src} className="w-16 h-16 my-2" />
      <span className="text-2xl font-bold">{`${temp}°C`}</span>
    </Card>
  );
}
