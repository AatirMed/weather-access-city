import { useSelector } from "react-redux";
import React, { Fragment } from "react";
import InputFormAdd from "./InputFormAdd";
import InputFormSearch from "./InputFormSearch";

const InputForm = () => {
  const store = useSelector((state) => state);
  return (
    <Fragment>
      {store.show.add ? <InputFormAdd /> : null}
      {store.show.search ? <InputFormSearch /> : null}
      {store.data.length === 0 &&
      store.show.add === false &&
      store.show.search === false ? (
        <p className="vide">There are no items.</p>
      ) : null}
    </Fragment>
  );
};

export default InputForm;
