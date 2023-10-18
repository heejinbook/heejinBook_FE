import styled from '@emotion/styled';

export const SignUpInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  label {
    margin-bottom: 10px;
    cursor: pointer;
  }
  button {
    cursor: pointer;
    width: 100%;
    height: 50px;
    padding: 10px 40px;
    border: none;
    border-radius: 5px;
    background-color: #fcf2cc;
    color: #503f15;
    font-size: 16px;
    font-weight: bold;
  }
`;

export const Profile = styled.img`
  border: 1px solid #b9b19c;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  padding: 15px;
`;
