import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const FadeIn = keyframes`
  0% {
    opacity: 0;
 }
  100% {
    opacity: 1;
 }
`;

const Wrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
 background-color: #f7f7f7;
 animation: ${FadeIn} 1s;
`;

const Form = styled.form`
 display: flex;
 flex-direction: column;
 background-color: #fff;
 padding: 20px;
 border-radius: 5px;
 box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
 width: 100%;
 max-width: 400px;
`;

const Title = styled.h1`
 color: #333;
 font-size: 24px;
 text-align: center;
 margin-bottom: 20px;
`;

const Input = styled.input`
 padding: 10px;
 margin-bottom: 10px;
 border: 1px solid #ddd;
 border-radius: 3px;
 font-size: 14px;
`;

const Button = styled.button`
 padding: 10px;
 margin-top: 10px;
 border: none;
 border-radius: 3px;
 background-color: #007bff;
 color: #fff;
 font-size: 14px;
 cursor: pointer;
 width: 100%;
`;

const Login = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
 };

 return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Login</Button>
      </Form>
    </Wrapper>
 );
};

export default Login;