import { styled } from "styled-components";
import { Colors } from "../../components/Colors/Colors";

const CodeContainer = styled.div`
  margin-top: 100px;
  padding: 20px 70px;
  margin-bottom: 100px;
  h2 {
    color: ${Colors.neutral_color.color900};
    font-size: 20px;
  }
  div.vendorContainer {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  @media (max-width: 768px) {
    padding: 20px 30px;
  }
`;

const VendorItem = styled.div`
  display: flex;
  gap: 20px;
  width: 50%;
  border-bottom: 2px solid ${Colors.orange_color.color200};
  padding: 20px;
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

  div.vendorDetails {
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex: 1;
    h4 {
        color: ${Colors.neutral_color.color900};
        font-size: 20px;
    }
    p {
        color: ${Colors.neutral_color.color800};
        font-size: 15px;
    }
  }

  a.vendorLink {
    text-decoration: none;
    color: ${Colors.green_color.color200};
    i {
        font-size: 40px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export { CodeContainer, VendorItem };
