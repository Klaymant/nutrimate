type Props = {
  caloriesAmount: number;
  proteinsAmount: number;
  fatAmount: number;
  carbsAmount: number;
};

const MacrosResult = ({ caloriesAmount, proteinsAmount, fatAmount, carbsAmount }: Props) => (
  <section className="mt-8 mb-8 p-4 flex justify-evenly bg-cornflower-blue bg-opacity-70 rounded">
    <div>
      <div>Calories :</div>
      <div>Proteins :</div>
      <div>Fat :</div>
      <div>Carbs :</div>
    </div>

    <div className="text-right">
      <div>{caloriesAmount}kcal</div>
      <div>{proteinsAmount}g</div>
      <div>{fatAmount}g</div>
      <div>{carbsAmount}g</div>
    </div>
  </section>
);

export default MacrosResult;
