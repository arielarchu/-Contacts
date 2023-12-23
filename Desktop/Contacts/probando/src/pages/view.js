import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../store/store";
import defaultImage from "../photos/blue.png";

export default function View() {
  const [item, setItem] = useState({});
  const params = useParams();
  const store = useAppContext();

  useEffect(() => {
    const people = store.getItem(params.peopleId);
    setItem(people);
  }, []);

  return (
    <Layout>
       <div>
  <img src={item?.cover || defaultImage} width="300" />
      </div>

      <h2>{item?.title}</h2>
      <div>{item?.author}</div>
      <div>{item?.intro}</div>
      <div>{item?.review}</div>
    </Layout>
  );
}