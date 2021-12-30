import Search from "./Search";
import React from "react";
import { useSelector } from "react-redux";
import "./SearchPage.css";
import useGoogleSearch from "./useGoogleSearch";
import "./SearchPage.css";
import googlePagination from "../images/googlePagination.JPG";
import Footer from "./Footer";
import response from "./response";
import { Link } from "react-router-dom";

import FilterOption from "./FilterOption";

import SearchIcon from "@material-ui/icons/Search";
import Description from "@material-ui/icons/Description";
import { Image } from "@material-ui/icons";
import { ShoppingCart } from "@material-ui/icons";
import { Room } from "@material-ui/icons";
import { MoreVert } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

function SearchPage() {
  // the email i used is umarkhatab467
  // SEARCH ENGINE ID =a57fe5aa741866cb8

  // https://developers.google.com/custom-search/v1/using_rest
  // API Key = "AIzaSyBai_laXu6N9l9mwMo_1cQuulmvEcnQuyI"

  // https://cse.google.com/cse/create/new
  const searchTerm = useSelector((state) => state.searchTerm);
  //Live Api call
  const { data } = useGoogleSearch(searchTerm);

  const pageNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  //const data = response;
  const history = useHistory();

  if (!searchTerm) {
    history.push("/");
    return (
      <div>
        {/* <h4>Reload the page</h4>
       */}
      </div>

    );
  }

  console.log(data);

  return (
    <div>
      <div className="searchPage">
        <div className="searchPage__header">
          <Link to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
              alt="Company Logo"
            />
          </Link>

          <Search hideButtons />
        </div>
        <div className="filters">
          <FilterOption Icon={SearchIcon} selected title="All" />
          <FilterOption Icon={Description} title="News" />
          <FilterOption Icon={Image} title="Images" />
          <FilterOption Icon={ShoppingCart} title="Shopping" />
          <FilterOption Icon={Room} title="Maps" className="extra__filter" />
          <FilterOption
            Icon={MoreVert}
            title="More"
            className="extra__filter"
          />
          <FilterOption extra title="Settings" className="extra__filter" />
          <FilterOption title="Tools" className="extra__filter" />
        </div>
      </div>

      <div className="searchPage__results">
        {searchTerm ? (
          <p className="searchPage__resultCount">
            About {data?.searchInformation.formattedTotalResults} Results (
            {data?.searchInformation.formattedSearchTime}seconds)
          </p>
        ) : (
          ""
        )}
      </div>
      {data?.items.map((item) => (
        <div className="searchPage__result">
          <a className="searchPage__displayLink" href={item.link}>
            {item.displayLink}▽
          </a>
          <a className="searchPage__resultTitle" href={item.link}>
            {" "}
            <h2>{item.title}</h2>
          </a>
          <p className="searchPage__resultSnippet">{item.snippet}</p>
        </div>
      ))}
      <div className="searchPage__pagination">
        <center>
          <img src={googlePagination} alt="google Pagination Logo" />{" "}
        </center>
        <div className="pageNumbers">
          {pageNumbers.map((n) => {
            console.log(n);
            return (
              <a href="#">
                <p>{n}</p>
              </a>
            );
          })}
        </div>
      </div>

      <div className="searchPage__footer">
        <Footer />
      </div>
    </div>
  );
}

export default SearchPage;
