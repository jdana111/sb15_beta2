import { Link, useParams } from "react-router-dom";
import { getCityPrograms } from "../../apiClient/cities";

const SelectProgram = () => {
  const { cityId } = useParams();
  getCityPrograms(cityId).then((p) => {
    console.log("cp", p);
  });
  return (
    <div>
      <h1>SelectProgram</h1>
      <nav>
        <Link to="/">Program</Link>
      </nav>
    </div>
  );
};

export default SelectProgram;
