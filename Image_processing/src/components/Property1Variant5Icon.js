import { css } from "@emotion/css";

const Property1Variant5Icon = ({ dimensionsCode, propTop, propLeft }) => {
  return (
    <img
      className={css`position: absolute;
top: 526px;
left: 26px;
width: 100px;
height: 108px;
top: ${propTop}
left: ${propLeft}
`}
      alt=""
      src={dimensionsCode}
    />
  );
};

export default Property1Variant5Icon;
