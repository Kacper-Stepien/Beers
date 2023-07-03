import BeerIngredientsModel from "../../models/BeerIngredients";

import classes from "./BeerIngredients.module.scss";

type Props = {
  title: string;
  ingredients: BeerIngredientsModel;
};

const BeerIngredients: React.FC<Props> = ({ title, ingredients }) => {
  return (
    <div className={classes.ingredients_box}>
      <p className={classes.ingredients_title}>{title}</p>
      <div className={classes.ingredients}>
        <div className={classes.beerIngredients}>
          <p>Malt:</p>
          <ul className={classes.ingredients_list}>
            {ingredients.malt.map((malt, index) => {
              return (
                <li key={`malt-${malt}-${index}`}>
                  <em>{malt.name}</em> - {malt.amount.value} {malt.amount.unit}
                </li>
              );
            })}
          </ul>
        </div>

        <div className={classes.beerIngredients}>
          <p>Hops:</p>
          <ul className={classes.ingredients_list}>
            {ingredients.hops.map((hop, index) => {
              return (
                <li key={`hop-${hop}-${index}`}>
                  <em>{hop.name}</em> - {hop.amount.value} {hop.amount.unit} -{" "}
                  {hop.add},
                </li>
              );
            })}
          </ul>
        </div>

        <div className={classes.beerIngredients}>
          <p>Yeast:</p>
          <ul className={classes.ingredients_list}>
            <li>{ingredients.yeast}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BeerIngredients;
