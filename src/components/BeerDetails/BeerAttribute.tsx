import { useState } from "react";

import classes from "./BeerAttribute.module.scss";

type Props = {
  label: string;
  value: number;
};

const abbrExplanations: Record<string, string> = {
  Att: "Attenuation Level (how much sugar is converted to alcohol)",
  IBU: "International Bitterness Units (how bitter the beer is)",
  ABV: "Alcohol By Volume (how much alcohol is in the beer)",
  EBC: "European Brewery Convention (how dark the beer is)",
  IBS: "International Bitterness Scale (how bitter the beer is)",
};

const BeerAttribute: React.FC<Props> = ({ label, value }) => {
  const [isHovered, setIsHovered] = useState(false);

  const showExplanation = () => {
    setIsHovered(true);
  };

  const hideExplanation = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={classes.beerAttribute}
      onMouseOver={showExplanation}
      onMouseOut={hideExplanation}
    >
      <p className={classes.beerAttribute_label}>{label}</p>
      <p className={classes.beerAttribute_value}>{value}</p>
      {isHovered && (
        <div className={classes.beerAttribute_explanation}>
          {abbrExplanations[label]}
        </div>
      )}
    </div>
  );
};

export default BeerAttribute;
