import { useState, useEffect } from "react";
// import { IGroup, IItem, IProgram } from "../interfaces";

const useServerData = props => {
  const [response, setResponse] = useState({
    groups: [],
    items: [],
    programs: []
  });

  useEffect(() => {
    async function fetchData() {
      // Pretend this data is coming from a server API request.
      "unsafe-inline";
      const data = await fetch("./fixture.json");
      console.log(data);
      setResponse(data);
    }

    fetchData();
  }, []);

  return response;
};
export default useServerData;
