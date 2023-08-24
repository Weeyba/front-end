import React from "react";
import { CodeContainer, VendorItem } from "./code.styled";

export default function GetCode() {
  const vendors = [
    {
      id: 1,
      name: "Dues-Soft🔥🙂",
      link: "https://wa.me/qr/CVE5VVCF6FIEI1",
      bank: "Opay",
      imgUrl: "",
    },
    {
      id: 2,
      name: "Popbia",
      link: "https://wa.me/message/V5PUSFRSSBRMO1",
      bank: "Kuda",
    },
    {
      id: 3,
      name: "Shopping store",
      link: "https://wa.me/message/PAIFTDS3T3TNF1",
      bank: "Kuda",
      imgUrl: "",
    },
    {
      id: 4,
      name: "GoldenPrime",
      link: "https://wa.me/qr/PLOYNG7SSTUFE1",
      bank: "Kuda",
      imgUrl: "",
    },
  ];
  return (
    <CodeContainer>
      <h2>Reach out to any of the vendors below to get your code</h2>
      <div className="vendorContainer">
        {vendors.map((vendor) => (
          <VendorItem key={vendor.id}>
            <div className="iconContainer">
              <i className="fa fa-user" aria-hidden="true"></i>
            </div>
            <div className="vendorDetails">
              <h4>{vendor.name}</h4>
              <p>{vendor.bank}</p>
            </div>
            <a className="vendorLink" href={vendor.link}>
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </VendorItem>
        ))}
      </div>
    </CodeContainer>
  );
}
