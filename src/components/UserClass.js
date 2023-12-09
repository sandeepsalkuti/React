import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "san",
        repo: "dep",
        repoURL: "reddy",
      },
    };
    //console.log("child constructor");
  }
  async componentDidMount() {
    //console.log("child component did mount");
    const data = await fetch("https://api.github.com/users/sandeepsalkuti");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  render() {
    //console.log("child render");
    const { name, public_repos, repos_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name:{name}</h2>
        <h2>NumberOfRepos:{public_repos} </h2>
        <h3>RepoURL:{repos_url} </h3>
      </div>
    );
  }
}

export default UserClass;
