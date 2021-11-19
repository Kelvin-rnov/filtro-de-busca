import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import JSONDATA from './MOCK_DATA_FULL.json';

export default function App() { 
  // Variável de estado: "search" - variável; "setSearch" - função
  const [search, setSearch] = useState('');

  return (
    <div className="container">
      <h1 className="title text-center mt-4 mb-3">SudoSu Search</h1>
      
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">Pesquisate:</span>
        </div>
        <input
          className="form-control"
          placeholder="Linus"
          aria-describedby="basic-addon1"

          type="text"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
        {JSONDATA.filter((val) => {
          if(setSearch === "") {
            return  val;
          } else if (val.first_name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
            return val;
          }
        }).map((val) => {
              return (
                  <tr>
                    <th scope="row">{val.id}</th>
                    <td>{val.first_name}</td>
                    <td>{val.last_name}</td>
                    <td>{val.gender}</td>
                  </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

// https://www.youtube.com/watch?v=mZvKPtH9Fzo