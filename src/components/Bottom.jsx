import styled from "styled-components";

const Bottom = ({ info }) => {
  return (
    <StyledBottom>
      {!!info.phone && <p> {info.phone} </p>}
      {!!info.email && <p> {info.email}</p>}
    </StyledBottom>
  );
};

export default Bottom;

const StyledBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  p {
    padding-left: 20px;
    font-size: 1.2em;
    font-weight: 300;
    margin-bottom: 10px;
    white-space: pre-wrap;
    word-wrap: break-word;
    color: #3fa8a8;
  }
`;
