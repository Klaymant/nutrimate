import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main id="home">
      <h2>Welcome to Nutrimate!</h2>
      <p>This website is intended to be a <strong>nutrition toolbox</strong>.</p>
      <p>For now you can:</p>
      <nav>
        <ul>
          <li><Link to='/bmi'>calculate your BMI.</Link></li>
          <li><Link to='/macros'>estimate your nutrients needs.</Link></li>
        </ul>
      </nav>
      <p>Further tools could (and normally will) be added in the future.</p>
      <footer>
        <b>Disclaimer</b>
        <small>
          <p>Note that the estimations of nutrients given in this website are not supposed to replace medical advice. If you want to estimate your real needs you should see a nutritionist.</p>
        </small>
      </footer>
    </main>
  );
};
