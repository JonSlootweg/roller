import React, { FunctionComponent } from "react";
import { Column } from "./Column";

type arrObj = {
  index: number;
  color: string;
};

type ContainerProps = {
  onAnimationEnd: (event: React.AnimationEvent<HTMLDivElement>) => void;
  onAnimationStart: (event: React.AnimationEvent<HTMLDivElement>) => void;
  colArray: arrObj[];
};

export const Container: FunctionComponent<ContainerProps> = ({
  onAnimationStart,
  onAnimationEnd,
  colArray,
  children,
}) => {
  console.log("REDOING COLOR ARRAY");

  return (
    <div
      id="col-container"
      className="container"
      onAnimationStart={onAnimationStart}
      onAnimationEnd={onAnimationEnd}
    >
      {colArray.map((element) => (
        <Column
          id={element.index.toString()}
          divStyle={{
            backgroundColor: element.color,
            borderLeft: element.index === 0 ? "none" : "1px dotted black",
            borderRight:
              element.index === colArray.length - 1
                ? "none"
                : "1px dotted black",
          }}
          key={element.index}
        />
      ))}
    </div>
  );
};
