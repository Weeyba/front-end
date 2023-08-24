import { styled } from "styled-components";
import AfBg from "../../assets/images/bg1.jpeg";
import AcBg from "../../assets/images/bg2.jpeg";
import { Colors } from "../../components/Colors/Colors";

const DashboardContainer = styled.div`
  margin: 100px auto;
  display: flex;
  gap: 30px;
  flex-direction: column;
  padding: 20px 70px;

  div.userMessageContainer {
    display: flex;
    align-items: center;

    div.welcomeMessage {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;
      h2.userGreeting {
        color: ${Colors.orange_color.color200};
        font-size: 25px;
      }
      h3.greetingMessage {
        color: ${Colors.neutral_color.color900};
      }
    }

    div.profilePhoto {
      border: 2px solid ${Colors.orange_color.color200};
      height: 50px;
      width: 50px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;

      i {
        color: ${Colors.orange_color.color200};
        font-size: 20px;
      }
    }
  }

  div.userWalletContainer {
    display: flex;
    gap: 30px;

    div.affiliateBalance {
      background: url(${AfBg}) no-repeat;
      height: 200px;
      width: 400px;
      border-radius: 30px;
      display: flex;
      padding: 20px;
      align-items: center;
      gap: 20px;
      i {
        color: ${Colors.white};
        font-size: 30px;
      }
      div.affiliateGroup {
        display: flex;
        flex-direction: column;
        gap: 10px;
        color: ${Colors.white};

        h3.affiliateTitle {
          font-size: 15px;
        }
        h2.affiliateValue {
          font-size: 20px;
        }
      }
    }

    div.activityBalance {
      background: url(${AcBg}) no-repeat;
      height: 200px;
      width: 400px;
      border-radius: 30px;
      display: flex;
      padding: 20px;
      align-items: center;
      gap: 20px;
      i {
        color: ${Colors.orange_color.color200};
        font-size: 30px;
      }
      div.activityGroup {
        display: flex;
        flex-direction: column;
        gap: 10px;
        color: ${Colors.orange_color.color200};

        h3.activityTitle {
          font-size: 15px;
        }
        h2.activityValue {
          font-size: 20px;
        }
      }
    }
  }

  div.quickLinks {
    display: flex;
    flex-direction: column;
    gap: 20px;

    h2.quickLinksTitle {
      color: ${Colors.orange_color.color200};
      font-size: 25px;
    }

    div.quickLinksContainer {
      display: flex;
      flex-direction: row;
      gap: 40px;
      a.quickLink {
        text-decoration: none;
        color: ${Colors.black};
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;

        div.iconContainer {
          border: 2px solid ${Colors.orange_color.color200};
          height: 50px;
          width: 50px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: center;

          i {
            color: ${Colors.orange_color.color200};
            font-size: 20px;
          }
        }
        p.quickLinkName {
            font-size: 15px;
            font-weight: bold;
        }
      }
    }
  }

  div.referralLink {
    display: flex;
    flex-direction: column;
    gap: 20px;

    h2.referralLinkTitle {
        color: ${Colors.orange_color.color200};
        font-size: 25px;
    }

    div.referralContainer {
        display: flex;
        gap: 20px;
        align-items: center;

        div.referralBox {
            border: 2px solid ${Colors.orange_color.color200};
            height: 50px;
            padding: 20px;
            display: flex;
            align-items: center;
            border-radius: 9px;
            color: ${Colors.neutral_color.color600};
            width: 80%;
        }

        button.copyButton {
            outline: none;
            border: none;
            background: none;
            background-color: ${Colors.orange_color.color200};
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50px;
            height: 50px;
            width: 50px;
        }
    }
  }

  @media (max-width: 768px) {
    padding: 20px 30px;

    div.userWalletContainer {
        overflow-x: auto;
        white-space: nowrap
        
    }
  }
`;

export { DashboardContainer };
