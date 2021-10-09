import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ajax } from "rxjs/ajax";
import { ITheme } from "../../selected-themes-provider";
import styles from "./Sets.module.scss";
import { ISet } from "../../../set/Set";
import Star from "../../../star/star";

interface IProps {
  theme: ITheme;
}

export default function Sets(props: IProps) {
  const [sets, setSets] = useState<ISet[]>([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  const pageSize = 10;

  const secret = "cef91563c41612c871ed256c1a22e628";

  useEffect(() => {
    ajax
      .getJSON(
        `https://rebrickable.com/api/v3/lego/sets/?key=${secret}&theme_id=${props.theme.id}&page=${page}&page_size=${pageSize}`
      )
      .subscribe((res: any) => {
        setCount(res.count);
        setSets(res.results);
      });
  }, [page]);

  return (
    <>
      <div className="is-flex is-flex-diretion-row">
        <div className="title is-flex-grow-1">{props.theme.name}</div>
        <div className="dropdown-item is-flex is-flex-direction-row">
          <button
            className="button is-white"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            <span className="icon">
              <i className="fas fa-chevron-left"></i>
            </span>
          </button>
          <button
            className="button is-white"
            disabled={page >= count / pageSize}
            onClick={() => setPage(page + 1)}
          >
            <span className="icon">
              <i className="fas fa-chevron-right"></i>
            </span>
          </button>
        </div>
      </div>
      <table className="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Name</th>
            <th className="is-narrow">Number of parts</th>
            <th className="is-narrow">Year</th>
            <th className="is-narrow"></th>
            <th className="is-narrow"></th>
          </tr>
        </thead>
        <tbody>
          {sets.map((set) => (
            <tr key={set.set_num}>
              <td>{set.name}</td>
              <td>{set.num_parts}</td>
              <td>{set.year}</td>
              <td>
                <Link to={"/set/" + set.set_num}>
                  <span className={styles.action + " icon has-text-link"}>
                    <i className="fas fa-info-circle"></i>
                  </span>
                </Link>
              </td>

              <td>
                <span className={styles.action}>
                  <Star setNum={set.set_num} />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
