import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from 'components/common/auth.styled';
import { ACLogoIcon } from 'assets/images';
import { AuthInput } from 'components';
import { usePageContext } from 'contexts/PageContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useEffect } from 'react';
import { useAuth } from 'contexts/AuthContext';

const SignUpPage = () => {
  const context = usePageContext();
  const { username, setUsername, password, setPassword, email, setEmail } =
    context;
  const navigate = useNavigate();
  const { register, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/todos');
    }
  }, [navigate, isAuthenticated]);

  const handleClick = async () => {
    if (username.length === 0 || password.length === 0 || email.length === 0) {
      return;
    }
    const success = await register({
      username,
      password,
      email,
    });
    if (success) {
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Login success',
        showConfirmButton: true,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: 'top',
        icon: 'error',
        title: 'Signup Error',
        showConfirmButton: true,
        timer: 1500,
      });
    }
  };

  return (
    <AuthContainer>
      <div>
        <ACLogoIcon />
      </div>
      <h1>建立您的帳號</h1>

      <AuthInputContainer>
        <AuthInput
          label="帳號"
          type="text"
          placeholder="請輸入帳號"
          value={username}
          onChange={(nameInputValue) => {
            setUsername(nameInputValue);
          }}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          label="Email"
          type="text"
          placeholder="請輸入 Email"
          value={email}
          onChange={(emailInputValue) => {
            setEmail(emailInputValue);
          }}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          label="密碼"
          type="password"
          placeholder="請輸入密碼"
          value={password}
          onChange={(passwordInputValue) => {
            setPassword(passwordInputValue);
          }}
        />
      </AuthInputContainer>
      <AuthButton onClick={handleClick}>註冊</AuthButton>
      <AuthLinkText>取消</AuthLinkText>
    </AuthContainer>
  );
};

export default SignUpPage;
