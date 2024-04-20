import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SalesBannerComp = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 2rem;
  background-color: lightgreen;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001; /* Ensure the banner is on top of other content */
`;

const SalesBanner = () => {
  const [countdown, setCountdown] = useState(3600);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prevCountdown) =>
        prevCountdown > 0 ? prevCountdown - 1 : 0
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatCountdown = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  return (
    <SalesBannerComp>
      Next sales starts in: {formatCountdown(countdown)}
    </SalesBannerComp>
  );
};

export default SalesBanner;
