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

const LoginPage = () => {
  const context = usePageContext();
  const { username, setUsername, password, setPassword } = context;
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const handleClick = async () => {
    if (username.length === 0 || password.length === 0) {
      return;
    }
    const success = await login({ username, password });
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
        title: 'Login Error',
        showConfirmButton: true,
        timer: 1500,
      });
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/todos');
    }
  }, [navigate, isAuthenticated]);

  return (
    <AuthContainer>
      <div>
        <ACLogoIcon />
      </div>
      <h1>登入 Todo</h1>

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
          label="密碼"
          type="password"
          placeholder="請輸入密碼"
          value={password}
          onChange={(passwordInputValue) => {
            setPassword(passwordInputValue);
          }}
        />
      </AuthInputContainer>
      <AuthButton onClick={handleClick}>登入</AuthButton>
      <AuthLinkText>註冊</AuthLinkText>
    </AuthContainer>
  );
};

export default LoginPage;
