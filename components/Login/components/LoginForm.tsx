import { FC, useState } from "react";
import styled from "styled-components";
import supabase from "../../../client";

// Store
import { useDispatch } from "react-redux";
import { updateEmail } from "../../../store/user";

// Components
import GlassContainer from "../../GlassContainer";
import InputField from "../../InputField";
import Button from "../../Button";
import Checkbox from "../../Checkbox";
import Warning from "../../Warning";

const LoginForm: FC = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const hasError = Boolean(errorText);

  const dispatch = useDispatch();

  const signUp = async () => {
    const { user, session, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    if (error) {
      console.error(error);
      setErrorText(error.message);
    } else if (user?.email) {
      dispatch(updateEmail(user.email));
    }
  };
  const signIn = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      email: email,
      password: password,
    });
    if (error) {
      console.error(error);
      setErrorText(error.message);
    } else if (user?.email) {
      dispatch(updateEmail(user.email));
    }
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    isNewUser ? signUp() : signIn();
  };

  return (
    <StyledGlassContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInputField
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <StyledInputField
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <StyledCheckboxBlock>
          <StyledLabel>I am new here</StyledLabel>
          <Checkbox
            checked={isNewUser}
            onChange={() => setIsNewUser(!isNewUser)}
          />
        </StyledCheckboxBlock>
        {hasError ? (
          <WarningWrapper>
            <Warning text={errorText} />
          </WarningWrapper>
        ) : null}
        <Button>{isNewUser ? "Sign Up" : "Sign In"}</Button>
      </StyledForm>
    </StyledGlassContainer>
  );
};

const StyledGlassContainer = styled(GlassContainer)`
  display: flex;
  flex-direction: column;
  border: none;
`;

const StyledInputField = styled(InputField)`
  margin-bottom: 16px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledCheckboxBlock = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLabel = styled.label`
  margin-right: 8px;
`;

const WarningWrapper = styled.div`
  margin-bottom: 10px;
`;

export default LoginForm;
