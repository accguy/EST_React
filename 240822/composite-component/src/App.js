import { useState } from "react";
import styled from "styled-components";
import PriceFormatter from "./PriceFormatter";

const CardDiv = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #c4c4c4;
  margin-bottom: 20px;
  width: ${(props) => (props.className === "setting" ? "300px" : "400px")};
`;

const Card = (props) => {
  return (
    <CardDiv className={props.className}>
      <h3>{props.value}</h3>
      <hr />
      <div>{props.children}</div>
    </CardDiv>
  );
};

const SettingCard = () => {
  return (
    <>
      <button>초기화</button>
      <button>저장하기</button>
    </>
  );
};

const ShareCard = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut
        eveniet, laudantium, deleniti autem sequi molestias magni quia, aliquam
        et praesentium nostrum dolores culpa cupiditate unde doloremque labore
        beatae accusamus.
      </p>
      <div>
        <button>이미지 저장</button>
        <button>트위터</button>
        <button>페이스북</button>
      </div>
    </>
  );
};

// 실습
const ContCard = (props) => {
  return <CardDiv className={props.className}>{props.children}</CardDiv>;
};

const ProductImage = (props) => {
  return <img src={props.src} alt={props.alt} />;
};
const ProductTitle = (props) => {
  return <h1>{props.children}</h1>;
};
const ProductSubTitle = (props) => {
  return <h2>{props.children}</h2>;
};
const ProductDescription = (props) => {
  return <p>{props.children}</p>;
};

const ProductPrice = ({ price_kr }) => {
  const [currencyType, setCurrencyType] = useState("");

  const usd_rate = 1335.51; // 달러 환율
  const eur_rate = 1488.09; // 유로 환율

  const getCurrentPrice = (currencyType) => {
    switch (currencyType) {
      case "won":
        return `가격: ${(+price_kr).toLocaleString("ko-KR", {
          style: "currency",
          currency: "KRW",
        })}`;
      case "usd":
        return `price: ${(+price_kr / usd_rate).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}`;
      case "eur":
        return `price: ${(+price_kr / eur_rate).toLocaleString("it-IT", {
          style: "currency",
          currency: "EUR",
        })}`;
      default:
        return "NOTHING SELECTED";
    }
  };

  return (
    <div>
      <label htmlFor="currency-select">기부해주세요: </label>
      <select
        name="currency"
        id="currency-select"
        onChange={(e) => {
          setCurrencyType(e.target.value);
        }}
      >
        <option value="">--select--</option>
        <option value="won">WON</option>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
      </select>
      <p>{getCurrentPrice(currencyType)}</p>
    </div>
  );
};

function App() {
  return (
    <>
      <Card className="setting" value="챌린지 설정">
        <SettingCard />
      </Card>
      <Card className="share" value="서비스 공유하기">
        <ShareCard />
      </Card>

      {/* 실습 */}
      <ContCard className="setting">
        <ProductImage
          src={"https://picsum.photos/id/237/200/300"}
          alt={"검은강아지"}
        />
        <ProductTitle>검은 강아지를 입양하세요</ProductTitle>
        <ProductSubTitle>엄청 얌전하답니다. 우리개는 안물어요!</ProductSubTitle>
        <ProductDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
          distinctio sed molestias saepe reiciendis fugit illum enim et
          inventore, aliquam esse non nam consectetur minima atque consequuntur
          voluptates, eum quia.
        </ProductDescription>
        <ProductPrice price_kr="300000000" />
        <PriceFormatter price="30000" currenyCode="KRW" />
      </ContCard>
    </>
  );
}

export default App;
