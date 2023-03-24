/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Cars } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CarsCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    make: "",
    model: "",
    variant: "",
    fuel: "",
    transmission: "",
    year: "",
    price: "",
    deposit: "",
  };
  const [make, setMake] = React.useState(initialValues.make);
  const [model, setModel] = React.useState(initialValues.model);
  const [variant, setVariant] = React.useState(initialValues.variant);
  const [fuel, setFuel] = React.useState(initialValues.fuel);
  const [transmission, setTransmission] = React.useState(
    initialValues.transmission
  );
  const [year, setYear] = React.useState(initialValues.year);
  const [price, setPrice] = React.useState(initialValues.price);
  const [deposit, setDeposit] = React.useState(initialValues.deposit);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setMake(initialValues.make);
    setModel(initialValues.model);
    setVariant(initialValues.variant);
    setFuel(initialValues.fuel);
    setTransmission(initialValues.transmission);
    setYear(initialValues.year);
    setPrice(initialValues.price);
    setDeposit(initialValues.deposit);
    setErrors({});
  };
  const validations = {
    make: [],
    model: [],
    variant: [],
    fuel: [],
    transmission: [],
    year: [],
    price: [],
    deposit: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          make,
          model,
          variant,
          fuel,
          transmission,
          year,
          price,
          deposit,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Cars(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CarsCreateForm")}
      {...rest}
    >
      <TextField
        label="Make"
        isRequired={false}
        isReadOnly={false}
        value={make}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              make: value,
              model,
              variant,
              fuel,
              transmission,
              year,
              price,
              deposit,
            };
            const result = onChange(modelFields);
            value = result?.make ?? value;
          }
          if (errors.make?.hasError) {
            runValidationTasks("make", value);
          }
          setMake(value);
        }}
        onBlur={() => runValidationTasks("make", make)}
        errorMessage={errors.make?.errorMessage}
        hasError={errors.make?.hasError}
        {...getOverrideProps(overrides, "make")}
      ></TextField>
      <TextField
        label="Model"
        isRequired={false}
        isReadOnly={false}
        value={model}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              make,
              model: value,
              variant,
              fuel,
              transmission,
              year,
              price,
              deposit,
            };
            const result = onChange(modelFields);
            value = result?.model ?? value;
          }
          if (errors.model?.hasError) {
            runValidationTasks("model", value);
          }
          setModel(value);
        }}
        onBlur={() => runValidationTasks("model", model)}
        errorMessage={errors.model?.errorMessage}
        hasError={errors.model?.hasError}
        {...getOverrideProps(overrides, "model")}
      ></TextField>
      <TextField
        label="Variant"
        isRequired={false}
        isReadOnly={false}
        value={variant}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              make,
              model,
              variant: value,
              fuel,
              transmission,
              year,
              price,
              deposit,
            };
            const result = onChange(modelFields);
            value = result?.variant ?? value;
          }
          if (errors.variant?.hasError) {
            runValidationTasks("variant", value);
          }
          setVariant(value);
        }}
        onBlur={() => runValidationTasks("variant", variant)}
        errorMessage={errors.variant?.errorMessage}
        hasError={errors.variant?.hasError}
        {...getOverrideProps(overrides, "variant")}
      ></TextField>
      <TextField
        label="Fuel"
        isRequired={false}
        isReadOnly={false}
        value={fuel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              make,
              model,
              variant,
              fuel: value,
              transmission,
              year,
              price,
              deposit,
            };
            const result = onChange(modelFields);
            value = result?.fuel ?? value;
          }
          if (errors.fuel?.hasError) {
            runValidationTasks("fuel", value);
          }
          setFuel(value);
        }}
        onBlur={() => runValidationTasks("fuel", fuel)}
        errorMessage={errors.fuel?.errorMessage}
        hasError={errors.fuel?.hasError}
        {...getOverrideProps(overrides, "fuel")}
      ></TextField>
      <TextField
        label="Transmission"
        isRequired={false}
        isReadOnly={false}
        value={transmission}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              make,
              model,
              variant,
              fuel,
              transmission: value,
              year,
              price,
              deposit,
            };
            const result = onChange(modelFields);
            value = result?.transmission ?? value;
          }
          if (errors.transmission?.hasError) {
            runValidationTasks("transmission", value);
          }
          setTransmission(value);
        }}
        onBlur={() => runValidationTasks("transmission", transmission)}
        errorMessage={errors.transmission?.errorMessage}
        hasError={errors.transmission?.hasError}
        {...getOverrideProps(overrides, "transmission")}
      ></TextField>
      <TextField
        label="Year"
        isRequired={false}
        isReadOnly={false}
        value={year}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              make,
              model,
              variant,
              fuel,
              transmission,
              year: value,
              price,
              deposit,
            };
            const result = onChange(modelFields);
            value = result?.year ?? value;
          }
          if (errors.year?.hasError) {
            runValidationTasks("year", value);
          }
          setYear(value);
        }}
        onBlur={() => runValidationTasks("year", year)}
        errorMessage={errors.year?.errorMessage}
        hasError={errors.year?.hasError}
        {...getOverrideProps(overrides, "year")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        value={price}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              make,
              model,
              variant,
              fuel,
              transmission,
              year,
              price: value,
              deposit,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Deposit"
        isRequired={false}
        isReadOnly={false}
        value={deposit}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              make,
              model,
              variant,
              fuel,
              transmission,
              year,
              price,
              deposit: value,
            };
            const result = onChange(modelFields);
            value = result?.deposit ?? value;
          }
          if (errors.deposit?.hasError) {
            runValidationTasks("deposit", value);
          }
          setDeposit(value);
        }}
        onBlur={() => runValidationTasks("deposit", deposit)}
        errorMessage={errors.deposit?.errorMessage}
        hasError={errors.deposit?.hasError}
        {...getOverrideProps(overrides, "deposit")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
