import React, { useState } from "react";
import { Button, Alert, Box, Stack } from "@mui/material";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, googleAuthProvider as provider } from "../../firebase";
import { useNavigate } from "react-router-dom";
import InputField from "../../shared/components/inputField/InputField";
import UnvisitedLink from "../../shared/components/link/Link";

const SignUp: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        // Update profile with username
        return updateProfile(user, { displayName: username });
      })
      .then(() => {
        // Redirect to home screen
        navigate("/home");
      })
      .catch((error) => {
        // Show error message
        setError(error.message);
      });
  };

  const handleGoogleSignUp = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Signed in
        var user = result.user;
        // Redirect to home screen
        navigate("/home");
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
            label="Username"
            id="username-input"
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <InputField
            label="Email"
            id="email-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            label="Password"
            id="password-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Alert severity="error">{error}</Alert>}
          <Button
            type="submit"
            sx={{
              color: "primary.main",
              bgcolor: "secondary.main",
              borderRadius: "50px",
            }}
          >
            Sign Up
          </Button>
          <Button
            onClick={handleGoogleSignUp}
            sx={{
              color: "primary.main",
              bgcolor: "secondary.main",
              borderRadius: "50px",
            }}
          >
            Sign Up with Google
          </Button>
          <UnvisitedLink to="/signin">
            Do you have an account? Sign In
          </UnvisitedLink>
        </Stack>
      </form>
    </Box>
  );
};

export default SignUp;
