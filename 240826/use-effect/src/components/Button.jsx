import { React, useState, useEffect } from "react";

export default function Button({ buttontype, setCurrentListType, children }) {
  const handleButton = () => {
    switch (buttontype) {
      case "ALL":
        setCurrentListType("ALL");
        break;
      case "EUR":
        setCurrentListType("EUR");
        break;
    }
  };

  return <button onClick={handleButton}>{children}</button>;
}
