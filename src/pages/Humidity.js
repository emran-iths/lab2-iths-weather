import { DataTable } from "../DataTable";

export function Humidity() {
  return (
    <>
      <h1>Humidity</h1>
      <DataTable dataType="relative_humidity_2m" />
    </>
  );
}
