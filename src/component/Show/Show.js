import {
  delSearch,
  del,
  ChangeSelectedSearch,
  ChangeSelected,
} from "../../part/store/store";
import { useDispatch, useSelector } from "react-redux";
import React, { Fragment } from "react";
import Remove from "../../part/img/icons8-remove-48.png";
const Show = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  const HandChange = (id) => {
    dispatch(
      ChangeSelectedSearch([
        ...store.search.map((ele) =>
          ele.id === id
            ? ele.check === true
              ? { ...ele, check: false }
              : ele.check === false
              ? { ...ele, check: true }
              : null
            : { ...ele }
        ),
      ])
    );
    dispatch(
      ChangeSelected([
        ...store.data.map((ele) =>
          ele.id === id
            ? ele.check === true
              ? { ...ele, check: false }
              : ele.check === false
              ? { ...ele, check: true }
              : null
            : { ...ele }
        ),
      ])
    );
  };

  return (
    <Fragment>
      {store.AddSearchChange
        ? store.data.map((ele) => {
            return (
              <div key={ele.id} className="one-todo">
                <div className="one">
                  <input
                    type="checkbox"
                    defaultChecked={ele.check}
                    onClick={() => HandChange(ele.id)}
                  />
                  <span className={ele.check ? "checked" : "Nochecked"}>
                    {ele.todo}
                  </span>
                </div>
                <button
                  className="del"
                  onClick={() => {
                    dispatch(
                      del([...store.data.filter((obj) => obj.id !== ele.id)])
                    );
                    dispatch(
                      delSearch([
                        ...store.search.filter((obj) => obj.id !== ele.id),
                      ])
                    );
                  }}
                >
                  <img className="img_remove" src={Remove} alt={ele.id} />
                </button>
              </div>
            );
          })
        : store.search.map((ele) => {
            return (
              <div key={ele.id} className="one-todo">
                <div className="one">
                  <input
                    type="checkbox"
                    defaultChecked={ele.check}
                    onClick={() => HandChange(ele.id)}
                  />
                  <span className={ele.check ? "checked" : "Nochecked"}>
                    {ele.todo}
                  </span>
                </div>
                <button
                  className="del"
                  onClick={() => {
                    dispatch(
                      del([...store.data.filter((obj) => obj.id !== ele.id)])
                    );
                    dispatch(
                      delSearch([
                        ...store.search.filter((obj) => obj.id !== ele.id),
                      ])
                    );
                  }}
                >
                  <img className="img_remove" src={Remove} alt={ele.id} />
                </button>
              </div>
            );
          })}
    </Fragment>
  );
};

export default Show;
