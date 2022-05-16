type Props = {
  caloriesAmount: number;
  proteinsAmount: number;
  fatAmount: number;
  carbsAmount: number;
};

const MacrosResult = ({ caloriesAmount, proteinsAmount, fatAmount, carbsAmount }: Props) => (
  <div className="mt-14 mb-8">
    Calories : {caloriesAmount}kcal
    Proteins : {proteinsAmount}g
    Fat : {fatAmount}g
    Carbs : {carbsAmount}g
  </div>
);

export default MacrosResult;
