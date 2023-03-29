/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  SelectField,
  TextField,
  useTheme,
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
  const { tokens } = useTheme();
  const initialValues = {
    status: "",
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    id_number: "",
    id_expiry: "",
    drivers_licence: "",
    drivers_licence_expiry: "",
    salary_nett: "",
    date_reviewed: "",
    address_1: "",
    address_2: "",
    city: "",
    province: undefined,
    postal_code: "",
    id_file: "",
    drivers_licence_file: "",
    poa_fi: "",
    bank_statement_1_file: "",
    bank_statement_2_file: "",
    bank_statement_3_file: "",
    salary_slip_1_file: "",
    salary_slip_2_file: "",
    salary_slip_3_file: "",
  };
  const [status, setStatus] = React.useState(initialValues.status);
  const [first_name, setFirst_name] = React.useState(initialValues.first_name);
  const [last_name, setLast_name] = React.useState(initialValues.last_name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [id_number, setId_number] = React.useState(initialValues.id_number);
  const [id_expiry, setId_expiry] = React.useState(initialValues.id_expiry);
  const [drivers_licence, setDrivers_licence] = React.useState(
    initialValues.drivers_licence
  );
  const [drivers_licence_expiry, setDrivers_licence_expiry] = React.useState(
    initialValues.drivers_licence_expiry
  );
  const [salary_nett, setSalary_nett] = React.useState(
    initialValues.salary_nett
  );
  const [date_reviewed, setDate_reviewed] = React.useState(
    initialValues.date_reviewed
  );
  const [address_1, setAddress_1] = React.useState(initialValues.address_1);
  const [address_2, setAddress_2] = React.useState(initialValues.address_2);
  const [city, setCity] = React.useState(initialValues.city);
  const [province, setProvince] = React.useState(initialValues.province);
  const [postal_code, setPostal_code] = React.useState(
    initialValues.postal_code
  );
  const [id_file, setId_file] = React.useState(initialValues.id_file);
  const [drivers_licence_file, setDrivers_licence_file] = React.useState(
    initialValues.drivers_licence_file
  );
  const [poa_fi, setPoa_fi] = React.useState(initialValues.poa_fi);
  const [bank_statement_1_file, setBank_statement_1_file] = React.useState(
    initialValues.bank_statement_1_file
  );
  const [bank_statement_2_file, setBank_statement_2_file] = React.useState(
    initialValues.bank_statement_2_file
  );
  const [bank_statement_3_file, setBank_statement_3_file] = React.useState(
    initialValues.bank_statement_3_file
  );
  const [salary_slip_1_file, setSalary_slip_1_file] = React.useState(
    initialValues.salary_slip_1_file
  );
  const [salary_slip_2_file, setSalary_slip_2_file] = React.useState(
    initialValues.salary_slip_2_file
  );
  const [salary_slip_3_file, setSalary_slip_3_file] = React.useState(
    initialValues.salary_slip_3_file
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setStatus(initialValues.status);
    setFirst_name(initialValues.first_name);
    setLast_name(initialValues.last_name);
    setEmail(initialValues.email);
    setPhone(initialValues.phone);
    setId_number(initialValues.id_number);
    setId_expiry(initialValues.id_expiry);
    setDrivers_licence(initialValues.drivers_licence);
    setDrivers_licence_expiry(initialValues.drivers_licence_expiry);
    setSalary_nett(initialValues.salary_nett);
    setDate_reviewed(initialValues.date_reviewed);
    setAddress_1(initialValues.address_1);
    setAddress_2(initialValues.address_2);
    setCity(initialValues.city);
    setProvince(initialValues.province);
    setPostal_code(initialValues.postal_code);
    setId_file(initialValues.id_file);
    setDrivers_licence_file(initialValues.drivers_licence_file);
    setPoa_fi(initialValues.poa_fi);
    setBank_statement_1_file(initialValues.bank_statement_1_file);
    setBank_statement_2_file(initialValues.bank_statement_2_file);
    setBank_statement_3_file(initialValues.bank_statement_3_file);
    setSalary_slip_1_file(initialValues.salary_slip_1_file);
    setSalary_slip_2_file(initialValues.salary_slip_2_file);
    setSalary_slip_3_file(initialValues.salary_slip_3_file);
    setErrors({});
  };
  const validations = {
    status: [],
    first_name: [],
    last_name: [],
    email: [],
    phone: [],
    id_number: [],
    id_expiry: [],
    drivers_licence: [],
    drivers_licence_expiry: [],
    salary_nett: [],
    date_reviewed: [],
    address_1: [],
    address_2: [],
    city: [],
    province: [],
    postal_code: [],
    id_file: [],
    drivers_licence_file: [],
    poa_fi: [],
    bank_statement_1_file: [],
    bank_statement_2_file: [],
    bank_statement_3_file: [],
    salary_slip_1_file: [],
    salary_slip_2_file: [],
    salary_slip_3_file: [],
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
      rowGap={tokens.space.medium.value}
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          status,
          first_name,
          last_name,
          email,
          phone,
          id_number,
          id_expiry,
          drivers_licence,
          drivers_licence_expiry,
          salary_nett,
          date_reviewed,
          address_1,
          address_2,
          city,
          province,
          postal_code,
          id_file,
          drivers_licence_file,
          poa_fi,
          bank_statement_1_file,
          bank_statement_2_file,
          bank_statement_3_file,
          salary_slip_1_file,
          salary_slip_2_file,
          salary_slip_3_file,
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
        label="Status"
        isRequired={false}
        isReadOnly={false}
        placeholder="New"
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status: value,
              first_name,
              last_name,
              email,
              phone,
              id_number,
              id_expiry,
              drivers_licence,
              drivers_licence_expiry,
              salary_nett,
              date_reviewed,
              address_1,
              address_2,
              city,
              province,
              postal_code,
              id_file,
              drivers_licence_file,
              poa_fi,
              bank_statement_1_file,
              bank_statement_2_file,
              bank_statement_3_file,
              salary_slip_1_file,
              salary_slip_2_file,
              salary_slip_3_file,
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
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Divider>
      <Heading
        children="Contact details"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Heading>
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={first_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              first_name: value,
              last_name,
              email,
              phone,
              id_number,
              id_expiry,
              drivers_licence,
              drivers_licence_expiry,
              salary_nett,
              date_reviewed,
              address_1,
              address_2,
              city,
              province,
              postal_code,
              id_file,
              drivers_licence_file,
              poa_fi,
              bank_statement_1_file,
              bank_statement_2_file,
              bank_statement_3_file,
              salary_slip_1_file,
              salary_slip_2_file,
              salary_slip_3_file,
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
              status,
              first_name,
              last_name: value,
              email,
              phone,
              id_number,
              id_expiry,
              drivers_licence,
              drivers_licence_expiry,
              salary_nett,
              date_reviewed,
              address_1,
              address_2,
              city,
              province,
              postal_code,
              id_file,
              drivers_licence_file,
              poa_fi,
              bank_statement_1_file,
              bank_statement_2_file,
              bank_statement_3_file,
              salary_slip_1_file,
              salary_slip_2_file,
              salary_slip_3_file,
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
              status,
              first_name,
              last_name,
              email: value,
              phone,
              id_number,
              id_expiry,
              drivers_licence,
              drivers_licence_expiry,
              salary_nett,
              date_reviewed,
              address_1,
              address_2,
              city,
              province,
              postal_code,
              id_file,
              drivers_licence_file,
              poa_fi,
              bank_statement_1_file,
              bank_statement_2_file,
              bank_statement_3_file,
              salary_slip_1_file,
              salary_slip_2_file,
              salary_slip_3_file,
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
              status,
              first_name,
              last_name,
              email,
              phone: value,
              id_number,
              id_expiry,
              drivers_licence,
              drivers_licence_expiry,
              salary_nett,
              date_reviewed,
              address_1,
              address_2,
              city,
              province,
              postal_code,
              id_file,
              drivers_licence_file,
              poa_fi,
              bank_statement_1_file,
              bank_statement_2_file,
              bank_statement_3_file,
              salary_slip_1_file,
              salary_slip_2_file,
              salary_slip_3_file,
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
              status,
              first_name,
              last_name,
              email,
              phone,
              id_number: value,
              id_expiry,
              drivers_licence,
              drivers_licence_expiry,
              salary_nett,
              date_reviewed,
              address_1,
              address_2,
              city,
              province,
              postal_code,
              id_file,
              drivers_licence_file,
              poa_fi,
              bank_statement_1_file,
              bank_statement_2_file,
              bank_statement_3_file,
              salary_slip_1_file,
              salary_slip_2_file,
              salary_slip_3_file,
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
        label="Id expiry"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={id_expiry}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              first_name,
              last_name,
              email,
              phone,
              id_number,
              id_expiry: value,
              drivers_licence,
              drivers_licence_expiry,
              salary_nett,
              date_reviewed,
              address_1,
              address_2,
              city,
              province,
              postal_code,
              id_file,
              drivers_licence_file,
              poa_fi,
              bank_statement_1_file,
              bank_statement_2_file,
              bank_statement_3_file,
              salary_slip_1_file,
              salary_slip_2_file,
              salary_slip_3_file,
            };
            const result = onChange(modelFields);
            value = result?.id_expiry ?? value;
          }
          if (errors.id_expiry?.hasError) {
            runValidationTasks("id_expiry", value);
          }
          setId_expiry(value);
        }}
        onBlur={() => runValidationTasks("id_expiry", id_expiry)}
        errorMessage={errors.id_expiry?.errorMessage}
        hasError={errors.id_expiry?.hasError}
        {...getOverrideProps(overrides, "id_expiry")}
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
              status,
              first_name,
              last_name,
              email,
              phone,
              id_number,
              id_expiry,
              drivers_licence: value,
              drivers_licence_expiry,
              salary_nett,
              date_reviewed,
              address_1,
              address_2,
              city,
              province,
              postal_code,
              id_file,
              drivers_licence_file,
              poa_fi,
              bank_statement_1_file,
              bank_statement_2_file,
              bank_statement_3_file,
              salary_slip_1_file,
              salary_slip_2_file,
              salary_slip_3_file,
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
        label="Drivers licence expiry"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={drivers_licence_expiry}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              first_name,
              last_name,
              email,
              phone,
              id_number,
              id_expiry,
              drivers_licence,
              drivers_licence_expiry: value,
              salary_nett,
              date_reviewed,
              address_1,
              address_2,
              city,
              province,
              postal_code,
              id_file,
              drivers_licence_file,
              poa_fi,
              bank_statement_1_file,
              bank_statement_2_file,
              bank_statement_3_file,
              salary_slip_1_file,
              salary_slip_2_file,
              salary_slip_3_file,
            };
            const result = onChange(modelFields);
            value = result?.drivers_licence_expiry ?? value;
          }
          if (errors.drivers_licence_expiry?.hasError) {
            runValidationTasks("drivers_licence_expiry", value);
          }
          setDrivers_licence_expiry(value);
        }}
        onBlur={() =>
          runValidationTasks("drivers_licence_expiry", drivers_licence_expiry)
        }
        errorMessage={errors.drivers_licence_expiry?.errorMessage}
        hasError={errors.drivers_licence_expiry?.hasError}
        {...getOverrideProps(overrides, "drivers_licence_expiry")}
      ></TextField>
      <TextField
        label="Salary nett"
        isRequired={false}
        isReadOnly={false}
        value={salary_nett}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              first_name,
              last_name,
              email,
              phone,
              id_number,
              id_expiry,
              drivers_licence,
              drivers_licence_expiry,
              salary_nett: value,
              date_reviewed,
              address_1,
              address_2,
              city,
              province,
              postal_code,
              id_file,
              drivers_licence_file,
              poa_fi,
              bank_statement_1_file,
              bank_statement_2_file,
              bank_statement_3_file,
              salary_slip_1_file,
              salary_slip_2_file,
              salary_slip_3_file,
            };
            const result = onChange(modelFields);
            value = result?.salary_nett ?? value;
          }
          if (errors.salary_nett?.hasError) {
            runValidationTasks("salary_nett", value);
          }
          setSalary_nett(value);
        }}
        onBlur={() => runValidationTasks("salary_nett", salary_nett)}
        errorMessage={errors.salary_nett?.errorMessage}
        hasError={errors.salary_nett?.hasError}
        {...getOverrideProps(overrides, "salary_nett")}
      ></TextField>
      <TextField
        label="Date reviewed"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={date_reviewed}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              first_name,
              last_name,
              email,
              phone,
              id_number,
              id_expiry,
              drivers_licence,
              drivers_licence_expiry,
              salary_nett,
              date_reviewed: value,
              address_1,
              address_2,
              city,
              province,
              postal_code,
              id_file,
              drivers_licence_file,
              poa_fi,
              bank_statement_1_file,
              bank_statement_2_file,
              bank_statement_3_file,
              salary_slip_1_file,
              salary_slip_2_file,
              salary_slip_3_file,
            };
            const result = onChange(modelFields);
            value = result?.date_reviewed ?? value;
          }
          if (errors.date_reviewed?.hasError) {
            runValidationTasks("date_reviewed", value);
          }
          setDate_reviewed(value);
        }}
        onBlur={() => runValidationTasks("date_reviewed", date_reviewed)}
        errorMessage={errors.date_reviewed?.errorMessage}
        hasError={errors.date_reviewed?.hasError}
        {...getOverrideProps(overrides, "date_reviewed")}
      ></TextField>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement2")}
      ></Divider>
      <Heading
        children="Address details"
        {...getOverrideProps(overrides, "SectionalElement3")}
      ></Heading>
      <TextField
        label="Address 1"
        isRequired={false}
        isReadOnly={false}
        value={address_1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              first_name,
              last_name,
              email,
              phone,
              id_number,
              id_expiry,
              drivers_licence,
              drivers_licence_expiry,
              salary_nett,
              date_reviewed,
              address_1: value,
              address_2,
              city,
              province,
              postal_code,
              id_file,
              drivers_licence_file,
              poa_fi,
              bank_statement_1_file,
              bank_statement_2_file,
              bank_statement_3_file,
              salary_slip_1_file,
              salary_slip_2_file,
              salary_slip_3_file,
            };
            const result = onChange(modelFields);
            value = result?.address_1 ?? value;
          }
          if (errors.address_1?.hasError) {
            runValidationTasks("address_1", value);
          }
          setAddress_1(value);
        }}
        onBlur={() => runValidationTasks("address_1", address_1)}
        errorMessage={errors.address_1?.errorMessage}
        hasError={errors.address_1?.hasError}
        {...getOverrideProps(overrides, "address_1")}
      ></TextField>
      <TextField
        label="Address 2"
        isRequired={false}
        isReadOnly={false}
        value={address_2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              first_name,
              last_name,
              email,
              phone,
              id_number,
              id_expiry,
              drivers_licence,
              drivers_licence_expiry,
              salary_nett,
              date_reviewed,
              address_1,
              address_2: value,
              city,
              province,
              postal_code,
              id_file,
              drivers_licence_file,
              poa_fi,
              bank_statement_1_file,
              bank_statement_2_file,
              bank_statement_3_file,
              salary_slip_1_file,
              salary_slip_2_file,
              salary_slip_3_file,
            };
            const result = onChange(modelFields);
            value = result?.address_2 ?? value;
          }
          if (errors.address_2?.hasError) {
            runValidationTasks("address_2", value);
          }
          setAddress_2(value);
        }}
        onBlur={() => runValidationTasks("address_2", address_2)}
        errorMessage={errors.address_2?.errorMessage}
        hasError={errors.address_2?.hasError}
        {...getOverrideProps(overrides, "address_2")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              first_name,
              last_name,
              email,
              phone,
              id_number,
              id_expiry,
              drivers_licence,
              drivers_licence_expiry,
              salary_nett,
              date_reviewed,
              address_1,
              address_2,
              city: value,
              province,
              postal_code,
              id_file,
              drivers_licence_file,
              poa_fi,
              bank_statement_1_file,
              bank_statement_2_file,
              bank_statement_3_file,
              salary_slip_1_file,
              salary_slip_2_file,
              salary_slip_3_file,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <SelectField
        label="Province"
        placeholder="Please select an option"
        isDisabled={false}
        value={province}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              first_name,
              last_name,
              email,
              phone,
              id_number,
              id_expiry,
              drivers_licence,
              drivers_licence_expiry,
              salary_nett,
              date_reviewed,
              address_1,
              address_2,
              city,
              province: value,
              postal_code,
              id_file,
              drivers_licence_file,
              poa_fi,
              bank_statement_1_file,
              bank_statement_2_file,
              bank_statement_3_file,
              salary_slip_1_file,
              salary_slip_2_file,
              salary_slip_3_file,
            };
            const result = onChange(modelFields);
            value = result?.province ?? value;
          }
          if (errors.province?.hasError) {
            runValidationTasks("province", value);
          }
          setProvince(value);
        }}
        onBlur={() => runValidationTasks("province", province)}
        errorMessage={errors.province?.errorMessage}
        hasError={errors.province?.hasError}
        {...getOverrideProps(overrides, "province")}
      >
        <option
          children="Eastern Cape"
          value="Eastern Cape"
          {...getOverrideProps(overrides, "provinceoption0")}
        ></option>
        <option
          children="Free State"
          value="Free State"
          {...getOverrideProps(overrides, "provinceoption1")}
        ></option>
        <option
          children="Gauteng"
          value="Gauteng"
          {...getOverrideProps(overrides, "provinceoption2")}
        ></option>
        <option
          children="KwaZulu-Natal"
          value="KwaZulu-Natal"
          {...getOverrideProps(overrides, "provinceoption3")}
        ></option>
        <option
          children="Limpopo"
          value="Limpopo"
          {...getOverrideProps(overrides, "provinceoption4")}
        ></option>
        <option
          children="Mpumalanga"
          value="Mpumalanga"
          {...getOverrideProps(overrides, "provinceoption5")}
        ></option>
        <option
          children="Northern Cape"
          value="Northern Cape"
          {...getOverrideProps(overrides, "provinceoption6")}
        ></option>
        <option
          children="North West"
          value="North West"
          {...getOverrideProps(overrides, "provinceoption7")}
        ></option>
        <option
          children="Western Cape"
          value="Western Cape"
          {...getOverrideProps(overrides, "provinceoption8")}
        ></option>
      </SelectField>
      <TextField
        label="Postal code"
        isRequired={false}
        isReadOnly={false}
        value={postal_code}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              first_name,
              last_name,
              email,
              phone,
              id_number,
              id_expiry,
              drivers_licence,
              drivers_licence_expiry,
              salary_nett,
              date_reviewed,
              address_1,
              address_2,
              city,
              province,
              postal_code: value,
              id_file,
              drivers_licence_file,
              poa_fi,
              bank_statement_1_file,
              bank_statement_2_file,
              bank_statement_3_file,
              salary_slip_1_file,
              salary_slip_2_file,
              salary_slip_3_file,
            };
            const result = onChange(modelFields);
            value = result?.postal_code ?? value;
          }
          if (errors.postal_code?.hasError) {
            runValidationTasks("postal_code", value);
          }
          setPostal_code(value);
        }}
        onBlur={() => runValidationTasks("postal_code", postal_code)}
        errorMessage={errors.postal_code?.errorMessage}
        hasError={errors.postal_code?.hasError}
        {...getOverrideProps(overrides, "postal_code")}
      ></TextField>
      <TextField
        label="Id file"
        isRequired={false}
        isReadOnly={false}
        value={id_file}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              first_name,
              last_name,
              email,
              phone,
              id_number,
              id_expiry,
              drivers_licence,
              drivers_licence_expiry,
              salary_nett,
              date_reviewed,
              address_1,
              address_2,
              city,
              province,
              postal_code,
              id_file: value,
              drivers_licence_file,
              poa_fi,
              bank_statement_1_file,
              bank_statement_2_file,
              bank_statement_3_file,
              salary_slip_1_file,
              salary_slip_2_file,
              salary_slip_3_file,
            };
            const result = onChange(modelFields);
            value = result?.id_file ?? value;
          }
          if (errors.id_file?.hasError) {
            runValidationTasks("id_file", value);
          }
          setId_file(value);
        }}
        onBlur={() => runValidationTasks("id_file", id_file)}
        errorMessage={errors.id_file?.errorMessage}
        hasError={errors.id_file?.hasError}
        {...getOverrideProps(overrides, "id_file")}
      ></TextField>
      <TextField
        label="Drivers licence file"
        isRequired={false}
        isReadOnly={false}
        value={drivers_licence_file}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              first_name,
              last_name,
              email,
              phone,
              id_number,
              id_expiry,
              drivers_licence,
              drivers_licence_expiry,
              salary_nett,
              date_reviewed,
              address_1,
              address_2,
              city,
              province,
              postal_code,
              id_file,
              drivers_licence_file: value,
              poa_fi,
              bank_statement_1_file,
              bank_statement_2_file,
              bank_statement_3_file,
              salary_slip_1_file,
              salary_slip_2_file,
              salary_slip_3_file,
            };
            const result = onChange(modelFields);
            value = result?.drivers_licence_file ?? value;
          }
          if (errors.drivers_licence_file?.hasError) {
            runValidationTasks("drivers_licence_file", value);
          }
          setDrivers_licence_file(value);
        }}
        onBlur={() =>
          runValidationTasks("drivers_licence_file", drivers_licence_file)
        }
        errorMessage={errors.drivers_licence_file?.errorMessage}
        hasError={errors.drivers_licence_file?.hasError}
        {...getOverrideProps(overrides, "drivers_licence_file")}
      ></TextField>
      <TextField
        label="Poa fi"
        isRequired={false}
        isReadOnly={false}
        value={poa_fi}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              first_name,
              last_name,
              email,
              phone,
              id_number,
              id_expiry,
              drivers_licence,
              drivers_licence_expiry,
              salary_nett,
              date_reviewed,
              address_1,
              address_2,
              city,
              province,
              postal_code,
              id_file,
              drivers_licence_file,
              poa_fi: value,
              bank_statement_1_file,
              bank_statement_2_file,
              bank_statement_3_file,
              salary_slip_1_file,
              salary_slip_2_file,
              salary_slip_3_file,
            };
            const result = onChange(modelFields);
            value = result?.poa_fi ?? value;
          }
          if (errors.poa_fi?.hasError) {
            runValidationTasks("poa_fi", value);
          }
          setPoa_fi(value);
        }}
        onBlur={() => runValidationTasks("poa_fi", poa_fi)}
        errorMessage={errors.poa_fi?.errorMessage}
        hasError={errors.poa_fi?.hasError}
        {...getOverrideProps(overrides, "poa_fi")}
      ></TextField>
      <TextField
        label="Bank statement 1 file"
        isRequired={false}
        isReadOnly={false}
        value={bank_statement_1_file}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              first_name,
              last_name,
              email,
              phone,
              id_number,
              id_expiry,
              drivers_licence,
              drivers_licence_expiry,
              salary_nett,
              date_reviewed,
              address_1,
              address_2,
              city,
              province,
              postal_code,
              id_file,
              drivers_licence_file,
              poa_fi,
              bank_statement_1_file: value,
              bank_statement_2_file,
              bank_statement_3_file,
              salary_slip_1_file,
              salary_slip_2_file,
              salary_slip_3_file,
            };
            const result = onChange(modelFields);
            value = result?.bank_statement_1_file ?? value;
          }
          if (errors.bank_statement_1_file?.hasError) {
            runValidationTasks("bank_statement_1_file", value);
          }
          setBank_statement_1_file(value);
        }}
        onBlur={() =>
          runValidationTasks("bank_statement_1_file", bank_statement_1_file)
        }
        errorMessage={errors.bank_statement_1_file?.errorMessage}
        hasError={errors.bank_statement_1_file?.hasError}
        {...getOverrideProps(overrides, "bank_statement_1_file")}
      ></TextField>
      <TextField
        label="Bank statement 2 file"
        isRequired={false}
        isReadOnly={false}
        value={bank_statement_2_file}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              first_name,
              last_name,
              email,
              phone,
              id_number,
              id_expiry,
              drivers_licence,
              drivers_licence_expiry,
              salary_nett,
              date_reviewed,
              address_1,
              address_2,
              city,
              province,
              postal_code,
              id_file,
              drivers_licence_file,
              poa_fi,
              bank_statement_1_file,
              bank_statement_2_file: value,
              bank_statement_3_file,
              salary_slip_1_file,
              salary_slip_2_file,
              salary_slip_3_file,
            };
            const result = onChange(modelFields);
            value = result?.bank_statement_2_file ?? value;
          }
          if (errors.bank_statement_2_file?.hasError) {
            runValidationTasks("bank_statement_2_file", value);
          }
          setBank_statement_2_file(value);
        }}
        onBlur={() =>
          runValidationTasks("bank_statement_2_file", bank_statement_2_file)
        }
        errorMessage={errors.bank_statement_2_file?.errorMessage}
        hasError={errors.bank_statement_2_file?.hasError}
        {...getOverrideProps(overrides, "bank_statement_2_file")}
      ></TextField>
      <TextField
        label="Bank statement 3 file"
        isRequired={false}
        isReadOnly={false}
        value={bank_statement_3_file}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              first_name,
              last_name,
              email,
              phone,
              id_number,
              id_expiry,
              drivers_licence,
              drivers_licence_expiry,
              salary_nett,
              date_reviewed,
              address_1,
              address_2,
              city,
              province,
              postal_code,
              id_file,
              drivers_licence_file,
              poa_fi,
              bank_statement_1_file,
              bank_statement_2_file,
              bank_statement_3_file: value,
              salary_slip_1_file,
              salary_slip_2_file,
              salary_slip_3_file,
            };
            const result = onChange(modelFields);
            value = result?.bank_statement_3_file ?? value;
          }
          if (errors.bank_statement_3_file?.hasError) {
            runValidationTasks("bank_statement_3_file", value);
          }
          setBank_statement_3_file(value);
        }}
        onBlur={() =>
          runValidationTasks("bank_statement_3_file", bank_statement_3_file)
        }
        errorMessage={errors.bank_statement_3_file?.errorMessage}
        hasError={errors.bank_statement_3_file?.hasError}
        {...getOverrideProps(overrides, "bank_statement_3_file")}
      ></TextField>
      <TextField
        label="Salary slip 1 file"
        isRequired={false}
        isReadOnly={false}
        value={salary_slip_1_file}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              first_name,
              last_name,
              email,
              phone,
              id_number,
              id_expiry,
              drivers_licence,
              drivers_licence_expiry,
              salary_nett,
              date_reviewed,
              address_1,
              address_2,
              city,
              province,
              postal_code,
              id_file,
              drivers_licence_file,
              poa_fi,
              bank_statement_1_file,
              bank_statement_2_file,
              bank_statement_3_file,
              salary_slip_1_file: value,
              salary_slip_2_file,
              salary_slip_3_file,
            };
            const result = onChange(modelFields);
            value = result?.salary_slip_1_file ?? value;
          }
          if (errors.salary_slip_1_file?.hasError) {
            runValidationTasks("salary_slip_1_file", value);
          }
          setSalary_slip_1_file(value);
        }}
        onBlur={() =>
          runValidationTasks("salary_slip_1_file", salary_slip_1_file)
        }
        errorMessage={errors.salary_slip_1_file?.errorMessage}
        hasError={errors.salary_slip_1_file?.hasError}
        {...getOverrideProps(overrides, "salary_slip_1_file")}
      ></TextField>
      <TextField
        label="Salary slip 2 file"
        isRequired={false}
        isReadOnly={false}
        value={salary_slip_2_file}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              first_name,
              last_name,
              email,
              phone,
              id_number,
              id_expiry,
              drivers_licence,
              drivers_licence_expiry,
              salary_nett,
              date_reviewed,
              address_1,
              address_2,
              city,
              province,
              postal_code,
              id_file,
              drivers_licence_file,
              poa_fi,
              bank_statement_1_file,
              bank_statement_2_file,
              bank_statement_3_file,
              salary_slip_1_file,
              salary_slip_2_file: value,
              salary_slip_3_file,
            };
            const result = onChange(modelFields);
            value = result?.salary_slip_2_file ?? value;
          }
          if (errors.salary_slip_2_file?.hasError) {
            runValidationTasks("salary_slip_2_file", value);
          }
          setSalary_slip_2_file(value);
        }}
        onBlur={() =>
          runValidationTasks("salary_slip_2_file", salary_slip_2_file)
        }
        errorMessage={errors.salary_slip_2_file?.errorMessage}
        hasError={errors.salary_slip_2_file?.hasError}
        {...getOverrideProps(overrides, "salary_slip_2_file")}
      ></TextField>
      <TextField
        label="Salary slip 3 file"
        isRequired={false}
        isReadOnly={false}
        value={salary_slip_3_file}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              status,
              first_name,
              last_name,
              email,
              phone,
              id_number,
              id_expiry,
              drivers_licence,
              drivers_licence_expiry,
              salary_nett,
              date_reviewed,
              address_1,
              address_2,
              city,
              province,
              postal_code,
              id_file,
              drivers_licence_file,
              poa_fi,
              bank_statement_1_file,
              bank_statement_2_file,
              bank_statement_3_file,
              salary_slip_1_file,
              salary_slip_2_file,
              salary_slip_3_file: value,
            };
            const result = onChange(modelFields);
            value = result?.salary_slip_3_file ?? value;
          }
          if (errors.salary_slip_3_file?.hasError) {
            runValidationTasks("salary_slip_3_file", value);
          }
          setSalary_slip_3_file(value);
        }}
        onBlur={() =>
          runValidationTasks("salary_slip_3_file", salary_slip_3_file)
        }
        errorMessage={errors.salary_slip_3_file?.errorMessage}
        hasError={errors.salary_slip_3_file?.hasError}
        {...getOverrideProps(overrides, "salary_slip_3_file")}
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
