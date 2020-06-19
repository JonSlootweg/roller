import React from "react";

type ColumnProps = {
  id: string,
  divStyle: {
    backgroundColor: string;
    borderLeft: string;
    borderRight: string;
  };
};

export const Column = ({ id, divStyle }: ColumnProps) => {
  return <div id = {id} style={divStyle}></div>;
};
