import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "san",
        repo: "dep",
        repoURL: "reddy",
      },
    };
    //console.log("parent constructor");
  }
  async componentDidMount() {
    // console.log("parent component did mount");
    const data = await fetch("https://api.github.com/users/sandeepsalkuti");
    const json = await data.json();
  }
  render() {
    //console.log("parent render");
    return (
      <div>
        <h1>About Page</h1>
        <h2>This page contains website information</h2>
        {/* <User
        Name={"sandeep(function)"}
        AccountStatus={"Actives"}
        Github={"opened"}
      /> */}
        <UserClass
          Name={"sandeep(class)"}
          AccountStatus={"Actives"}
          Github={"opened"}
        />
      </div>
    );
  }
}
// const About = () => {
//   return (
//     <div>
//       <h1>About Page</h1>
//       <h2>This page contains website information</h2>
//       {/* <User
//         Name={"sandeep(function)"}
//         AccountStatus={"Actives"}
//         Github={"opened"}
//       /> */}
//       <UserClass
//         Name={"sandeep(class)"}
//         AccountStatus={"Actives"}
//         Github={"opened"}
//       />
//     </div>
//   );
// };

export default About;
