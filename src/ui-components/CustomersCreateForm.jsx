/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Customers } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CustomersCreateForm(props) {
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
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    id_number: "",
    drivers_licence: "",
    salary: "",
    status: undefined,
  };
  const [first_name, setFirst_name] = React.useState(initialValues.first_name);
  const [last_name, setLast_name] = React.useState(initialValues.last_name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [id_number, setId_number] = React.useState(initialValues.id_number);
  const [drivers_licence, setDrivers_licence] = React.useState(
    initialValues.drivers_licence
  );
  const [salary, setSalary] = React.useState(initialValues.salary);
  const [status, setStatus] = React.useState(initialValues.status);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirst_name(initialValues.first_name);
    setLast_name(initialValues.last_name);
    setEmail(initialValues.email);
    setPhone(initialValues.phone);
    setId_number(initialValues.id_number);
    setDrivers_licence(initialValues.drivers_licence);
    setSalary(initialValues.salary);
    setStatus(initialValues.status);
    setErrors({});
  };
  const validations = {
    first_name: [],
    last_name: [],
    email: [],
    phone: [],
    id_number: [],
    drivers_licence: [],
    salary: [],
    status: [],
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
          first_name,
          last_name,
          email,
          phone,
          id_number,
          drivers_licence,
          salary,
          status,
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
          await DataStore.save(new Customers(modelFields));
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
      {...getOverrideProps(overrides, "CustomersCreateForm")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={first_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name: value,
              last_name,
              email,
              phone,
              id_number,
              drivers_licence,
              salary,
              status,
            };
            const result = onChange(modelFields);
            value = result?.first_name ?? value;
          }
          if (errors.first_name?.hasError) {
            runValidationTasks("first_name", value);
          }
          setFirst_name(value);
        }}
        onBlur={() => runValidationTasks("first_name", first_name)}
        errorMessage={errors.first_name?.errorMessage}
        hasError={errors.first_name?.hasError}
        {...getOverrideProps(overrides, "first_name")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={last_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name: value,
              email,
              phone,
              id_number,
              drivers_licence,
              salary,
              status,
            };
            const result = onChange(modelFields);
            value = result?.last_name ?? value;
          }
          if (errors.last_name?.hasError) {
            runValidationTasks("last_name", value);
          }
          setLast_name(value);
        }}
        onBlur={() => runValidationTasks("last_name", last_name)}
        errorMessage={errors.last_name?.errorMessage}
        hasError={errors.last_name?.hasError}
        {...getOverrideProps(overrides, "last_name")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              email: value,
              phone,
              id_number,
              drivers_licence,
              salary,
              status,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              email,
              phone: value,
              id_number,
              drivers_licence,
              salary,
              status,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <TextField
        label="Id number"
        isRequired={false}
        isReadOnly={false}
        value={id_number}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              email,
              phone,
              id_number: value,
              drivers_licence,
              salary,
              status,
            };
            const result = onChange(modelFields);
            value = result?.id_number ?? value;
          }
          if (errors.id_number?.hasError) {
            runValidationTasks("id_number", value);
          }
          setId_number(value);
        }}
        onBlur={() => runValidationTasks("id_number", id_number)}
        errorMessage={errors.id_number?.errorMessage}
        hasError={errors.id_number?.hasError}
        {...getOverrideProps(overrides, "id_number")}
      ></TextField>
      <TextField
        label="Drivers licence"
        isRequired={false}
        isReadOnly={false}
        value={drivers_licence}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              email,
              phone,
              id_number,
              drivers_licence: value,
              salary,
              status,
            };
            const result = onChange(modelFields);
            value = result?.drivers_licence ?? value;
          }
          if (errors.drivers_licence?.hasError) {
            runValidationTasks("drivers_licence", value);
          }
          setDrivers_licence(value);
        }}
        onBlur={() => runValidationTasks("drivers_licence", drivers_licence)}
        errorMessage={errors.drivers_licence?.errorMessage}
        hasError={errors.drivers_licence?.hasError}
        {...getOverrideProps(overrides, "drivers_licence")}
      ></TextField>
      <TextField
        label="Salary"
        isRequired={false}
        isReadOnly={false}
        value={salary}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              email,
              phone,
              id_number,
              drivers_licence,
              salary: value,
              status,
            };
            const result = onChange(modelFields);
            value = result?.salary ?? value;
          }
          if (errors.salary?.hasError) {
            runValidationTasks("salary", value);
          }
          setSalary(value);
        }}
        onBlur={() => runValidationTasks("salary", salary)}
        errorMessage={errors.salary?.errorMessage}
        hasError={errors.salary?.hasError}
        {...getOverrideProps(overrides, "salary")}
      ></TextField>
      <SelectField
        label="Status"
        placeholder="Select"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name,
              email,
              phone,
              id_number,
              drivers_licence,
              salary,
              status: value,
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
      >
        <option
          children="New"
          value="New"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Under Review"
          value="Under Review"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Under Supplier Review"
          value="Under Supplier Review"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
        <option
          children="Approved"
          value="Approved"
          {...getOverrideProps(overrides, "statusoption3")}
        ></option>
        <option
          children="Declined"
          value="Declined"
          {...getOverrideProps(overrides, "statusoption4")}
        ></option>
        <option
          children="Cancelled"
          value="Cancelled"
          {...getOverrideProps(overrides, "statusoption5")}
        ></option>
        <option
          children="Collecting Car"
          value="Collecting Car"
          {...getOverrideProps(overrides, "statusoption6")}
        ></option>
        <option
          children="Car Request WIth Supplier"
          value="Car Request WIth Supplier"
          {...getOverrideProps(overrides, "statusoption7")}
        ></option>
        <option
          children="Completed"
          value="Completed"
          {...getOverrideProps(overrides, "statusoption8")}
        ></option>
      </SelectField>
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
