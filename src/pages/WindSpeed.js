import { DataTable } from "../DataTable";
export function WindSpeed() {
  return (
    <>
      <h1>WindSpeed</h1>

      <DataTable dataType="wind_speed_10m" />
    </>
  );
}
