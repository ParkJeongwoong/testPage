import React, { useContext, useEffect, useState } from "react";
import ArticleCategory from "components/Articles/Articles__Category";
import MarkdownRenderer from "components/Markdown/MarkdownRenderer";
import SEO from "components/seo";
import { store } from "store/store";
import { useRouter } from "next/router";
import globalStyles from "styles/globalStyles.module.css";
import styles from "styles/pages/ArticleDetail.module.css";

function ArticleDetail() {
  // router 사용
  const router = useRouter();
  // 전역 상태 관리 (store)
  const globalState = useContext(store);
  const { value, dispatch } = globalState;
  const { articles } = value;

  // Loading
  const [isLoading, setIsLoading] = useState(true);

  // Markdown file
  const [markdown, setMarkdown] = useState("");
  const [documentTitle, setDocumentTitle] = useState("");
  const [path, setPath] = useState("");

  useEffect(() => {
    dispatch({ type: "GET_ARTICLES" });
  }, [dispatch]);

  useEffect(() => {
    // 파일 주소 찾기
    if (articles.categoryList) {
      articles.categoryList.forEach(categoryElement => {
        if (categoryElement.category === router.query.articleCategory) {
          categoryElement.itemList.forEach(articleElement => {
            if (articleElement.id === parseInt(router.query.articleId)) {
              setPath(articleElement.content);
              setDocumentTitle(articleElement.title);
            }
          });
        }
      });
    }
  }, [articles.categoryList, router.query]);

  useEffect(() => {
    if (path) {
      const readmePath = require(`store/article_data/${path.split("/")[2]}/${
        path.split("/")[3]
      }`);

      // 파일 가져오기
      setMarkdown(readmePath.default);
    }
  }, [markdown, path]);

  useEffect(() => {
    dispatch({ type: "GET_ARTICLES" });
    setIsLoading(false);
  }, [dispatch]);

  return (
    <div>
      <SEO
        description={markdown}
        title={documentTitle}
        siteTitle="웅's 블로그"
      />

      <div>
        {isLoading ? (
          <div className={globalStyles.loader}>
            <span className={globalStyles.loader_text}>Loading...</span>
          </div>
        ) : (
          <div className={styles.ArticleDetail}>
            {/* 왼쪽 */}
            <div className={styles.ArticleDetail__left}>
              <ArticleCategory />
            </div>
            {/* 오른쪽 */}
            <div className={styles.ArticleDetail__right}>
              <MarkdownRenderer
                documentTitle={documentTitle}
                markdown={markdown}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ArticleDetail;
