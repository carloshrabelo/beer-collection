"use client";

import { useState, ChangeEvent } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import Button from "@/components/Button";
import Input from "@/components/Form/Input";
import Select from "@/components/Form/Select";
import TextArea from "@/components/Form/TextArea";
import { IBeer, IBeerForm } from "@/types/beer";
import getBase64String from "@/utils/getBase64String";

import * as S from "./style";

interface Props extends Partial<IBeer> {
  className?: string;
  onSubmit: SubmitHandler<IBeerForm>;
}

const PLACEHOLDER_BEER = "/placeholder/beer.png";

const options = {
  unit: [
    { value: "grams", label: "grams" },
    { value: "kilograms", label: "kilograms" },
    { value: "litres", label: "litres" },
  ],
  temp: [
    { value: "celsius", label: "Celsius" },
    { value: "fahrenheit", label: "Fahrenheit" },
  ],
};

export default function BeerForm({ className, onSubmit, ...formData }: Props) {
  const yearBrewed = formData?.first_brewed?.match(/\d{4}/)?.[0] || "";
  const monthBrewed = formData?.first_brewed
    ?.replace(yearBrewed, "")
    .replace(/\D/g, "");
  const first_brewed = `${yearBrewed}-${monthBrewed}`;
  const [image_url, setImage_url] = useState<string>(PLACEHOLDER_BEER);

  const {
    register,
    control,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IBeerForm>({
    values: {
      ...(formData as IBeer),
      first_brewed,
      image_url: formData?.image_url || PLACEHOLDER_BEER,
      boil_volume: {
        value: formData?.boil_volume?.value as number,
        unit: formData?.boil_volume?.unit || "litres",
      },
      volume: {
        value: formData?.volume?.value as number,
        unit: formData?.volume?.unit || "litres",
      },
    },
  });

  const appendFoodPairing = () =>
    setValue(
      "food_pairing",
      !fieldsFoodPairing ? [""] : [...fieldsFoodPairing, ""],
    );
  const removeFoodPairing = (index: number) =>
    setValue(
      "food_pairing",
      fieldsFoodPairing.filter((_, i) => i !== index),
    );

  const fieldsFoodPairing = watch("food_pairing");

  const {
    fields: fieldsMashTemp,
    append: appendMashTemp,
    remove: removeMashTemp,
  } = useFieldArray({
    control,
    name: "method.mash_temp",
  });

  const {
    fields: fieldsIngredientsMalt,
    append: appendIngredientsMalt,
    remove: removeIngredientsMalt,
  } = useFieldArray({
    control,
    name: "ingredients.malt",
  });

  const {
    fields: fieldsIngredientsHops,
    append: appendIngredientsHops,
    remove: removeIngredientsHops,
  } = useFieldArray({
    control,
    name: "ingredients.hops",
  });

  const onChangePicture = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    if (!file) return;
    getBase64String(file).then(setImage_url);
  };

  return (
    <S.Wrapper className={className}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.Body>
          <S.ImageWraper>
            <S.Image
              src={
                (PLACEHOLDER_BEER === image_url &&
                  (formData.image_url as string)) ||
                image_url
              }
              alt="Beer"
              fill
            />
            <Input
              name="image_url"
              register={register}
              type="file"
              onChange={onChangePicture}
            />
          </S.ImageWraper>
          <S.Content>
            <Input
              label="Name"
              name="name"
              register={register}
              required
              errors={errors}
            />
            <Input
              errors={errors}
              type="month"
              label="First Brewed"
              name="first_brewed"
              register={register}
              valueAsDate
              required
            />
            <div>
              <Input
                errors={errors}
                label="Yeast"
                name="ingredients.yeast"
                register={register}
                required
              />
            </div>
            <div>
              <TextArea
                label="Description"
                name="description"
                register={register}
              />
            </div>
            <hr />
            <div>
              <TextArea
                label="Brewers Tips"
                name="brewers_tips"
                register={register}
              />
            </div>
            <S.Row>
              <S.Box>
                <Input
                  errors={errors}
                  type="number"
                  label="Attenuation Level"
                  name="attenuation_level"
                  register={register}
                  required
                />
              </S.Box>
              <S.Box>
                Volume
                <S.Row>
                  <Input
                    errors={errors}
                    type="number"
                    name="volume.value"
                    register={register}
                    required
                  />
                  <Input
                    errors={errors}
                    name="volume.unit"
                    register={register}
                    required
                    disabled
                    value="litres"
                  />
                </S.Row>
              </S.Box>
              <S.Box>
                Boil volume
                <S.Row>
                  <Input
                    errors={errors}
                    type="number"
                    name="boil_volume.value"
                    register={register}
                    required
                  />
                  <Input
                    errors={errors}
                    name="boil_volume.unit"
                    register={register}
                    required
                    disabled
                    value="litres"
                  />
                </S.Row>
              </S.Box>
            </S.Row>
            <div>
              <Input
                errors={errors}
                label="Contributed By"
                name="contributed_by"
                register={register}
                required
              />
            </div>
          </S.Content>
        </S.Body>
        <div>
          <h3>Method</h3>
          <ul>
            <S.Row>
              <Input
                errors={errors}
                type="number"
                label="Fermentation Temperature"
                name="method.fermentation.temp.value"
                register={register}
                required
              />

              <Select
                label="Unit"
                name="method.fermentation.temp.unit"
                register={register}
                required
                options={options.temp}
              />
            </S.Row>
            {fieldsMashTemp.map((item, index) => {
              return (
                <S.Row as="li" align="flex-end" key={item.id}>
                  <Input
                    errors={errors}
                    label="Mash Temp"
                    register={register}
                    name={`method.mash_temp.${index}.temp.value`}
                  />
                  <Select
                    label="Unit"
                    name={`method.mash_temp.${index}.temp.unit`}
                    register={register}
                    required
                    options={options.temp}
                  />
                  <Input
                    label="Duration"
                    errors={errors}
                    register={register}
                    name={`method.mash_temp.${index}.duration`}
                  />
                  <Button color="error" onClick={() => removeMashTemp(index)}>
                    Remove
                  </Button>
                </S.Row>
              );
            })}
            <S.Row as="li">
              <Button
                color="success"
                onClick={() => {
                  appendMashTemp({
                    duration: undefined,
                    temp: { value: 0, unit: "" },
                  });
                }}
              >
                More Mash Temp
              </Button>
            </S.Row>
            <S.Row as="li">
              <Input
                errors={errors}
                label="Twist"
                name="twist"
                register={register}
              />
            </S.Row>
          </ul>
          <S.Row>
            <h3>Food Pairing</h3>
          </S.Row>
          <ul>
            {fieldsFoodPairing?.map((_, index) => (
              <S.Row as="li" key={index}>
                <Input
                  errors={errors}
                  name={`food_pairing.${index}`}
                  register={register}
                />
                <Button color="error" onClick={() => removeFoodPairing(index)}>
                  Remove
                </Button>
              </S.Row>
            ))}
            <S.Row as="li">
              <Button color="success" onClick={() => appendFoodPairing()}>
                Add Food Pairing
              </Button>
            </S.Row>
          </ul>

          <div>
            <h2>Ingredients</h2>
            <h3>Malt</h3>
            <S.Row>
              {fieldsIngredientsMalt.map((item, index) => {
                return (
                  <S.Box key={item.id}>
                    <Input
                      label="Name"
                      errors={errors}
                      register={register}
                      name={`ingredients.malt.${index}.name`}
                    />
                    <S.Row>
                      <Input
                        label="Value"
                        errors={errors}
                        register={register}
                        type="number"
                        step="0.01"
                        min="0"
                        name={`ingredients.malt.${index}.amount.value`}
                      />
                      <Select
                        label="Unit"
                        name={`ingredients.malt.${index}.amount.unit`}
                        register={register}
                        required
                        options={options.unit}
                      />
                    </S.Row>
                    <Button
                      color="error"
                      onClick={() => removeIngredientsMalt(index)}
                    >
                      Remove
                    </Button>
                  </S.Box>
                );
              })}
              <S.Box>
                <Button
                  color="success"
                  onClick={() => {
                    appendIngredientsMalt({
                      amount: { value: 0, unit: "" },
                      name: "",
                    });
                  }}
                >
                  Add Malt
                </Button>
              </S.Box>
            </S.Row>
            <h3>Hops</h3>
            <S.Row>
              {fieldsIngredientsHops.map((item, index) => {
                return (
                  <S.Box key={item.id}>
                    <Input
                      errors={errors}
                      label="Name"
                      register={register}
                      name={`ingredients.hops.${index}.name`}
                    />
                    <S.Row>
                      <Input
                        label="Value"
                        errors={errors}
                        register={register}
                        type="number"
                        step="0.01"
                        name={`ingredients.hops.${index}.amount.value`}
                      />
                      <Select
                        label="Unit"
                        name={`ingredients.hops.${index}.amount.unit`}
                        register={register}
                        required
                        options={options.unit}
                      />
                    </S.Row>
                    <S.Row>
                      <Input
                        errors={errors}
                        register={register}
                        label="add"
                        name={`ingredients.hops.${index}.add`}
                      />
                      <Input
                        errors={errors}
                        label="attribute"
                        register={register}
                        name={`ingredients.hops.${index}.attribute`}
                      />
                    </S.Row>
                    <Button
                      color="error"
                      onClick={() => removeIngredientsHops(index)}
                    >
                      Remove
                    </Button>
                  </S.Box>
                );
              })}
              <S.Box>
                <Button
                  color="success"
                  onClick={() => {
                    appendIngredientsHops({
                      amount: { value: 0, unit: "" },
                      name: "",
                    });
                  }}
                >
                  Add Hops
                </Button>
              </S.Box>
            </S.Row>
          </div>
          <br />
          <S.Row>
            {["abv", "ibu", "target_fg", "target_og", "ebc", "srm", "ph"].map(
              (key) => (
                <Input
                  errors={errors}
                  key={key}
                  name={key}
                  label={key}
                  register={register}
                />
              ),
            )}
          </S.Row>
        </div>

        <S.Footer>
          <Button color="secondary" as="input" type="submit" />
        </S.Footer>
      </form>
    </S.Wrapper>
  );
}
