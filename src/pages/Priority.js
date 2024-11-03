import React from "react";
import { useParams } from "react-router-dom";
import PriorityWise from "../components/PriorityWise";

const Priority = () => {
  const { priority } = useParams();
  return <PriorityWise title={priority} />;
};

export default Priority;
