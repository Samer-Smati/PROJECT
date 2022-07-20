import Login from "../components/login/Login";
import Register from "../components/register/Register";
import ForgetPassword from "../components/resetPassword/ResetPassword";
import SetNewPassword from "../components/resetPassword/setNewPassword";
import PasswordChanged from "../components/resetPassword/passwordChanged";
import CheckMail from "../components/resetPassword/CheckMail";
import RegisterSecStep from "../components/register/RegisterSecStep";
import RegisterLastStep from "../components/register/RegisterLastStep";
import mailApproved from '../components/mailApproved/mailApproved';
export const Routers = [
  {
    id: "login",
    path: "/",
    exact: true,
    component: Login,
    isPrivate: false,
    isAuth: true,
  },
  {
    id: "Register",
    path: "/Register",
    exact: true,
    component: Register,
    isPrivate: false,
    isAuth: false,
  },
  {
    id: "ForgetPassword",
    path: "/ForgetPassword",
    exact: true,
    component: ForgetPassword,
    isPrivate: false,
    isAuth: false,
  },
  {
    id: "SetNewPassword",
    path: "/SetNewPassword",
    exact: true,
    component: SetNewPassword,
    isPrivate: false,
    isAuth: false,
  },
  {
    id: "PasswordChanged",
    path: "/PasswordChanged",
    exact: true,
    component: PasswordChanged,
    isPrivate: false,
    isAuth: false,
  },
  {
    id: "CheckMail",
    path: "/CheckMail",
    exact: true,
    component: CheckMail,
    isPrivate: false,
    isAuth: false,
  },
  {
    id: "RegisterSecStep",
    path: "/RegisterSecStep",
    exact: true,
    component: RegisterSecStep,
    isPrivate: false,
    isAuth: false,
  },
  {
    id: "RegisterLastStep",
    path: "/RegisterLastStep",
    exact: true,
    component: RegisterLastStep,
    isPrivate: false,
    isAuth: false,
  },
  {
    id: "mailApproved",
    path: "/mailApproved",
    exact: true,
    component: mailApproved,
    isPrivate: false,
    isAuth: false,
  },
];
