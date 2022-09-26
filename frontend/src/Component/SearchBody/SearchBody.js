import React, { useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { getStocks } from "../../api/stock";
import "./SearchBody.css";

const SearchBody = () => {
  const [searchData, setSearchData] = useState([]);
  const [selectItem, setSelectItem] = useState("");
  console.log("Select Item Is ", selectItem);
  const items = [];

  useEffect(() => {
    getStocks().then((res) => {
      setSearchData(res.data);
    });
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  searchData.forEach((res) => {
    items.push({
      id: res._id,
      name: res.Name,
    });
  });

  console.log("ITEMS ARE ", items);

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
    setSelectItem(string);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
    setSelectItem(item.name);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>{item.name}</span>
      </>
    );
  };
  return (
    <>
      <div className="search__body-container">
        <h2 className="header__size">The easiest way to buy and sell stocks</h2>
        <h4 className="sub__header-size">Tech Mahindra Ltd</h4>
        <p className="para">
          Stock analysis and screening tool for investors in India
        </p>
      </div>
      <div className="search__container">
        <ReactSearchAutocomplete
          items={items}
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          autoFocus
          formatResult={formatResult}
          placeholder="Enter Stock Name"
        />
        <Box style={{ marginTop: "8%" }} sx={{ width: "100%" }}>
          {searchData
            .filter((item) => item.Name === selectItem)
            .map((res, key) => {
              return (
                <>
                  <h3 style={{ marginBottom: "5%" }}>{res.Name}</h3>
                  <Grid
                    key={key}
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Grid item xs={6}>
                      <Item>
                        <div>
                          <p>
                            EPS{" "}
                            <span style={{ fontWeight: "bold" }}>
                              ₹ {res.EPS}
                            </span>
                          </p>
                        </div>
                      </Item>
                    </Grid>
                    <Grid item xs={6}>
                      <Item>
                        <div>
                          <p>
                            Reserves{" "}
                            <span style={{ fontWeight: "bold" }}>
                              ₹ {res.Reserves}
                            </span>
                          </p>
                        </div>
                      </Item>
                    </Grid>

                    <Grid item xs={6}>
                      <Item>
                        <div>
                          <p>
                            Debt{" "}
                            <span style={{ fontWeight: "bold" }}>
                              ₹ {res.Debt}
                            </span>
                          </p>
                        </div>
                      </Item>
                    </Grid>
                  </Grid>
                </>
              );
            })}
        </Box>
      </div>
    </>
  );
};

export default SearchBody;
