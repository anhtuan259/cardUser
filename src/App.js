import React from "react";
import user from "./images/user.png";
import "./App.css";

class App extends React.Component {
  state = {
    name: 'alex bakery',
    location: 'localhost',
    description: 'software, speaker',
    likes: 'cats, wine'
  }
  render() {
    const { name, location, description, likes } = this.state;
    return (
      <div className="App">
        <section className="image">
          <img src={user} alt="user" />
        </section>
        <section className="infor">
          <p>
            {" "}
            <span className="infor_user">I am</span> a {description}
          </p>
          <p>
            {" "}
            <span className="infor_user">I like</span> {likes}
          </p>
          <hr />

          <p>
            <span className="infor_user">Name:</span>
            <span className="des_user">{name}</span>
          </p>
          <p>
            <span className="infor_user">Location: </span>
            <span className="des_user">{location}</span>
          </p>
        </section>
      </div>

    )
  }
}

export default App;
