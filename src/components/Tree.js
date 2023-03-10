import React from "react";
import TreeIcon from "../icons/tree-icon";
import { useSelector } from "react-redux";
import Apple from "../components/Apple";
import "../styles/tree.scss";

const Tree = (props) => {
  const shakeTree = useSelector((state) => state.shake.shake);
  // ağaçtaki elma sayısını belirleme
  const apples = new Array(5).fill(0);
  return (
    <div
      className={`tree-container ${shakeTree ? "tree-container--shaking" : ""}`}
    >
      <TreeIcon size="300px" color="currentColor" />
      {apples.map((apple, index) => (
        <Apple
          key={index}
          x={60 + (index + 1) * 24}
          fall={index % 2 === 1}
          delay={index * 750}
        />
      ))}
    </div>
  );
};

export default Tree;
