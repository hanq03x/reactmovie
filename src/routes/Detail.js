import React from "react";
import "./About.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      // props를 console.log 해보면 내장된 함수들도 많다.
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div class="about__container">
          <h1>{location.state.title}</h1>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
