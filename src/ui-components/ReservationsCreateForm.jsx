/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Reservations } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ReservationsCreateForm(props) {
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
    pickup_date: "",
    return_date: "",
    pickup_location: "",
    status: "",
    car: "",
    price: "",
    deposit: "",
  };
  const [pickup_date, setPickup_date] = React.useState(
    initialValues.pickup_date
  );
  const [return_date, setReturn_date] = React.useState(
    initialValues.return_date
  );
  const [pickup_location, setPickup_location] = React.useState(
    initialValues.pickup_location
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [car, setCar] = React.useState(initialValues.car);
  const [price, setPrice] = React.useState(initialValues.price);
  const [deposit, setDeposit] = React.useState(initialValues.deposit);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setPickup_date(initialValues.pickup_date);
    setReturn_date(initialValues.return_date);
    setPickup_location(initialValues.pickup_location);
    setStatus(initialValues.status);
    setCar(initialValues.car);
    setPrice(initialValues.price);
    setDeposit(initialValues.deposit);
    setErrors({});
  };
  const validations = {
    pickup_date: [],
    return_date: [],
    pickup_location: [],
    status: [],
    car: [],
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
          pickup_date,
          return_date,
          pickup_location,
          status,
          car,
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
          await DataStore.save(new Reservations(modelFields));
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
      {...getOverrideProps(overrides, "ReservationsCreateForm")}
      {...rest}
    >
      <TextField
        label="Pickup date"
        isRequired={false}
        isReadOnly={false}
        value={pickup_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pickup_date: value,
              return_date,
              pickup_location,
              status,
              car,
              price,
              deposit,
            };
            const result = onChange(modelFields);
            value = result?.pickup_date ?? value;
          }
          if (errors.pickup_date?.hasError) {
            runValidationTasks("pickup_date", value);
          }
          setPickup_date(value);
        }}
        onBlur={() => runValidationTasks("pickup_date", pickup_date)}
        errorMessage={errors.pickup_date?.errorMessage}
        hasError={errors.pickup_date?.hasError}
        {...getOverrideProps(overrides, "pickup_date")}
      ></TextField>
      <TextField
        label="Return date"
        isRequired={false}
        isReadOnly={false}
        value={return_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pickup_date,
              return_date: value,
              pickup_location,
              status,
              car,
              price,
              deposit,
            };
            const result = onChange(modelFields);
            value = result?.return_date ?? value;
          }
          if (errors.return_date?.hasError) {
            runValidationTasks("return_date", value);
          }
          setReturn_date(value);
        }}
        onBlur={() => runValidationTasks("return_date", return_date)}
        errorMessage={errors.return_date?.errorMessage}
        hasError={errors.return_date?.hasError}
        {...getOverrideProps(overrides, "return_date")}
      ></TextField>
      <TextField
        label="Pickup location"
        isRequired={false}
        isReadOnly={false}
        value={pickup_location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pickup_date,
              return_date,
              pickup_location: value,
              status,
              car,
              price,
              deposit,
            };
            const result = onChange(modelFields);
            value = result?.pickup_location ?? value;
          }
          if (errors.pickup_location?.hasError) {
            runValidationTasks("pickup_location", value);
          }
          setPickup_location(value);
        }}
        onBlur={() => runValidationTasks("pickup_location", pickup_location)}
        errorMessage={errors.pickup_location?.errorMessage}
        hasError={errors.pickup_location?.hasError}
        {...getOverrideProps(overrides, "pickup_location")}
      ></TextField>
      <TextField
        label="Status"
        isRequired={false}
        isReadOnly={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pickup_date,
              return_date,
              pickup_location,
              status: value,
              car,
              price,
              deposit,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      ></TextField>
      <TextField
        label="Car"
        isRequired={false}
        isReadOnly={false}
        value={car}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              pickup_date,
              return_date,
              pickup_location,
              status,
              car: value,
              price,
              deposit,
            };
            const result = onChange(modelFields);
            value = result?.car ?? value;
          }
          if (errors.car?.hasError) {
            runValidationTasks("car", value);
          }
          setCar(value);
        }}
        onBlur={() => runValidationTasks("car", car)}
        errorMessage={errors.car?.errorMessage}
        hasError={errors.car?.hasError}
        {...getOverrideProps(overrides, "car")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              pickup_date,
              return_date,
              pickup_location,
              status,
              car,
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
        type="number"
        step="any"
        value={deposit}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              pickup_date,
              return_date,
              pickup_location,
              status,
              car,
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
