import Column from "./Column";

export default function Table() {
  const heures = [
    "06:00 - 10:00",
    "10:00 - 14:00",
    "14:00 - 18:00",
    "18:00 - 22:00",
    "22:00 - 02:00",
    "02:00 - 06:00",
  ];
  return (
    <>
      <Column title={"Houres"} content={heures}></Column>
      <Column
        title={"Syour"}
        content={[
          "Daniel",
          "David",
          "Raphael",
          "Daniel",
          "David Daniel David Daniel",
          "Raphael",
        ]}
      ></Column>
    </>
  );
}
