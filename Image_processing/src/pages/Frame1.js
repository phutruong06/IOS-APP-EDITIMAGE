import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const Frame1 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/frame-31");
  }, [navigate]);

  return (
    <div
      className={css`
        width: 100%;
        position: relative;
        height: 486px;
        text-align: left;
        font-size: var(--font-size-3xs);
        color: var(--color-whitesmoke);
        font-family: var(--font-inter);
      `}
    >
      <div
        className={css`
          position: absolute;
          top: 10px;
          left: 29px;
          width: 269px;
          height: 476px;
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
              top: 0px;
              left: 0px;
              width: 269px;
              height: 471px;
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
                  top: 0px;
                  left: 0px;
                  width: 269px;
                  height: 471px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: -2px;
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
                  <img
                    className={css`
                      position: absolute;
                      top: 66px;
                      left: 14px;
                      width: 242px;
                      height: 142px;
                      object-fit: cover;
                    `}
                    alt=""
                    src="/image-2@2x.png"
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 92px;
                      left: 35px;
                      background-color: var(--color-gainsboro-200);
                      border: 2px solid rgba(66, 200, 44, 0.99);
                      box-sizing: border-box;
                      width: 65px;
                      height: 98px;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 105px;
                      left: 117px;
                      background-color: var(--color-gainsboro-200);
                      border: 2px solid var(--color-yellow);
                      box-sizing: border-box;
                      width: 39px;
                      height: 102px;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 97px;
                      left: 165px;
                      background-color: var(--color-gainsboro-200);
                      border: 2px solid var(--color-mediumblue);
                      box-sizing: border-box;
                      width: 53px;
                      height: 111px;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 258px;
                      left: 97px;
                      width: 64px;
                      height: 27px;
                      cursor: pointer;
                    `}
                    onClick={onFrameContainerClick}
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
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 266px;
                      left: 125px;
                    `}
                  >
                    Delete
                  </div>
                  <div
                    className={css`
                      position: absolute;
                      top: 6px;
                      left: 101px;
                      width: 55px;
                      height: 21px;
                    `}
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 263px;
                      left: 106px;
                      width: 17px;
                      height: 18px;
                      object-fit: cover;
                    `}
                    alt=""
                    src="/done@2x.png"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 13px;
                      left: 156px;
                      width: 46px;
                      height: 29px;
                      object-fit: cover;
                    `}
                    alt=""
                    src="/u-turn-to-right@2x.png"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 13px;
                      left: 66px;
                      width: 46px;
                      height: 29px;
                      object-fit: cover;
                    `}
                    alt=""
                    src="/u-turn-to-left@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame1;
