import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Add } from "../../part/store/store";

const InputFormAdd = () => {
  const store = useSelector((state) => state);
  const [tap, setTap] = useState("");
  const dispatch = useDispatch();

  //initial if (send)
  useEffect(() => setTap(""), [store.data]);

  return (
    <div>
      <input
        type="text"
        value={tap}
        placeholder="Add..."
        onChange={(event) => setTap(event.target.value)}
        onKeyPress={(event) =>
          event.key === "Enter"
            ? tap !== ""
              ? dispatch(Add(tap))
              : null
            : null
        }
      />
      {store.data.length === 0 ? (
        <p className="vide">There are no items.</p>
      ) : null}
    </div>
  );
};

export default InputFormAdd;
