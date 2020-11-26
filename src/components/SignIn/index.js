import React from "react";
import {
  FormButton,
  FormLabel,
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormInput,
  Text,
} from "./SigninElements";

const Signin = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">JAB Tech</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Sign in to your account</FormH1>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Signin;
