import { styled } from "styled-components";
import BackgroundImage from "../../assets/images/background.png";
import { Colors } from "../../components/Colors/Colors";

const AuthContainer = styled.div`
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  height: 124vh;
  position:relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px auto;
  padding: 20px;
`;

const AuthBodyContainer = styled.div`
  background-color: ${Colors.white};
  width: 500px;
  border-radius: 10px;
  padding: 20px;
  
  div.brandLogo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div.authHeading {
    margin: 20px 0;
    text-align: center;
    h2 {
      font-size: 20px;
      color: ${Colors.neutral_color.color900};
    }
  }

  div.authForm {
    display: flex;
    flex-direction: column;
    gap: 20px;

    div.textInputContainer {
      display: flex;
      flex-direction: column;
      gap: 20px;
      a {
        text-decoration: none;
        color: ${Colors.orange_color.color200};
        font-size: 16px;
      }
    }

    div.formCTA {
      display: flex;
      gap: 5px;
      a {
        text-decoration: none;
        color: ${Colors.orange_color.color200};
        font-size: 16px;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export { AuthBodyContainer, AuthContainer };
