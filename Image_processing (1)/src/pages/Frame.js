import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/css";

const Frame = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/frame-21");
  }, [navigate]);

  const onFrameContainer2Click = useCallback(() => {
    navigate("/frame-3");
  }, [navigate]);

  const onFrameContainer3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div
      className={css`
        width: 100%;
        position: relative;
        height: 496px;
        text-align: left;
        font-size: var(--font-size-xs);
        color: var(--color-black);
        font-family: var(--font-inter);
      `}
    >
      <div
        className={css`
          position: absolute;
          top: 22px;
          left: 0px;
          width: 284px;
          height: 474px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            width: 288px;
            height: 474px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 9px;
              left: 8px;
              width: 144px;
              height: 43px;
              cursor: pointer;
            `}
            onClick={onFrameContainerClick}
          >
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 0px;
                width: 138px;
                height: 35px;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  width: 276px;
                  height: 465px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: -6px;
                    left: 7px;
                    border-radius: var(--br-3xs);
                    background-color: var(--color-white);
                    border: 2px solid var(--color-black);
                    box-sizing: border-box;
                    width: 267px;
                    height: 471px;
                    overflow: hidden;
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
                        top: 353px;
                        left: 12px;
                        width: 98px;
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
                          cursor: pointer;
                        `}
                        onClick={onFrameContainer2Click}
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
                              width: 92px;
                              height: 58px;
                            `}
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
                                <div
                                  className={css`
                                    position: absolute;
                                    top: 29px;
                                    left: 30px;
                                  `}
                                >
                                  Edit AI
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={css`
                        position: absolute;
                        top: 353px;
                        left: 154px;
                        width: 24px;
                        height: 20px;
                      `}
                    >
                      <div
                        className={css`
                          position: absolute;
                          top: 0px;
                          left: 0px;
                          width: 98px;
                          height: 62px;
                          cursor: pointer;
                        `}
                        onClick={onFrameContainer3Click}
                      >
                        <div
                          className={css`
                            position: absolute;
                            top: 0px;
                            left: 0px;
                            width: 98px;
                            height: 62px;
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
                            src="/ellipse-5.svg"
                          />
                          <img
                            className={css`
                              position: absolute;
                              top: 9px;
                              left: 37px;
                              width: 24px;
                              height: 20px;
                              object-fit: cover;
                            `}
                            alt=""
                            src="/natural-user-interface-2@2x.png"
                          />
                          <div
                            className={css`
                              position: absolute;
                              top: 31px;
                              left: 22px;
                            `}
                          >
                            Handmade
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className={css`
                        position: absolute;
                        top: 12px;
                        left: 157px;
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
                        top: 12px;
                        left: 67px;
                        width: 46px;
                        height: 29px;
                        object-fit: cover;
                      `}
                      alt=""
                      src="/u-turn-to-left@2x.png"
                    />
                  </div>
                  <img
                    className={css`
                      position: absolute;
                      top: 252px;
                      left: 13px;
                      width: 241px;
                      height: 31px;
                    `}
                    alt=""
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 62px;
                      left: 18px;
                      width: 236px;
                      height: 152px;
                      object-fit: cover;
                    `}
                    alt=""
                    src="/image-2@2x.png"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 91px;
                      left: 33px;
                      width: 70px;
                      height: 100px;
                    `}
                    alt=""
                    src="/rectangle-12.svg"
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 106px;
                      left: 117px;
                      background-color: var(--color-gainsboro-200);
                      border: 2px solid var(--color-yellow);
                      box-sizing: border-box;
                      width: 42px;
                      height: 102px;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 98px;
                      left: 167px;
                      background-color: var(--color-gainsboro-200);
                      border: 2px solid var(--color-mediumblue);
                      box-sizing: border-box;
                      width: 53px;
                      height: 116px;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 337px;
                      left: 13px;
                      width: 22px;
                      height: 46px;
                    `}
                  />
                  <div
                    className={css`
                      position: absolute;
                      top: 390px;
                      left: 14px;
                      width: 21.4px;
                      height: 51px;
                    `}
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

export default Frame;
