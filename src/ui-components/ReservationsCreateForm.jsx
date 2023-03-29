/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  Text,
  TextAreaField,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Reservations } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
}) {
  const labelElement = <Text>{label}</Text>;
  const { tokens } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            color={tokens.colors.brand.primary[80]}
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
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
    reservation_id: "",
    Field0: "",
    pickup_date: "",
    return_date: "",
    pickup_location: undefined,
    car: "",
    price: "",
    deposit: "",
    make: "",
    model: "",
    variant: "",
    status: undefined,
    customer_id: "",
    start_date: "",
    duration: "",
    end_date: "",
    class: "",
    test_1: "",
    test_2: [],
  };
  const [reservation_id, setReservation_id] = React.useState(
    initialValues.reservation_id
  );
  const [Field0, setField0] = React.useState(initialValues.Field0);
  const [pickup_date, setPickup_date] = React.useState(
    initialValues.pickup_date
  );
  const [return_date, setReturn_date] = React.useState(
    initialValues.return_date
  );
  const [pickup_location, setPickup_location] = React.useState(
    initialValues.pickup_location
  );
  const [car, setCar] = React.useState(initialValues.car);
  const [price, setPrice] = React.useState(initialValues.price);
  const [deposit, setDeposit] = React.useState(initialValues.deposit);
  const [make, setMake] = React.useState(initialValues.make);
  const [model, setModel] = React.useState(initialValues.model);
  const [variant, setVariant] = React.useState(initialValues.variant);
  const [status, setStatus] = React.useState(initialValues.status);
  const [customer_id, setCustomer_id] = React.useState(
    initialValues.customer_id
  );
  const [start_date, setStart_date] = React.useState(initialValues.start_date);
  const [duration, setDuration] = React.useState(initialValues.duration);
  const [end_date, setEnd_date] = React.useState(initialValues.end_date);
  const [class1, setClass1] = React.useState(initialValues.class);
  const [test_1, setTest_1] = React.useState(initialValues.test_1);
  const [test_2, setTest_2] = React.useState(initialValues.test_2);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setReservation_id(initialValues.reservation_id);
    setField0(initialValues.Field0);
    setPickup_date(initialValues.pickup_date);
    setReturn_date(initialValues.return_date);
    setPickup_location(initialValues.pickup_location);
    setCar(initialValues.car);
    setPrice(initialValues.price);
    setDeposit(initialValues.deposit);
    setMake(initialValues.make);
    setModel(initialValues.model);
    setVariant(initialValues.variant);
    setStatus(initialValues.status);
    setCustomer_id(initialValues.customer_id);
    setStart_date(initialValues.start_date);
    setDuration(initialValues.duration);
    setEnd_date(initialValues.end_date);
    setClass1(initialValues.class);
    setTest_1(initialValues.test_1);
    setTest_2(initialValues.test_2);
    setCurrentTest_2Value("");
    setErrors({});
  };
  const [currentTest_2Value, setCurrentTest_2Value] = React.useState("");
  const test_2Ref = React.createRef();
  const validations = {
    reservation_id: [],
    Field0: [],
    pickup_date: [],
    return_date: [],
    pickup_location: [],
    car: [],
    price: [],
    deposit: [],
    make: [],
    model: [],
    variant: [],
    status: [],
    customer_id: [],
    start_date: [],
    duration: [],
    end_date: [],
    class: [],
    test_1: [{ type: "JSON" }],
    test_2: [],
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
          reservation_id,
          Field0,
          pickup_date,
          return_date,
          pickup_location,
          car,
          price,
          deposit,
          make,
          model,
          variant,
          status,
          customer_id,
          start_date,
          duration,
          end_date,
          class: class1,
          test_1,
          test_2,
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
        label="Reservation id"
        isRequired={false}
        isReadOnly={false}
        value={reservation_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              reservation_id: value,
              Field0,
              pickup_date,
              return_date,
              pickup_location,
              car,
              price,
              deposit,
              make,
              model,
              variant,
              status,
              customer_id,
              start_date,
              duration,
              end_date,
              class: class1,
              test_1,
              test_2,
            };
            const result = onChange(modelFields);
            value = result?.reservation_id ?? value;
          }
          if (errors.reservation_id?.hasError) {
            runValidationTasks("reservation_id", value);
          }
          setReservation_id(value);
        }}
        onBlur={() => runValidationTasks("reservation_id", reservation_id)}
        errorMessage={errors.reservation_id?.errorMessage}
        hasError={errors.reservation_id?.hasError}
        {...getOverrideProps(overrides, "reservation_id")}
      ></TextField>
      <TextField
        label="Customer Id"
        value={Field0}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              reservation_id,
              Field0: value,
              pickup_date,
              return_date,
              pickup_location,
              car,
              price,
              deposit,
              make,
              model,
              variant,
              status,
              customer_id,
              start_date,
              duration,
              end_date,
              class: class1,
              test_1,
              test_2,
            };
            const result = onChange(modelFields);
            value = result?.Field0 ?? value;
          }
          if (errors.Field0?.hasError) {
            runValidationTasks("Field0", value);
          }
          setField0(value);
        }}
        onBlur={() => runValidationTasks("Field0", Field0)}
        errorMessage={errors.Field0?.errorMessage}
        hasError={errors.Field0?.hasError}
        {...getOverrideProps(overrides, "Field0")}
      ></TextField>
      <TextField
        label="Pickup date"
        isRequired={false}
        isReadOnly={false}
        value={pickup_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              reservation_id,
              Field0,
              pickup_date: value,
              return_date,
              pickup_location,
              car,
              price,
              deposit,
              make,
              model,
              variant,
              status,
              customer_id,
              start_date,
              duration,
              end_date,
              class: class1,
              test_1,
              test_2,
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
              reservation_id,
              Field0,
              pickup_date,
              return_date: value,
              pickup_location,
              car,
              price,
              deposit,
              make,
              model,
              variant,
              status,
              customer_id,
              start_date,
              duration,
              end_date,
              class: class1,
              test_1,
              test_2,
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
      <SelectField
        label="Pickup location"
        placeholder="Select"
        isDisabled={false}
        value={pickup_location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              reservation_id,
              Field0,
              pickup_date,
              return_date,
              pickup_location: value,
              car,
              price,
              deposit,
              make,
              model,
              variant,
              status,
              customer_id,
              start_date,
              duration,
              end_date,
              class: class1,
              test_1,
              test_2,
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
      >
        <option
          children="Cape Town"
          value="Cape Town"
          {...getOverrideProps(overrides, "pickup_locationoption0")}
        ></option>
        <option
          children="Johannesburg"
          value="Johannesburg"
          {...getOverrideProps(overrides, "pickup_locationoption1")}
        ></option>
        <option
          children="Pretoria"
          value="Pretoria"
          {...getOverrideProps(overrides, "pickup_locationoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Label"
        value={car}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              reservation_id,
              Field0,
              pickup_date,
              return_date,
              pickup_location,
              car: value,
              price,
              deposit,
              make,
              model,
              variant,
              status,
              customer_id,
              start_date,
              duration,
              end_date,
              class: class1,
              test_1,
              test_2,
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
              reservation_id,
              Field0,
              pickup_date,
              return_date,
              pickup_location,
              car,
              price: value,
              deposit,
              make,
              model,
              variant,
              status,
              customer_id,
              start_date,
              duration,
              end_date,
              class: class1,
              test_1,
              test_2,
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
              reservation_id,
              Field0,
              pickup_date,
              return_date,
              pickup_location,
              car,
              price,
              deposit: value,
              make,
              model,
              variant,
              status,
              customer_id,
              start_date,
              duration,
              end_date,
              class: class1,
              test_1,
              test_2,
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
      <TextField
        label="Make"
        isRequired={false}
        isReadOnly={false}
        value={make}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              reservation_id,
              Field0,
              pickup_date,
              return_date,
              pickup_location,
              car,
              price,
              deposit,
              make: value,
              model,
              variant,
              status,
              customer_id,
              start_date,
              duration,
              end_date,
              class: class1,
              test_1,
              test_2,
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
              reservation_id,
              Field0,
              pickup_date,
              return_date,
              pickup_location,
              car,
              price,
              deposit,
              make,
              model: value,
              variant,
              status,
              customer_id,
              start_date,
              duration,
              end_date,
              class: class1,
              test_1,
              test_2,
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
              reservation_id,
              Field0,
              pickup_date,
              return_date,
              pickup_location,
              car,
              price,
              deposit,
              make,
              model,
              variant: value,
              status,
              customer_id,
              start_date,
              duration,
              end_date,
              class: class1,
              test_1,
              test_2,
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
      <SelectField
        label="Status"
        placeholder="Select"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              reservation_id,
              Field0,
              pickup_date,
              return_date,
              pickup_location,
              car,
              price,
              deposit,
              make,
              model,
              variant,
              status: value,
              customer_id,
              start_date,
              duration,
              end_date,
              class: class1,
              test_1,
              test_2,
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
          children="On rent"
          value="On rent"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Closed"
          value="Closed"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Customer id"
        isRequired={false}
        isReadOnly={false}
        value={customer_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              reservation_id,
              Field0,
              pickup_date,
              return_date,
              pickup_location,
              car,
              price,
              deposit,
              make,
              model,
              variant,
              status,
              customer_id: value,
              start_date,
              duration,
              end_date,
              class: class1,
              test_1,
              test_2,
            };
            const result = onChange(modelFields);
            value = result?.customer_id ?? value;
          }
          if (errors.customer_id?.hasError) {
            runValidationTasks("customer_id", value);
          }
          setCustomer_id(value);
        }}
        onBlur={() => runValidationTasks("customer_id", customer_id)}
        errorMessage={errors.customer_id?.errorMessage}
        hasError={errors.customer_id?.hasError}
        {...getOverrideProps(overrides, "customer_id")}
      ></TextField>
      <TextField
        label="Start date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={start_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              reservation_id,
              Field0,
              pickup_date,
              return_date,
              pickup_location,
              car,
              price,
              deposit,
              make,
              model,
              variant,
              status,
              customer_id,
              start_date: value,
              duration,
              end_date,
              class: class1,
              test_1,
              test_2,
            };
            const result = onChange(modelFields);
            value = result?.start_date ?? value;
          }
          if (errors.start_date?.hasError) {
            runValidationTasks("start_date", value);
          }
          setStart_date(value);
        }}
        onBlur={() => runValidationTasks("start_date", start_date)}
        errorMessage={errors.start_date?.errorMessage}
        hasError={errors.start_date?.hasError}
        {...getOverrideProps(overrides, "start_date")}
      ></TextField>
      <TextField
        label="Duration"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={duration}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              reservation_id,
              Field0,
              pickup_date,
              return_date,
              pickup_location,
              car,
              price,
              deposit,
              make,
              model,
              variant,
              status,
              customer_id,
              start_date,
              duration: value,
              end_date,
              class: class1,
              test_1,
              test_2,
            };
            const result = onChange(modelFields);
            value = result?.duration ?? value;
          }
          if (errors.duration?.hasError) {
            runValidationTasks("duration", value);
          }
          setDuration(value);
        }}
        onBlur={() => runValidationTasks("duration", duration)}
        errorMessage={errors.duration?.errorMessage}
        hasError={errors.duration?.hasError}
        {...getOverrideProps(overrides, "duration")}
      ></TextField>
      <TextField
        label="End date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={end_date}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              reservation_id,
              Field0,
              pickup_date,
              return_date,
              pickup_location,
              car,
              price,
              deposit,
              make,
              model,
              variant,
              status,
              customer_id,
              start_date,
              duration,
              end_date: value,
              class: class1,
              test_1,
              test_2,
            };
            const result = onChange(modelFields);
            value = result?.end_date ?? value;
          }
          if (errors.end_date?.hasError) {
            runValidationTasks("end_date", value);
          }
          setEnd_date(value);
        }}
        onBlur={() => runValidationTasks("end_date", end_date)}
        errorMessage={errors.end_date?.errorMessage}
        hasError={errors.end_date?.hasError}
        {...getOverrideProps(overrides, "end_date")}
      ></TextField>
      <TextField
        label="Class"
        isRequired={false}
        isReadOnly={false}
        value={class1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              reservation_id,
              Field0,
              pickup_date,
              return_date,
              pickup_location,
              car,
              price,
              deposit,
              make,
              model,
              variant,
              status,
              customer_id,
              start_date,
              duration,
              end_date,
              class: value,
              test_1,
              test_2,
            };
            const result = onChange(modelFields);
            value = result?.class ?? value;
          }
          if (errors.class?.hasError) {
            runValidationTasks("class", value);
          }
          setClass1(value);
        }}
        onBlur={() => runValidationTasks("class", class1)}
        errorMessage={errors.class?.errorMessage}
        hasError={errors.class?.hasError}
        {...getOverrideProps(overrides, "class")}
      ></TextField>
      <TextAreaField
        label="Test 1"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              reservation_id,
              Field0,
              pickup_date,
              return_date,
              pickup_location,
              car,
              price,
              deposit,
              make,
              model,
              variant,
              status,
              customer_id,
              start_date,
              duration,
              end_date,
              class: class1,
              test_1: value,
              test_2,
            };
            const result = onChange(modelFields);
            value = result?.test_1 ?? value;
          }
          if (errors.test_1?.hasError) {
            runValidationTasks("test_1", value);
          }
          setTest_1(value);
        }}
        onBlur={() => runValidationTasks("test_1", test_1)}
        errorMessage={errors.test_1?.errorMessage}
        hasError={errors.test_1?.hasError}
        {...getOverrideProps(overrides, "test_1")}
      ></TextAreaField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              reservation_id,
              Field0,
              pickup_date,
              return_date,
              pickup_location,
              car,
              price,
              deposit,
              make,
              model,
              variant,
              status,
              customer_id,
              start_date,
              duration,
              end_date,
              class: class1,
              test_1,
              test_2: values,
            };
            const result = onChange(modelFields);
            values = result?.test_2 ?? values;
          }
          setTest_2(values);
          setCurrentTest_2Value("");
        }}
        currentFieldValue={currentTest_2Value}
        label={"Test 2"}
        items={test_2}
        hasError={errors.test_2?.hasError}
        setFieldValue={setCurrentTest_2Value}
        inputFieldRef={test_2Ref}
        defaultFieldValue={""}
      >
        <TextField
          label="Test 2"
          isRequired={false}
          isReadOnly={false}
          value={currentTest_2Value}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.test_2?.hasError) {
              runValidationTasks("test_2", value);
            }
            setCurrentTest_2Value(value);
          }}
          onBlur={() => runValidationTasks("test_2", currentTest_2Value)}
          errorMessage={errors.test_2?.errorMessage}
          hasError={errors.test_2?.hasError}
          ref={test_2Ref}
          labelHidden={true}
          {...getOverrideProps(overrides, "test_2")}
        ></TextField>
      </ArrayField>
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
