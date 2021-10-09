import classNames from "classnames";
import React, { useContext, useEffect } from "react";
import { IStars, StarsContext, StarsProvider } from "../stars-provider";

export interface IProps {
  setNum: string;
  isLarge?: boolean;
}

export default function Star(props: IProps) {
  const stars = useContext<IStars>(StarsContext);

  function iconClasses() {
    return classNames({
      "fa-2x": props.isLarge,
      "fa-star": true,
      fas: stars.hasStar(props.setNum),
      far: !stars.hasStar(props.setNum),
    });
  }
  return (
    <>
      <span
        className="icon has-text-link"
        onClick={() => stars.toggleStar(props.setNum)}
      >
        <i className={iconClasses()} />
      </span>
    </>
  );
}
