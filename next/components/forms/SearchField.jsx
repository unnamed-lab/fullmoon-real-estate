"use client";

function SearchField({ filter = true, customStyles }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      {filter ? (
        <div className="input_group">
          <div className="input_selector">
            <label htmlFor="allSearch">All</label>
            <input
              type="radio"
              name="searchFilter"
              id="allSearch"
              defaultChecked
            />
          </div>
          <div className="input_selector">
            <label htmlFor="saleSearch">For Sale</label>
            <input type="radio" name="searchFilter" id="saleSearch" />
          </div>
          <div className="input_selector">
            <label htmlFor="listSearch">New Listings</label>
            <input type="radio" name="searchFilter" id="listSearch" />
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="input_group">
        <div className="search_group" style={customStyles}>
          <input
            type="search"
            name="searchInput"
            id=""
            className="search_input"
            placeholder="Enter a address, town, street ,zip"
          />
          <button type="submit" className="btn big rounded secondary">
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default SearchField;
