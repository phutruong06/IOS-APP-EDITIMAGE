import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const Frame4 = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/frame-61");
  }, [navigate]);

  const onFrameIconClick = useCallback(() => {
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
        color: var(--color-black);
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
              top: 29px;
              left: 102px;
            `}
          >
            Setting
          </div>
          <div
            className={css`
              position: absolute;
              top: 74px;
              left: 27px;
              width: 206px;
              height: 28px;
              cursor: pointer;
            `}
            onClick={onFrameContainerClick}
          >
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 0px;
                width: 206px;
                height: 28px;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  width: 206px;
                  height: 28px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    border-radius: var(--br-xl);
                    background-color: var(--color-gainsboro-100);
                    width: 206px;
                    height: 28px;
                  `}
                />
              </div>
            </div>
          </div>
          <img
            className={css`
              position: absolute;
              top: 76px;
              left: 211px;
              width: 14px;
              height: 24px;
              object-fit: cover;
            `}
            alt=""
            src="/forward@2x.png"
          />
          <div
            className={css`
              position: absolute;
              top: 140px;
              left: 27px;
              border-radius: var(--br-xl);
              background-color: var(--color-gainsboro-100);
              width: 206px;
              height: 28px;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: 175px;
              left: 27px;
              border-radius: var(--br-xl);
              background-color: var(--color-gainsboro-100);
              width: 206px;
              height: 28px;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: 183px;
              left: 62px;
            `}
          >
            Terms of service
          </div>
          <div
            className={css`
              position: absolute;
              top: 210px;
              left: 27px;
              border-radius: var(--br-xl);
              background-color: var(--color-gainsboro-100);
              width: 206px;
              height: 28px;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: 218px;
              left: 65px;
            `}
          >
            Feedback
          </div>
          <div
            className={css`
              position: absolute;
              top: 105px;
              left: 27px;
              border-radius: var(--br-xl);
              background-color: var(--color-gainsboro-100);
              width: 206px;
              height: 28px;
            `}
          />
          <img
            className={css`
              position: absolute;
              top: 146px;
              left: 34px;
              width: 20px;
              height: 16px;
              object-fit: cover;
            `}
            alt=""
            src="/letter@2x.png"
          />
          <img
            className={css`
              position: absolute;
              top: 181px;
              left: 34px;
              width: 20px;
              height: 16px;
              object-fit: cover;
            `}
            alt=""
            src="/terms-and-conditions@2x.png"
          />
          <img
            className={css`
              position: absolute;
              top: 80px;
              left: 34px;
              width: 20px;
              height: 16px;
              object-fit: cover;
            `}
            alt=""
            src="/share@2x.png"
          />
          <img
            className={css`
              position: absolute;
              top: 111px;
              left: 34px;
              width: 20px;
              height: 16px;
              object-fit: cover;
            `}
            alt=""
            src="/star-half-empty@2x.png"
          />
          <div
            className={css`
              position: absolute;
              top: 111px;
              left: 62px;
            `}
          >
            App reviews
          </div>
          <div
            className={css`
              position: absolute;
              top: 80px;
              left: 59px;
            `}
          >
            Share the application
          </div>
          <img
            className={css`
              position: absolute;
              top: 109px;
              left: 211px;
              width: 14px;
              height: 24px;
              object-fit: cover;
            `}
            alt=""
            src="/forward@2x.png"
          />
          <img
            className={css`
              position: absolute;
              top: 109px;
              left: 211px;
              width: 14px;
              height: 24px;
              object-fit: cover;
            `}
            alt=""
            src="/forward@2x.png"
          />
          <img
            className={css`
              position: absolute;
              top: 144px;
              left: 211px;
              width: 14px;
              height: 24px;
              object-fit: cover;
            `}
            alt=""
            src="/forward@2x.png"
          />
          <img
            className={css`
              position: absolute;
              top: 178px;
              left: 211px;
              width: 14px;
              height: 24px;
              object-fit: cover;
            `}
            alt=""
            src="/forward@2x.png"
          />
          <img
            className={css`
              position: absolute;
              top: 212px;
              left: 211px;
              width: 14px;
              height: 24px;
              object-fit: cover;
            `}
            alt=""
            src="/forward@2x.png"
          />
          <img
            className={css`
              position: absolute;
              top: 216px;
              left: 34px;
              width: 20px;
              height: 16px;
              object-fit: cover;
            `}
            alt=""
            src="/discussion-forum@2x.png"
          />
          <div
            className={css`
              position: absolute;
              top: 147px;
              left: 62px;
            `}
          >
            Contact us
          </div>
          <img
            className={css`
              position: absolute;
              top: 12px;
              left: 17px;
              width: 33px;
              height: 48px;
              object-fit: cover;
              cursor: pointer;
            `}
            alt=""
            src="/frame-55@2x.png"
            onClick={onFrameIconClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Frame4;
