import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Avatar, Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Settings } from "@material-ui/icons";
import Apps from "@material-ui/icons/Apps";
import { UncontrolledTooltip } from "reactstrap";

function Search({ hideButtons = false }) {
  const [input, setInput] = useState("");
  const history = useHistory();
  const searchTerm = useSelector((state) => state.searchTerm);

  console.log("Search term is ", searchTerm);

  const dispatch = useDispatch();

  const search = (e) => {
    e.preventDefault();
    if (!input) {
      console.log("search Term is ");
      history.push("/");
      return;
    }
    console.log("Search results for ", input);
    dispatch({
      type: "SET_SEARCH_TERM",
      searchTerm: input,
    });
    history.push("/search");
  };

  return (
    <form>
      <div className="search__outerDiv">
        <div
          className="search"
          style={{ marginTop: hideButtons ? "10px" : "40px" }}
        >
          <div className="search__input__container">
            <div className={"search__input "}>
              <SearchIcon className="search__inputIcon" />
              <input
                type="text"
                onChange={(e) => setInput(e.target.value)}
                defaultValue={searchTerm ? searchTerm : ""}
                style={{
                  backgroundColor: !hideButtons ? "rgb(29, 29, 29)" : "white",
                  color: !hideButtons ? "white" : "black",
                }}
                className={hideButtons ? "white" : ""}
                placeholder={"Search Google or type a URL"}
              />
            </div>
            <MicIcon className="image__gradient" />
          </div>

          {hideButtons && (
            <div className="search__rightside__navigation d-flex justify__space">
              <Settings className="search__rightside__navigationIcon" />

              <Apps id="apps" className="search__rightside__navigationIcon" />
              <img
                id="userinfo"
                className="rounded-circle"
                src="https://5.imimg.com/data5/RO/RA/JE/SELLER-3866941/gaming-desktop-pc-500x500.jpg"
              />
            </div>
          )}
        </div>
      </div>

      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" variant="outlined" onClick={search}>
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search__buttonsHide">
          <div className="search__buttons">
            <Button type="submit" variant="outlined" onClick={search}>
              Google Search
            </Button>
            <Button variant="outlined">I'm Feeling Lucky</Button>
          </div>
        </div>
      )}
    </form>
  );
}

export default Search;
