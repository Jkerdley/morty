import { useParams } from "react-router-dom";

export const EpisodePage = () => {
  const { id } = useParams();
  console.log("id", id);

  return <div>asd{id}</div>;
};
