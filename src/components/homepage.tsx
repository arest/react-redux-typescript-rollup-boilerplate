import * as React from "React";
import { Link } from 'ReactRouter';

const HomePage = () => {
  return (
    <div>
      <h1>React Redux Boilerplate</h1>

      <h2>Get Started</h2>
      <ol>
        <li>Review the <Link to="app">demo app</Link></li>
      </ol>
    </div>
  );
};

export default HomePage;
