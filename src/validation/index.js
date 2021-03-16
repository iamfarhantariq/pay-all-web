import * as Yup from "yup";

export const genrateSchema = (values) => {
  const schema = {};
  Object.keys(values).map(
    (key) =>
      (schema[key] = Yup.string().required(`${getTitle(key)} is required`))
  );
  return Yup.object().shape(schema);
};

const getTitle = (key) => {
  const last = key.length;
  return `${key[0].toLocaleUpperCase()}${key.substring(1, last)}`;
};

export const authSchema = Yup.object().shape({
  email: Yup.string().email().required("email is required"),
  password: Yup.string().required("Password is required"),
});

export const passWordSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Current Password is required"),
  newPassword: Yup.string().required("New Password is required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("newPassword"), null],
    "Password must match"
  ),
});

export const personalSchema = Yup.object().shape({
  firstName: Yup.string().min(2).trim().required("First Name is required"),
  surName: Yup.string().min(2).trim().required("Sur Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
  phoneNumber: Yup.string().max(16).required("Password is required"),
  dateOfBirth: Yup.date(),
  address: Yup.string().min(5).max(100),
  houseNumber: Yup.string().min(2),
  city: Yup.string().min(2),
  country: Yup.string().min(2),
  postalCode: Yup.string().min(2),
  type: Yup.string(),
  foundUsBy: Yup.string(),
  pep: Yup.boolean(),
});

export const organizationSchema = Yup.object().shape({
  firstName: Yup.string().min(2).trim().required("First Name is required"),
  surName: Yup.string().min(2).trim().required("Sur Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
  phoneNumber: Yup.string().max(16).required("Password is required"),
  dateOfBirth: Yup.date(),
  address: Yup.string().min(5).max(100),
  houseNumber: Yup.string().min(2),
  city: Yup.string().min(2),
  companyName: Yup.string(),
  mainIndustry: Yup.string(),
  companyNumber: Yup.string(),
  companyWebsite: Yup.string().min(5),
  country: Yup.string().min(2),
  postalCode: Yup.string().min(2),
  type: Yup.string(),
  ownerStructure: Yup.string(),
});
