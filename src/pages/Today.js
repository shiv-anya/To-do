import React from "react";
import CategoryWise from "../components/CategoryWise";
import { useSelector } from "react-redux";

const Today = () => {
  return <CategoryWise title={"today"} />;
};

export default Today;
