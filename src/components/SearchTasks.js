import React, {useState} from 'react';
import './SearchTasks.css';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CancelPresentationOutlinedIcon from '@mui/icons-material/CancelPresentationOutlined';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function SearchTask({placeholder, tasks}) {
  const [filteredTaskList, setFilteredTaskList] = useState([]);
  const[searchTerm, setSearchTerm] = useState('');

  const handleFilter = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const newFilter = tasks.filter((value) => {
      return value.brandName.toLowerCase().includes(searchTerm.toLowerCase());
    });
      if (searchTerm === "") {
        setFilteredTaskList([]);
      } else {
        setFilteredTaskList(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredTaskList([]);
    setSearchTerm("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input 
          type="text" 
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredTaskList.length === 0 ? (
            <SearchOutlinedIcon />
          ) : (
            <CancelPresentationOutlinedIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      { }
      {filteredTaskList.length !== 0 && (
        <div className="taskListResult" key={filteredTaskList._id}>
          {filteredTaskList.slice(0, 5).map((value, key) => {
            return (
              <a className="taskListItem" href={value.link} target="_blank">
                { }
              </a>
            );
          })}
        <Button variant="contained" sendIcon={<SendIcon />}>
          Save Task to Your List
        </Button> 
        </div>
      )}
    </div>
  );
}

export default SearchTask;