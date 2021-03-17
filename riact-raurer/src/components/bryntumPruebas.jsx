import BryntumGrid from "./BryntumGrid";
import "bryntum-grid/grid.stockholm.css";
import { useRef } from "react";

export default function BryntumPruebas() {
  const grid = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");

    // console.log(grid.current.store._storage._values[0].data.city)
    // grid.current.store.filter((e)=>e.city==="Washington")

    // grid.current.store.filter((e)=>e.division==="Ocotlan")
    // grid.current.store.filter((e)=>e.city==="Pittsburgh")

    // grid.current.store.filter({
    //   property: "division",
    //   value: "Ocotlan",
    //   operator: "=",
    // });

    let buscar="oCoT"
    buscar=buscar.toLocaleUpperCase()
    
    grid.current.store.filter({
        filterBy : record => record.division.includes(buscar)
      });
  };

  //Washington

  const clearFilter = (e) => {
    e.preventDefault();
    grid.current.store.clearFilters();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input />
        <button>Click</button>
      </form>
      <div style={{ height: "100px", width: "50vw" }}>
        <BryntumGrid
          ref={grid}
          minHeight={"15em"}
          // Initial row height

          // Columns in grid
          columns={[
            { field: "team", text: "Team", flex: 1 },
            { field: "city", text: "City", flex: 1 },
            { field: "division", text: "Division", flex: 1 },
          ]}
          // Rows to display in grid
          data={[
            {
              team: "Capitals",
              city: "Washington",
              division: "Metropolitan",
              conference: "Eastern",
            },
            {
              team: "Penguins",
              city: "Pittsburgh",
              division: "Metropolitan",
              conference: "Eastern",
            },
            {
              team: "Penguins",
              city: "Pittsburgh",
              division: "OCOTLAN",
              conference: "Eastern",
            },
            {
              team: "Penguins",
              city: "Washington",
              division: "OCOTLAN",
              conference: "Eastern",
            },
          ]}
        />
      </div>
      <button style={{ float: "right" }} onClick={clearFilter}>
        clear filter
      </button>
    </>
  );
}
