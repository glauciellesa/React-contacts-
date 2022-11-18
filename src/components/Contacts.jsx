import styled from "styled-components";
import Avatar from "./Avatar";
import Bottom from "./Bottom";

export default (props) => {
  const contacts = props.contacts;
  return contacts.map(createContactCard);
};

const createContactCard = (contact) => (
  <StyledContacts key={contact.name}>
    <Card contact={contact} />
  </StyledContacts>
);

const Card = ({ contact }) => (
  <div className="card">
    <Header contact={contact} />
    <AvatarContainer>
      <Avatar img={contact.img} />
    </AvatarContainer>
    <Bottom info={contact} />
  </div>
);

const Header = ({ contact }) => (
  <div className="top">
    <h1> {contact.name} </h1>
  </div>
);

const AvatarContainer = ({ children }) => (
  <div className="divImg">{children}</div>
);

const StyledContacts = styled.div`
  display: flex;
  justify-content: center;
  .top {
    display: flex;
    border-radius: 25px 25px 0 0;
    width: 100%;
    height: 100px;
    background-color: #00cec9;
  }

  .card {
    position: relative;
    border-radius: 25px 25px;
    display: flex;
    flex-direction: column;
    background-color: #81ecec;
    box-shadow: 0 2px 5px #ccc;
    float: left;
    width: 400px;
    height: 250px;
    margin: 10px;

    h1 {
      font-size: 2.5em;
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      padding-left: 20px;
      color: #333;
    }

    .divImg {
      position: absolute;
      right: 20px;
      top: 40px;
    }

    .paragrafe {
      display: flex;
      flex-direction: column;
      padding-top: 20px;
    }

    p {
      padding-left: 20px;
      font-size: 1.2em;
      font-weight: 300;
      margin-bottom: 10px;
      white-space: pre-wrap;
      word-wrap: break-word;
      color: #3fa8a8;
    }
  }
`;
