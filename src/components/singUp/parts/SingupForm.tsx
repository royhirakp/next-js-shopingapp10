"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  Avatar,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  typoText,
  typoHeading1,
  typoHeading2,
  button1,
  LoginFormAvtar,
} from "@/components/muielements/stylesWithBP";

// interface
interface RegTextFieldProps {
  name: string;
  placeholder: string;
}

const RegTextFild: React.FC<RegTextFieldProps> = ({ name, placeholder }) => {
  return (
    <>
      <TextField
        sx={{
          marginBottom: "2%",
        }}
        label={name}
        placeholder={placeholder}
        fullWidth
        required
      />
    </>
  );
};
// interface

interface PasswordTextFieldProps {
  name: string;
  label: string;
}

const PasswordTextField: React.FC<PasswordTextFieldProps> = ({
  name,
  label,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <FormControl fullWidth variant="outlined" sx={{ padding: "2% 0 2% 0" }}>
        <InputLabel htmlFor="outlined-adornment-password">{name}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label={label}
        />
      </FormControl>
    </>
  );
};

// main component
const SingupForm = () => {
  const route = useRouter();
  return (
    <>
      <Stack alignItems="center" m="2% 0 5% 0" justifyContent="center">
        <Avatar
          alt="Remy Sharp"
          sx={LoginFormAvtar}
          src="/static/images/avatar/1.jpg"
        />
        <Typography sx={typoHeading1}>Sing up</Typography>
      </Stack>

      <Stack justifyContent="center" m="0 0 2% 0" alignItems="center">
        <RegTextFild name="Name" placeholder="Enter name" />
        <RegTextFild name="Email" placeholder="Enter email" />
        <RegTextFild name="Moile" placeholder="enter mobile no" />

        <PasswordTextField name="password" label="password" />
        <PasswordTextField name="re enter password" label="re enter password" />

        <Button
          sx={{
            paddingTop: "2%",
            "&.MuiButton-contained": {
              backgroundColor: "blue",
            },
          }}
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          onClick={() => {
            route.push("/login");
          }}
        >
          Sign up
        </Button>
      </Stack>
    </>
  );
};

export default SingupForm;
