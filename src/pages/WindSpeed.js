import { DataTable } from "../DataTable";
export function WindSpeed() {
  return (
    <>
      <h1>Wind speed</h1>

      <DataTable dataType="wind_speed_10m" />
    </>
  );
}
