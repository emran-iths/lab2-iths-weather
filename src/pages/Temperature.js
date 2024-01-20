import { DataTable } from "../DataTable";
export function Temperature() {
  return (
    <>
      <h1>Temperature</h1>
      <DataTable dataType="temperature_2m" />
    </>
  );
}
