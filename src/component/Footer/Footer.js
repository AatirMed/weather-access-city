import {
  showSearch,
  ChangeAddSearch,
  ChangeAddShowInput,
  ChangeSearchShowInput,
} from "../../part/store/store";
import { useDispatch, useSelector } from "react-redux";
import React, { Fragment } from "react";
import Items from "./Items-left/Items";
import {SearchIcon,PlusIcon} from '@primer/octicons-react';

const Footer = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  // console.log(store.show.addShow)
  return (
    <Fragment>
      <div className="btn-items">
        <div className="btn">
          <button
            className={
              store.show.add ? "add button button-hover" : "add button"
            }
            onClick={() => {
              if (store.show.add) {
                dispatch(ChangeAddShowInput(false));
                dispatch(ChangeAddSearch(true));
              } else if (store.show.add === false) {
                dispatch(ChangeSearchShowInput(false));
                dispatch(ChangeAddShowInput(true));

                // change store from search to data
                dispatch(ChangeAddSearch(true));
              }
            }}
          ><PlusIcon size={14} /></button>
          <button
            className={
              store.show.search ? "search button button-hover" : "search button"
            }
            onClick={() => {
              if (store.show.search) {
                dispatch(ChangeSearchShowInput(false));
                dispatch(ChangeAddSearch(true));
              } else if (store.show.search === false) {
                dispatch(ChangeSearchShowInput(true));
                dispatch(ChangeAddShowInput(false));

                dispatch(ChangeAddSearch(false));
                if (store.AddSearchChange) dispatch(showSearch(store.data));
              }
            }}
          ><SearchIcon size={16} /></button>
        </div>
        <div className="items">
          <Items />
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
