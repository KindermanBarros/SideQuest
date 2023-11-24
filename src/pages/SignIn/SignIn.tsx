import React, { useState } from "react";
import { Button, Alert, Box, Stack } from "@mui/material";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleAuthProvider as provider } from "../../firebase";
import { useNavigate } from "react-router-dom";
import InputField from "../../shared/components/inputField/InputField";
import UnvisitedLink from "../../shared/components/link/link";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Signed in
        const user = result.user;
        // Redirect to home screen
        if (user) {
          navigate("/home");
        }
      })
      .catch((error) => {
        // Show error message
        setError(error.message);
      });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // Redirect to home screen
        if (user) {
          navigate("/home");
        }
      })
      .catch((error) => {
        // Show error message
        setError(error.message);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: 2,
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={2}>
          <InputField
            id="email-input"
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            id="password-input"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Alert severity="error" sx={{ color: "red" }}>
              {error}
            </Alert>
          )}
          <Button
            type="submit"
            sx={{
              color: "primary.main",
              bgcolor: "secondary.main",
              borderRadius: "50px",
            }}
          >
            LogIn
          </Button>
          <Button
            onClick={handleGoogleSignIn}
            sx={{
              color: "primary.main",
              bgcolor: "secondary.main",
              borderRadius: "50px",
            }}
          >
            Sign In with Google
          </Button>
          <UnvisitedLink to="/signup">
            Don't have an account? Sign Up
          </UnvisitedLink>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
