import Button from "../component/Button";
import Input from "../component/Input";
import { useUserData } from "../providers/UserProvider";
import { CardSelect } from "../component/CardSelect";
import { FormulaCalculationConverter } from "../services/CalculationUtil";
import { useSettings } from "../providers/SettingsProvider";
import { UnitSystemSelector } from "../component/UnitSystemSelector";
import { GENDER_ITEMS } from "../cardSelectionOptionsItems";

export const Bmr = () => {
  const {
    height,
    weight,
    gender,
    age,
    bmr,
    updateBmr,
  } = useUserData();
  const { unitSystem, heightUnitSystemLabel, weightUnitSystemLabel } = useSettings()
  const formulaCalculator = FormulaCalculationConverter(unitSystem.value);

  return (
    <>
      <UnitSystemSelector />
      <div className="flex flex-start">
        <form className="m-2 w-full">
          <Input value={height.value} setValue={height.setValue} type="number">Height ({heightUnitSystemLabel})</Input>
          <Input value={weight.value} setValue={weight.setValue} type="number">Weight ({weightUnitSystemLabel})</Input>
          <Input value={age.value} setValue={age.setValue} type="number">Age</Input>
          <CardSelect value={gender.value} setValue={gender.setValue} title="Gender">
              {GENDER_ITEMS.map((item, index) => (
                <CardSelect.Item
                  key={item.label}
                  index={index}
                  icon={item.icon}
                  alt={item.alt}
                  choice={item.choice}
                >
                  {item.label}
                </CardSelect.Item>
              ))}
          </CardSelect>
          <Button onClick={() => updateBmr(formulaCalculator)}>Calculate</Button>

          {bmr.value > 0 && (
            <>
              <section className="bmr-result">
                <h2>Your Basic Metabolic Rate</h2>
                <output className="bounce">{bmr.value}kcal</output>
              </section>
            </>
          )}
        </form>
      </div>
    </>
  );
};
