import styled from "styled-components";

const Avatar = ({ img }) => {
  return (
    <StyledAvatar>
      <img src={img} alt="images" />
    </StyledAvatar>
  );
};

export default Avatar;

const StyledAvatar = styled.div`
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 7px solid #fff;
    object-fit: cover;
  }
`;
