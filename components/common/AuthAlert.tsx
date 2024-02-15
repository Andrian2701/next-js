import { Alert } from "@mui/material";
import { VscError } from "react-icons/vsc";
import { FaRegCircleCheck } from "react-icons/fa6";

type AuthAlertProps = {
  authSuccess: boolean | null;
};

const AuthAlert = ({ authSuccess }: AuthAlertProps) => {
  return (
    <Alert
      icon={authSuccess ? <FaRegCircleCheck /> : <VscError />}
      severity={authSuccess ? "success" : "error"}
      sx={{ marginTop: "1.7rem" }}
    >
      {authSuccess ? "Authentication successful." : "Email is already in use."}
    </Alert>
  );
};

export default AuthAlert;
