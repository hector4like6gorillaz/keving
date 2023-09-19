import { IForm } from "../interfaces/session-interface";

const valores: IForm = {
  name: "hector",
  last: "balan",
  email: "hwctor@gmail.com",
  age: 34,
  role: "admin",
  isAutenticated: false,
};

export const getLoginLocal = (): null | IForm => {
  const myForm = localStorage.getItem("form-user");

  if (myForm !== null) {
    // console.log(JSON.parse(myForm));

    return JSON.parse(myForm);
    //return null;
  } else return null;
};

export const loginLogout = () => {
  if (getLoginLocal() !== null) {
    const form: IForm = JSON.parse(localStorage.getItem("form-user") || "");

    localStorage.setItem(
      "form-user",
      JSON.stringify({ ...form, isAutenticated: !form.isAutenticated })
    );
  } else
    localStorage.setItem(
      "form-user",
      JSON.stringify({ valores, isAutenticated: !valores.isAutenticated })
    );
};
