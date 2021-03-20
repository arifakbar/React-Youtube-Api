import React , {useState} from "react";

function Search(props) {
  const [term,setTerm] = useState("");
  const onFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(term);
  };
    return (
      <div>
        <form onSubmit={onFormSubmit} className="ui form">
          <div className="field">
            <label>Search</label>
            <input
              type="text"
              value={term}
              onChange={(e) => setTerm(e.target.value )}
              placeholder="Search to see video..."
            />
          </div>
        </form>
      </div>
    );
}

export default Search;
