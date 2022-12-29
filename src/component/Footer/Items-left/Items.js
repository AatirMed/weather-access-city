import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Items = () => {
  const [item_all, setItemAll] = useState(0);
  const [item_active, setItemActive] = useState(0);
  const [item_completed, setItemCompleted] = useState(0);

  const store = useSelector((state) => state);
  useEffect(() => setItemAll(store.data.length), [store.data]);
  useEffect(
    () =>
      setItemActive(
        store.data.reduce((Nbr, obj) => Nbr + (obj.check === false ? 1 : 0), 0)
      ),
    [store]
  );
  useEffect(
    () =>
      setItemCompleted(
        store.data.reduce((Nbr, obj) => Nbr + (obj.check === true ? 1 : 0), 0)
      ),
    [store]
  );

  return (
    <Fragment>
      <div className="items_border">
        <span className="nbr">{item_all}</span>
        <span> All</span>
      </div>
      {store.show.search ? (
        <Fragment>
          <div className="items_border">
            <span className="nbr">{item_active}</span>
            <span> Active</span>
          </div>
          <div className="items_border">
            <span className="nbr">{item_completed}</span>
            <span>Completed</span>
          </div>
        </Fragment>
      ) : null}
    </Fragment>
  );
};

export default Items;
