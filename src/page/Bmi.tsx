import { BmiDetails } from "../component/Bmi/BmiDetails";
import BmiResult from "../component/Bmi/BmiResult";
import Button from "../component/Button";
import Input from "../component/Input";
import { UnitSystemSelector } from "../component/UnitSystemSelector";
import { useSettings } from "../providers/SettingsProvider";
import { useUserData } from "../providers/UserProvider";
import { FormulaCalculationConverter } from "../services/CalculationUtil";

const Bmi = () => {
  const { height, weight, bmi, updateBmi } = useUserData();
  const { unitSystem, heightUnitSystemLabel, weightUnitSystemLabel } = useSettings()
  const formulaCalculator = FormulaCalculationConverter(unitSystem.value);

  return (
    <>
      <h1>Body Mass Index calculator</h1>
      <UnitSystemSelector />
      <form>
        <div className="form-data">
          <Input value={height.value} setValue={height.setValue} type="number">Height ({heightUnitSystemLabel})</Input>
          <Input value={weight.value} setValue={weight.setValue} type="number">Weight ({weightUnitSystemLabel})</Input>
          <Button onClick={() => updateBmi(formulaCalculator)}>Calculate</Button>
        </div>
        {bmi.value > 0 && (
          <BmiResult bmi={bmi.value} />
        )}
        <BmiDetails />
      </form>
    </>
  );
};

export default Bmi;
