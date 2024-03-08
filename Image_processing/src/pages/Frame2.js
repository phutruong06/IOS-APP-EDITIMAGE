import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";
import Property1Variant5Icon from "../components/Property1Variant5Icon";

const Frame2 = () => {
  const navigate = useNavigate();

  const onStartEditingPhotosClick = useCallback(() => {
    navigate("/frame-8");
  }, [navigate]);

  const onFrameIconClick = useCallback(() => {
    navigate("/frame-52");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/frame-55");
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
          background-image: url("/frame-54@3x.png");
          background-size: cover;
          background-repeat: no-repeat;
          background-position: top;
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
              top: 318px;
              left: 48px;
            `}
          >
            Reflective
          </div>
          <img
            className={css`
              position: absolute;
              top: 166px;
              left: 13px;
              border-radius: var(--br-3xs);
              width: 109px;
              height: 57px;
            `}
            alt=""
            src="/rectangle-1.svg"
          />
          <img
            className={css`
              position: absolute;
              top: 166px;
              left: 133px;
              border-radius: var(--br-3xs);
              width: 119px;
              height: 57px;
            `}
            alt=""
            src="/rectangle-2.svg"
          />
          <div
            className={css`
              position: absolute;
              top: 200px;
              left: 135px;
              font-size: var(--font-size-xs);
            `}
          >
            Image reproduction
          </div>
          <div
            className={css`
              position: absolute;
              top: 197px;
              left: 29px;
              font-size: var(--font-size-xs);
              text-align: left;
            `}
          >
            Delete object
          </div>
          <img
            className={css`
              position: absolute;
              top: 173px;
              left: 23px;
              width: 55px;
              height: 21px;
              object-fit: cover;
            `}
            alt=""
            src="/erase-image@2x.png"
          />
          <img
            className={css`
              position: absolute;
              top: 173px;
              left: 170px;
              width: 51px;
              height: 24px;
              object-fit: cover;
            `}
            alt=""
            src="/face-swapper@2x.png"
          />
          <div
            className={css`
              position: absolute;
              top: 273px;
              left: 45px;
            `}
          >
            Sharpen
          </div>
          <img
            className={css`
              position: absolute;
              top: 253px;
              left: 51px;
              width: 27px;
              height: 15px;
              object-fit: cover;
            `}
            alt=""
            src="/pencil-sharpener@2x.png"
          />
          <div
            className={css`
              position: absolute;
              top: 268px;
              left: 98px;
            `}
          >
            <p
              className={css`
                margin: 0;
              `}
            >
              Remove
            </p>
            <p
              className={css`
                margin: 0;
              `}
            >
              {" "}
              background
            </p>
          </div>
          <img
            className={css`
              position: absolute;
              top: 253px;
              left: 117px;
              width: 27px;
              height: 15px;
              object-fit: cover;
            `}
            alt=""
            src="/background-remover@2x.png"
          />
          <div
            className={css`
              position: absolute;
              top: 273px;
              left: 183px;
            `}
          >
            Text
          </div>
          <img
            className={css`
              position: absolute;
              top: 253px;
              left: 179px;
              width: 27px;
              height: 15px;
              object-fit: cover;
            `}
            alt=""
            src="/lowercase@2x.png"
          />
          <div
            className={css`
              position: absolute;
              top: 317px;
              left: 144px;
              display: inline-block;
              width: 42px;
              height: 13px;
            `}
          >
            <p
              className={css`
                margin: 0;
              `}
            >
              Makeup
            </p>
          </div>
          <img
            className={css`
              position: absolute;
              top: 300px;
              left: 148px;
              width: 27px;
              height: 15px;
              object-fit: cover;
            `}
            alt=""
            src="/lipstick@2x.png"
          />
          <div
            className={css`
              position: absolute;
              top: 41px;
              left: 32px;
              width: 187px;
              height: 117px;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: 367px;
              left: 44px;
              width: 166px;
              height: 35px;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 0px;
                border-radius: var(--br-3xs);
                background-color: var(--color-gainsboro-100);
                border: 1px solid var(--color-black);
                box-sizing: border-box;
                width: 166px;
                height: 35px;
              `}
            />
          </div>
          <div
            className={css`
              position: absolute;
              top: 378px;
              left: 73px;
              cursor: pointer;
            `}
            onClick={onStartEditingPhotosClick}
          >
            Start editing photos
          </div>
          <img
            className={css`
              position: absolute;
              top: 303px;
              left: 70px;
              width: 16.3px;
              height: 15px;
              object-fit: cover;
            `}
            alt=""
            src="/image-1@2x.png"
          />
          <img
            className={css`
              position: absolute;
              top: 12px;
              left: 222px;
              width: 30px;
              height: 25px;
              object-fit: cover;
              cursor: pointer;
            `}
            alt=""
            src="/frame-51@2x.png"
            onClick={onFrameIconClick}
          />
          <div
            className={css`
              position: absolute;
              top: 16px;
              left: 158px;
              width: 64px;
              height: 21px;
              cursor: pointer;
            `}
            onClick={onFrameContainer1Click}
          >
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 0px;
                border-radius: var(--br-11xl);
                background-color: var(--color-gainsboro-100);
                width: 64px;
                height: 21px;
              `}
            />
          </div>
          <div
            className={css`
              position: absolute;
              top: 20px;
              left: 176px;
            `}
          >
            PRO
          </div>
          <Property1Variant5Icon
            dimensionsCode="/image-sider.svg"
            propTop="54px"
            propLeft="78px"
          />
        </div>
      </div>
    </div>
  );
};

export default Frame2;
