import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const Frame7 = () => {
  const navigate = useNavigate();

  const onArrowPointingLeftClick = useCallback(() => {
    navigate("/frame-21");
  }, [navigate]);

  return (
    <div
      className={css`
        width: 100%;
        position: relative;
        height: 471px;
        text-align: left;
        font-size: 15px;
        color: var(--color-black);
        font-family: var(--font-inter);
      `}
    >
      <div
        className={css`
          position: absolute;
          top: 0px;
          left: 0px;
          width: 269px;
          height: 471px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 7px;
            left: 0px;
            border-radius: var(--br-3xs);
            background-color: var(--color-white);
            border: 2px solid var(--color-black);
            box-sizing: border-box;
            width: 269px;
            height: 471px;
            overflow: hidden;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 20px;
              left: 110px;
            `}
          >
            Library
          </div>
          <img
            className={css`
              position: absolute;
              top: 16px;
              left: 13px;
              width: 47px;
              height: 33px;
              object-fit: cover;
              cursor: pointer;
            `}
            alt=""
            src="/arrow-pointing-left@2x.png"
            onClick={onArrowPointingLeftClick}
          />
          <img
            className={css`
              position: absolute;
              top: 72px;
              left: 13px;
              width: 83px;
              height: 55px;
              object-fit: cover;
            `}
            alt=""
            src="/image-6@2x.png"
          />
          <img
            className={css`
              position: absolute;
              top: 73px;
              left: 103px;
              width: 88px;
              height: 54px;
              object-fit: cover;
            `}
            alt=""
            src="/image-3@2x.png"
          />
          <div
            className={css`
              position: absolute;
              top: 56px;
              left: 23px;
              font-size: var(--font-size-3xs);
            `}
          >
            Today
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame7;
