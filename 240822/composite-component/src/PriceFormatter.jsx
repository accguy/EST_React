import React from "react";

const currencyConfig = {
  USD: { locale: "en-US", currency: "USD", symbol: "$" },
  KRW: { locale: "ko-KR", currency: "KRW", symbol: "₩" },
  JPY: { locale: "ja", currency: "JPY", symbol: "¥" },
  EUR: { locale: "it-IT", currency: "EUR", symbol: "€" },
};

const formatPrice = (price, currenyCode) => {
  // 예외 처리(||): 첫번째로 오는 truthy 한 값 or 모두 falsy할때 마지막 falsy값
  const config = currencyConfig[currenyCode] || currencyConfig.KRW;

  return new Intl.NumberFormat(config.locale, {
    style: "currency", // 종류: 화폐
    currency: config.currency, // 화폐 종류:
    minimumFractionDigits: 2, // 최소 소수점 처리
    maximumFractionDigits: 2, // 최대 소수점 처리
  }).format(price);
};

function PriceFormatter({ price, currenyCode }) {
  const formattedPrice = formatPrice(price, currenyCode);
  // <data>: 특정 데이터를 기계가 해석 할 수 있도록 전달하는 태그
  return <data value={formattedPrice}>{formattedPrice}원 입니다~</data>;
}

export default PriceFormatter;
