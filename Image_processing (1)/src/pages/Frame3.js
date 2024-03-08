import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const Frame3 = () => {
  const navigate = useNavigate();

  const onArrowPointingLeftClick = useCallback(() => {
    navigate("/frame-56");
  }, [navigate]);

  return (
    <div
      className={css`
        width: 100%;
        position: relative;
        height: 471px;
        text-align: center;
        font-size: var(--font-size-2xs);
        color: var(--color-white);
        font-family: var(--font-inter);
      `}
    >
      <div
        className={css`
          position: absolute;
          top: 0px;
          left: 0px;
          width: 260px;
          height: 471px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            border-radius: var(--br-3xs);
            background-color: var(--color-white);
            border: 2px solid var(--color-black);
            box-sizing: border-box;
            width: 260px;
            height: 471px;
            overflow: hidden;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 74px;
              left: 20px;
              border-radius: var(--br-3xs);
              background-color: var(--color-gainsboro-100);
              width: 219px;
              height: 79px;
            `}
          />
          <div
            className={css`
              position: absolute;
              height: calc(100% - 421px);
              width: calc(100% - 46px);
              top: 181px;
              right: 24px;
              bottom: 240px;
              left: 22px;
              border-radius: var(--br-3xs);
              background-color: var(--color-gainsboro-100);
            `}
          />
          <div
            className={css`
              position: absolute;
              height: calc(100% - 421px);
              width: calc(100% - 46px);
              top: 252px;
              right: 24px;
              bottom: 169px;
              left: 22px;
              border-radius: var(--br-3xs);
              background-color: var(--color-gainsboro-100);
            `}
          />
          <div
            className={css`
              position: absolute;
              top: 257px;
              left: 33px;
              background: linear-gradient(180deg, #000, #666);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            `}
          >
            Annual + 3-day free trial
          </div>
          <div
            className={css`
              position: absolute;
              top: 283px;
              left: 33px;
              background: linear-gradient(180deg, #000, #666);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            `}
          >
            592.000VND/year
          </div>
          <div
            className={css`
              position: absolute;
              top: 288px;
              left: 140px;
              font-size: var(--font-size-8xs);
              background: linear-gradient(180deg, #000, #666);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            `}
          >
            Only 49.000VND/month
          </div>
          <div
            className={css`
              position: absolute;
              top: 220px;
              left: 44px;
              font-size: var(--font-size-8xs);
              background: linear-gradient(180deg, #000, #666);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            `}
          >
            Just buy once
          </div>
          <div
            className={css`
              position: absolute;
              top: 208px;
              left: 108px;
              font-size: 4px;
              background: linear-gradient(180deg, #000, #666);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              display: inline-block;
              width: 29px;
              height: 4px;
            `}
          >
            4.800.000VND
          </div>
          <div
            className={css`
              position: absolute;
              top: 183px;
              left: 37px;
              background: linear-gradient(180deg, #000, #666);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            `}
          >
            Lifetime Pro User
          </div>
          <div
            className={css`
              position: absolute;
              top: 182px;
              left: 129px;
              border-radius: var(--br-3xs);
              background-color: #cdcbcb;
              width: 44px;
              height: 11px;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: 184px;
              left: 139px;
              font-size: var(--font-size-8xs);
              text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            `}
          >
            Save 50%
          </div>
          <div
            className={css`
              position: absolute;
              top: 202px;
              left: 32px;
              font-size: var(--font-size-3xs);
              background: linear-gradient(180deg, #000, #666);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            `}
          >
            2.400.000VND
          </div>
          <img
            className={css`
              position: absolute;
              top: 211px;
              left: 110px;
              max-height: 100%;
              width: 28px;
              opacity: 0.5;
            `}
            alt=""
            src="/line-3.svg"
          />
          <div
            className={css`
              position: absolute;
              top: 75px;
              left: 19px;
              width: 220px;
              height: 78px;
              overflow: hidden;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 17px;
                left: 10px;
                background: linear-gradient(180deg, #000, #666);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              `}
            >
              Weekly + 3-day free trial
            </div>
            <div
              className={css`
                position: absolute;
                top: 39px;
                left: 12px;
                background: linear-gradient(180deg, #000, #666);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                -webkit-text-stroke: 1px #000;
              `}
            >
              95.000VND/Weekly
            </div>
          </div>
        </div>
        <img
          className={css`
            position: absolute;
            top: 14px;
            left: 13px;
            width: 39px;
            height: 39px;
            object-fit: cover;
            cursor: pointer;
          `}
          alt=""
          src="/arrow-pointing-left@2x.png"
          onClick={onArrowPointingLeftClick}
        />
      </div>
    </div>
  );
};

export default Frame3;
