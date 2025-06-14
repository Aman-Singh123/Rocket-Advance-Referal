import React, { useEffect, useState } from "react";
import "./DealsCard.scss";
import { ShareIcon } from "../../../StoreImages/StoreImage";

export default function DealsCard(
  {
    cardImgLeft,
    dealsText,
    DealsValue,
    fontLg,
    smallText,
  },
  props
) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const desktopCard = (
    <div className="dealsCard whiteCard" {...props}>
      <div className="dealsCard_imgSec">
        <span className="dealsCard_imgSec_left">
          {cardImgLeft && <img src={cardImgLeft} alt="Icon" />}
        </span>
        <span className="dealsCard_imgSec_right">
          {dealsText && <h3>{dealsText}</h3>}
        </span>
      </div>
      <p className="smallText">{smallText}</p>
      <h2 className={fontLg ? "fontLg" : ""}>{DealsValue}</h2>
    </div>
  );

  const mobileCard = (
    <div className="smallCards">
      {/* Deal Referrals Card */}
      <div className="smallCards_container">
        <div className="smallCards_container_top">
          <div className="smallCards_container_left">
            {cardImgLeft && <img src={cardImgLeft} alt="Icon" />}
          </div>
          <div className="smallCards_container_right">
            <h3>{dealsText}</h3>
            <h1 className="fontStyle32Base" style={{ color: "#d82f4a" }}>
              {DealsValue}
            </h1>
          </div>
        </div>
      </div>

      {/* Partner Link Card */}
      <div className="smallCards_container">
        <div className="smallCards_container_top">
          <div className="smallCards_container_left">
            <ShareIcon />
          </div>
          <div className="smallCards_container_right">
            <h3 style={{ color: "#e42654", fontWeight: "bold" }}>
              Your Partner Link
            </h3>
          </div>
        </div>
      </div>
    </div>
  );

  return <>{isMobile ? mobileCard : desktopCard}</>;
}
