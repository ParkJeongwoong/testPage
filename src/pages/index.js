import React, { useContext, useEffect, useState } from "react";
import SEO from "components/seo";
import { store } from "store/store";
import Link from "next/link";
import globalStyles from "styles/globalStyles.module.css";
import styles from "styles/pages/Home.module.css";

export default function Home() {
  // 전역 상태 관리 (store)
  const globalState = useContext(store);
  const { value, dispatch } = globalState;
  const { home } = value;

  // Loading
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch({ type: "GET_HOME" });
    setIsLoading(false);
  }, [dispatch]);

  return (
    <div>
      <SEO
        description="안녕하세요. 개발자 박정웅의 블로그입니다. Hi! This is Park Jeongwoong's GitHub Blog."
        title="Home"
        siteTitle="웅's 블로그"
      />

      <main>
        {isLoading ? (
          <div className={globalStyles.loader}>
            <span className={globalStyles.loader_text}>Loading...</span>
          </div>
        ) : (
          <div className={styles.Home}>
            {/* 왼쪽 */}
            <div className={styles.Home__left}>
              <div>
                <div className={styles.Home__profile_img}>
                  {/* 프로필 이미지 */}
                  <img src={home.profile_img} alt="profile" />
                </div>
                <div className={styles.Home__profile_content}>
                  <h3>박정웅</h3>
                  <div>
                    {home.summary.split("\n").map((element, idx) =>
                      element[0] === "\t" ? (
                        <div
                          key={idx}
                          className={styles.Home__profile_content_detail}
                        >
                          {element}
                        </div>
                      ) : (
                        <div
                          key={idx}
                          className={styles.Home__profile_content_list}
                        >
                          {element}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* 오른쪽 */}
            <div className={styles.Home__right}>
              <div>
                <p>
                  <strong>{home.welcome_word}</strong>
                </p>
                <hr className={styles.Horizontal_Line} />
                <p>
                  <strong>소개글</strong>
                </p>
                <div>
                  {home.introduction.split("\n").map((element, idx) => (
                    <p key={idx}>{element}</p>
                  ))}
                </div>
                <hr className={styles.Horizontal_Line} />
                <div>
                  <Link href="/profile">
                    <a className={globalStyles.link_tag}>자세히 보러가기</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
