import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const Frame8 = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/frame-21");
  }, [navigate]);

  const onFrameIconClick = useCallback(() => {
    navigate("/frame-32");
  }, [navigate]);

  return (
    <div
      className={css`
        width: 100%;
        position: relative;
        height: 474px;
        text-align: left;
        font-size: var(--font-size-3xs);
        color: var(--color-black);
        font-family: var(--font-inter);
      `}
    >
      <div
        className={css`
          position: absolute;
          top: 0px;
          left: 0px;
          width: 267px;
          height: 474px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            width: 258px;
            height: 474px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 3px;
              left: 0px;
              width: 267px;
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
                width: 267px;
                height: 471px;
                overflow: hidden;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  top: 70px;
                  left: 13px;
                  width: 242.5px;
                  height: 142px;
                  object-fit: cover;
                `}
                alt=""
                src="/image-2@2x.png"
              />
              <div
                className={css`
                  position: absolute;
                  top: 13px;
                  left: 197px;
                  border-radius: var(--br-11xl);
                  background-color: var(--color-gainsboro-100);
                  width: 54px;
                  height: 18px;
                  cursor: pointer;
                `}
                onClick={onRectangleClick}
              />
              <div
                className={css`
                  position: absolute;
                  top: 16px;
                  left: 215px;
                `}
              >
                Save
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className={css`
          position: absolute;
          top: 20px;
          left: 138px;
          width: 46px;
          height: 29px;
          object-fit: cover;
        `}
        alt=""
        src="/u-turn-to-right@2x.png"
      />
      <div
        className={css`
          position: absolute;
          top: 258px;
          left: 97px;
          width: 64px;
          height: 27px;
          color: var(--color-whitesmoke);
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            border-radius: var(--br-11xl);
            background-color: var(--color-blue);
            width: 64px;
            height: 27px;
          `}
        />
        <img
          className={css`
            position: absolute;
            top: 5px;
            left: 8px;
            width: 17px;
            height: 18px;
            object-fit: cover;
          `}
          alt=""
          src="/done@2x.png"
        />
        <div
          className={css`
            position: absolute;
            top: 8px;
            left: 28px;
          `}
        >
          Delete
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 2px;
          left: 6px;
          width: 128px;
          height: 46px;
        `}
      >
        <img
          className={css`
            position: absolute;
            top: 20px;
            left: 74px;
            width: 46px;
            height: 29px;
            object-fit: cover;
            cursor: pointer;
          `}
          alt=""
          src="/u-turn-to-left@2x.png"
          onClick={onFrameIconClick}
        />
      </div>
    </div>
  );
};

export default Frame8;
