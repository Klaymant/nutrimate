const MacroResultElement = ({ label, result, unity, backgroundColor }: MacroResultElementProps) => {
  const baseClasses = "flex justify-between rounded p-2 my-2";

  return (
    <div className={[baseClasses, backgroundColor].join(" ")}>
      <p>{label}</p>
      <p className="text-white">
        <output>{result + unity}</output>
      </p>
    </div>
  );
};

const MacrosResult = ({ caloriesAmount, proteinsAmount, fatAmount, carbsAmount }: Props) => (
  <section className="mt-8 mb-8">
      <h2 className="text-2xl">Your estimated macros per day</h2>
      <MacroResultElement label="Calories" result={caloriesAmount} unity="kcal" backgroundColor="bg-primary" />
      <MacroResultElement label="Proteins" result={proteinsAmount} unity="g" backgroundColor="bg-red-500" />
      <MacroResultElement label="Fat" result={fatAmount} unity="g" backgroundColor="bg-yellow-500" />
      <MacroResultElement label="Carbs" result={carbsAmount} unity="g" backgroundColor="bg-pink-500" />
  </section>
);

type MacroResultElementProps = {
  label: string;
  result: number;
  unity: string;
  backgroundColor: string;
};

type Props = {
  caloriesAmount: number;
  proteinsAmount: number;
  fatAmount: number;
  carbsAmount: number;
};

export default MacrosResult;
