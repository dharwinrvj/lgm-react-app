import { useState } from "react";
import axios from "axios";
function App() {
  const [result, setResult] = useState([]);
  // on clicking API button
  const handleClick = (event) => {
    event.preventDefault();
    axios.get("https://reqres.in/api/users?page=1").then((data) => {
      console.log(data.data.data);
      setResult(data.data.data);
    });
  };
  // return
  return (
    <div className="App">
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand" href="#">
          <img src="https://img.icons8.com/wired/40/000000/d.png" />
          win
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <button
            className="btn btn-success btn-sm ml-auto mx-5"
            onClick={handleClick}
          >
            Get Users
          </button>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {result.map((r) => (
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="card mr-2 mt-5 text-white bg-primary p-1 shadow-lg rounded border border-dark"
                style={{ maxWidth: "540px" }}
              >
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={r.avatar} class="img-fluid rounded" alt="#"></img>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{r.id}</h5>
                      <p className="card-text">
                        <strong>First Name: </strong> {r.first_name}
                      </p>
                      <p className="card-text">
                        <strong>Last Name: </strong> {r.last_name}
                      </p>
                      <p className="card-text">
                        <strong>Email: </strong> {r.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
