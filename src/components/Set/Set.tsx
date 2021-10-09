import React, { useEffect, useState } from "react";
import { ajax } from "rxjs/ajax";
import Star from "../star/star";
import styles from "./Set.module.scss";

export interface ISet {
  last_modified_dt: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  set_num: string;
  set_url: string;
  theme_id: number;
  year: number;
}

export default function Set(props: any) {
  const [set, setSet] = useState<ISet>();
  useEffect(() => {
    const secret = "cef91563c41612c871ed256c1a22e628";

    ajax
      .getJSON(
        `https://rebrickable.com/api/v3/lego/sets/${props.match.params.set_num}/?key=${secret}`
      )
      .subscribe((set: any) => setSet(set));
  }, []);
  return (
    <>
      <div className="columns">
        <div className="column title">{set?.name}</div>

        <div className="column is-narrow">
          <Star setNum={set?.set_num as string} isLarge={true} />
        </div>
      </div>
      <table className="table">
        <thead>
          <th>Number of parts</th>
          <th>Year</th>
        </thead>
        <tbody>
          <td>{set?.num_parts}</td>
          <td>{set?.year}</td>
        </tbody>
      </table>
      <img className="w-full" src={set?.set_img_url} />
    </>
  );
}
