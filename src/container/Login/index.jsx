import { Button, Container, Form, InputContainer, LeftContainer, Link, RightContainer, Title } from './styles';
import Logo from '../../assets/logo.svg';

export function Login() {
    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt='logo-dev'/>
            </LeftContainer>
            <RightContainer>
                <Title>
                    Olá, seja bem vindo ao <span>Dev Burger!</span> 
                    Acesse com seu <span>Login e Senha.</span>
                </Title>
                <Form>
                    <InputContainer>
                        <labal>Email</labal>
                        <input type="email"/>
                    </InputContainer>

                    <InputContainer>
                        <labal>Senha</labal>
                        <input type="password"/>
                    </InputContainer>
                    <Link>Esqueci minha senha.</Link>
                    <Button>Entrar</Button>
                </Form>
                <Link>não possui conta?</Link>
            </RightContainer>
        </Container>
    );
}