import styled from "styled-components";

const Contacts = (props) => {
  const contacts = props.contacts;
  return contacts.map((contact) => {
    return (
      <StyledNotes key={contact.name}>
        <div className="card">
          <div className="top">
            <h1> {contact.name} </h1>
          </div>
          <div className="divImg">
            <img src={contact.img} alt="images" />
          </div>
          <div className="paragrafe">
            <p> {contact.phone} </p>
            <p> {contact.email}</p>
          </div>
        </div>
      </StyledNotes>
    );
  });
};

export default Contacts;

const StyledNotes = styled.div`
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

    .divImg {
      position: absolute;
      right: 20px;
      top: 40px;
    }

    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 7px solid #fff;
      object-fit: cover;
    }

    h1 {
      font-size: 2.5em;
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      padding-left: 20px;
      color: #333;
    }

    .paragrafe {
      display: flex;
      flex-direction: column;
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
