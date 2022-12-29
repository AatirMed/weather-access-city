import { useDispatch, useSelector } from "react-redux";
import { showSearch } from "../../part/store/store";
import React, { useEffect, useState } from "react";

const InputFormSearch = () => {
  const store = useSelector((state) => state);
  const [one] = useState([...store.data]);
  const dispatch = useDispatch();

  useEffect(() => console.log("change"), [store.data]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        onChange={(event) => {
          const x = [];
          one.map((ele) =>
            ele.todo.slice(0, event.target.value.length) === event.target.value
              ? x.push({ ...ele })
              : null
          );
          dispatch(showSearch([...x]));
        }}
      />
      {store.search.length === 0 ? (
        <p className="vide">There are no items.</p>
      ) : null}
    </div>
  );
};

export default InputFormSearch;
