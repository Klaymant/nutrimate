export const BmiDetails = () => (
  <details>
    <summary>What is BMI?</summary>
    <p>
      <strong>BMI</strong> stands for Body Mass Index. It is a measure of body fat based on height and weight of an individual.
      It's used as an <b>indicator to determine a person's health according to scientific observations and studies</b>.
    </p>

    <p>It can be calculated as <span className="formula">mass (<span className="unity">kg</span>) / height<sup>2</sup> (<span className="unity">cm</span>)</span>.</p>

    <h2>The different categories</h2>
    <p>
      These are the different categories of <strong>BMI</strong>:
    </p>
    <ul>
      <li>
        <dl>
          <dt>Below 18.5</dt>
          <dd>Underweight</dd>
        </dl>
        <li>
        <dl>
          <dt>Between 18.5 and 25</dt>
          <dd>Normal weight</dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt>Between 25 and 30</dt>
          <dd>Overweight</dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt>Between 30 and 40</dt>
          <dd>Obesity</dd>
        </dl>
      </li>
      <li>
        <dl>
          <dt>Over 40</dt>
          <dd>Morbid obesity</dd>
        </dl>
      </li>
      </li>
    </ul>

    <h2>Limitations</h2>
    <p>
      Note that <strong>BMI</strong> has limitations and is not always accurate. For instance people with high muscle mass, an abdominal obesity or with short stature could have an imprecise <strong>BMI</strong>.<br/>
      It's worth mentionning that <b>this index is not the only indicator of a person's health</b> and doesn't tell in itself if you're in good health or not.
    </p>
  </details>
);
