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
  Link,
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
  LoginFormAvtar,
} from "../../muielements/stylesWithBP";
const LoginForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const router = useRouter();

  function handelLogin() {
    router.push("/home");
  }
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <Stack alignItems="center" m="2% 0 5% 0" justifyContent="center">
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={LoginFormAvtar}
        />
        <Typography sx={typoHeading1}>Login</Typography>
      </Stack>

      <Stack justifyContent="center" m="0 0 2% 0" alignItems="center">
        <TextField
          sx={{
            marginBottom: "5px",
          }}
          // inputProps={{
          //   style: {
          //     // height: "20px", // Change the height to your desired value
          //     padding: "4%",
          //     fontSize: "10px",
          //   },
          // }}
          label={
            <span
            // style={{ fontSize: "10px", lineHeight: "10px" }}
            >
              Email
            </span>
          }
          placeholder="Enter Email"
          fullWidth
          required
        />
        <FormControl fullWidth variant="outlined" sx={{}}>
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
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
            label="Password"
          />
        </FormControl>
        <Typography
          variant="body1"
          sx={{ ...typoText, width: "100%", textAlign: "end" }}
        >
          <Link href="#" underline="hover">
            {"Forget password ?"}
          </Link>
        </Typography>

        <Button
          sx={{
            "&.MuiButton-contained": {
              backgroundColor: "blue",
            },
          }}
          type="submit"
          color="primary"
          variant="contained"
          fullWidth
          onClick={handelLogin}
        >
          Sign in
        </Button>
      </Stack>
      <Stack spacing={0} direction="row">
        <Typography sx={typoText} variant="body1">
          don,t have an account?
          <Link href="singup" underline="hover">
            {"Sing Up"}
          </Link>
        </Typography>
      </Stack>
    </>
  );
};

export default LoginForm;
