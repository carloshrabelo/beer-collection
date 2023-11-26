export interface IUnit {
  unit: string;
  value: number;
}

export interface IIngredient {
  add?: string;
  name: string;
  attribute?: string;
  amount: IUnit;
}

export interface IMethodStep {
  duration?: number;
  temp: IUnit;
}

export interface IBeer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: IUnit;
  boil_volume: IUnit;
  method: {
    twist?: string;
    mash_temp: IMethodStep[];
    fermentation: IMethodStep;
  };

  ingredients: {
    yeast: string;
    malt: IIngredient[];
    hops: IIngredient[];
  };
  food_pairing: string[];
  brewers_tips: string;
  contributed_by: string;
}
