import Button from "../component/Button";
import Input from "../component/Input";
import MacrosResult from "../component/Macros/MacrosResult";
import { useUserData } from "../providers/UserProvider";
import { CardSelect } from "../component/CardSelect";
import { RangeInput } from "../component/RangeInput";
import { ACTIVITY_LEVEL_MAPPER } from "../services/UserDataManager";
import { FormulaCalculationConverter } from "../services/CalculationUtil";
import { useSettings } from "../providers/SettingsProvider";
import { UnitSystemSelector } from "../component/UnitSystemSelector";
import { GENDER_ITEMS, PHYSICAL_GOALS_ITEMS } from "../cardSelectionOptionsItems";
import { MacrosDetails } from "../component/Macros/MacrosDetails";

const Macros = () => {
  const {
    height,
    weight,
    physicalGoal,
    gender,
    age,
    activityLevel,
    caloriesAmount,
    proteinsAmount,
    fatAmount,
    carbsAmount,
    updateMacros,
  } = useUserData();
  const { unitSystem, heightUnitSystemLabel, weightUnitSystemLabel } = useSettings()
  const formulaCalculator = FormulaCalculationConverter(unitSystem.value);

  return (
    <>
      <h1>Macronutrients needs calculator</h1>
      <UnitSystemSelector />
      <div className="flex flex-start">
        <form>
          <div className="form-data">
            <Input value={height.value} setValue={height.setValue} type="number">Height ({heightUnitSystemLabel})</Input>
            <Input value={weight.value} setValue={weight.setValue} type="number">Weight ({weightUnitSystemLabel})</Input>
            <Input value={age.value} setValue={age.setValue} type="number">Age</Input>
            <CardSelect value={physicalGoal.value} setValue={physicalGoal.setValue} title="Physical Goal">
                {PHYSICAL_GOALS_ITEMS.map((item, index) => (
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
            <RangeInput
              options={ACTIVITY_LEVEL_MAPPER.map((_, index) => String(index))}
              label="Activity level"
              value={activityLevel.value}
              setValue={activityLevel.setValue}
              valueDisplay={(value) => <p>{ACTIVITY_LEVEL_MAPPER[Number(value)].message}</p>}
            />
            <Button onClick={() => updateMacros(formulaCalculator)}>Calculate</Button>
          </div>

          <MacrosDetails />

          {caloriesAmount.value !== 0 && (
            <MacrosResult
              caloriesAmount={caloriesAmount.value}
              proteinsAmount={proteinsAmount.value}
              fatAmount={fatAmount.value}
              carbsAmount={carbsAmount.value}
            />
          )}
        </form>
      </div>
    </>
  );
};

export default Macros;