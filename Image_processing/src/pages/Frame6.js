import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const Frame6 = () => {
  const navigate = useNavigate();

  const onImageClick = useCallback(() => {
    navigate("/frame-47");
  }, [navigate]);

  const onFrameContainerClick = useCallback(() => {
    navigate("/frame-32");
  }, [navigate]);

  const onUTurnToLeftClick = useCallback(() => {
    navigate("/frame-56");
  }, [navigate]);

  const onEllipseClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={css`
        width: 100%;
        position: relative;
        height: 471px;
        text-align: left;
        font-size: var(--font-size-xs);
        color: var(--color-black);
        font-family: var(--font-inter);
      `}
    >
      <div
        className={css`
          position: absolute;
          top: 0px;
          left: 19px;
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
            <img
              className={css`
                position: absolute;
                top: 270px;
                left: 110px;
                width: 65px;
                height: 51px;
                object-fit: cover;
              `}
              alt=""
              src="/slr-camera@2x.png"
            />
            <img
              className={css`
                position: absolute;
                top: 283px;
                left: 34px;
                border-radius: 50px;
                width: 52px;
                height: 36px;
                object-fit: cover;
                cursor: pointer;
              `}
              alt=""
              src="/image@2x.png"
              onClick={onImageClick}
            />
            <img
              className={css`
                position: absolute;
                top: 283px;
                left: 199px;
                width: 52px;
                height: 40px;
                object-fit: cover;
              `}
              alt=""
              src="/switch-camera@2x.png"
            />
            <div
              className={css`
                position: absolute;
                top: 384px;
                left: 52px;
              `}
            >
              Edit AI
            </div>
            <div
              className={css`
                position: absolute;
                top: 384px;
                left: 171px;
              `}
            >
              Handmade
            </div>
            <div
              className={css`
                position: absolute;
                top: 44px;
                left: 26px;
                background-color: #8d5252;
                width: 217px;
                height: 226px;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: 355px;
                left: 19px;
                width: 98px;
                height: 58px;
                cursor: pointer;
              `}
              onClick={onFrameContainerClick}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  width: 92px;
                  height: 58px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    width: 98px;
                    height: 58px;
                  `}
                >
                  <img
                    className={css`
                      position: absolute;
                      top: 0px;
                      left: 0px;
                      width: 98px;
                      height: 58px;
                    `}
                    alt=""
                    src="/ellipse-4.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 5px;
                      left: 37px;
                      width: 24px;
                      height: 20px;
                      object-fit: cover;
                    `}
                    alt=""
                    src="/dizzy-person@2x.png"
                  />
                </div>
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                top: 358px;
                left: 154px;
                width: 79px;
                height: 24px;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 37px;
                  width: 24px;
                  height: 20px;
                  object-fit: cover;
                `}
                alt=""
                src="/natural-user-interface-2@2x.png"
              />
            </div>
            <div
              className={css`
                position: absolute;
                top: 284px;
                left: 211px;
                width: 98px;
                height: 62px;
              `}
            />
            <img
              className={css`
                position: absolute;
                top: 7px;
                left: 71px;
                width: 46px;
                height: 29px;
                object-fit: cover;
                cursor: pointer;
              `}
              alt=""
              src="/u-turn-to-left@2x.png"
              onClick={onUTurnToLeftClick}
            />
            <img
              className={css`
                position: absolute;
                top: 7px;
                left: 135px;
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
                top: 355px;
                left: 154px;
                width: 98px;
                height: 58px;
                cursor: pointer;
              `}
              alt=""
              src="/ellipse-5.svg"
              onClick={onEllipseClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame6;
