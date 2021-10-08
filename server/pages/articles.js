(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 8178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ articles),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/Articles/Articles__Category.js
var Articles_Category = __webpack_require__(5219);
// EXTERNAL MODULE: ./src/store/store.js + 6 modules
var store = __webpack_require__(5502);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/styles/components/Articles__List.module.css
var Articles_List_module = __webpack_require__(2187);
var Articles_List_module_default = /*#__PURE__*/__webpack_require__.n(Articles_List_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/Articles/Articles__List.js







function Articles__List() {
  // router 사용
  const router = (0,router_.useRouter)(); // 전역 상태 관리 (store)

  const globalState = (0,external_react_.useContext)(store/* store */.h);
  const {
    value
  } = globalState;
  const {
    articles
  } = value;
  const {
    0: selectedCategory,
    1: setSelectedCategory
  } = (0,external_react_.useState)("전체보기");
  const {
    0: articleList,
    1: setArticleList
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    if (articles.categoryId === -1) {
      setSelectedCategory("전체보기");
      setArticleList(articles.categoryList.reduce((acc, curr) => {
        acc.push(...curr.itemList);
        return acc;
      }, []).sort(function (a, b) {
        if (a.date > b.date) {
          return 1;
        } else {
          return -1;
        }
      }));
    } else {
      const selectedArticles = articles.categoryList.filter(category => category.id === articles.categoryId);
      setSelectedCategory(selectedArticles[0].category);
      setArticleList(selectedArticles[0].itemList);
    }
  }, [articles.categoryId, articles.categoryList]); // 글 선택

  const selectArticle = event => {
    const path = event.target.getAttribute("value");
    router.push({
      pathname: `/articles/${path}`
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Articles_List_module_default()).Articles__List,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (Articles_List_module_default()).Articles__List__Selected,
      children: selectedCategory
    }), articleList[0] ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: articleList.slice(0).reverse().map((article, idx) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Articles_List_module_default()).Articles__List__Article,
        onClick: selectArticle,
        value: `${article.category}/${article.id}`,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Articles_List_module_default()).Article__Title,
          value: `${article.category}/${article.id}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
            value: `${article.category}/${article.id}`,
            children: article.title
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Articles_List_module_default()).Article__Category_Date,
          value: `${article.category}/${article.id}`,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Articles_List_module_default()).Article__Category,
            value: `${article.category}/${article.id}`,
            children: article.category
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (Articles_List_module_default()).Article__Date,
            value: `${article.category}/${article.id}`,
            children: `
                ${article.date.getFullYear()}년
                ${article.date.getMonth() + 1}월
                ${article.date.getDate()}일
              `
          })]
        })]
      }, idx))
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: "\uAC8C\uC2DC\uAE00\uC774 \uC5C6\uC2B5\uB2C8\uB2E4."
    })]
  });
}

/* harmony default export */ const Articles_List = (Articles__List);
// EXTERNAL MODULE: ./src/components/seo.js
var seo = __webpack_require__(9026);
// EXTERNAL MODULE: ./src/styles/globalStyles.module.css
var globalStyles_module = __webpack_require__(3124);
var globalStyles_module_default = /*#__PURE__*/__webpack_require__.n(globalStyles_module);
// EXTERNAL MODULE: ./src/styles/pages/Articles.module.css
var Articles_module = __webpack_require__(263);
var Articles_module_default = /*#__PURE__*/__webpack_require__.n(Articles_module);
;// CONCATENATED MODULE: ./src/pages/articles.js










function Articles({
  test
}) {
  console.log(test); // 전역 상태 관리 (store)

  const globalState = (0,external_react_.useContext)(store/* store */.h);
  const {
    dispatch
  } = globalState; // Loading

  const {
    0: isLoading,
    1: setIsLoading
  } = (0,external_react_.useState)(true);
  (0,external_react_.useEffect)(() => {
    dispatch({
      type: "GET_ARTICLES"
    });
    setIsLoading(false);
  }, [dispatch]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(seo/* default */.Z, {
      description: "\uC548\uB155\uD558\uC138\uC694. \uAC1C\uBC1C\uC790 \uBC15\uC815\uC6C5\uC758 \uBE14\uB85C\uADF8\uC785\uB2C8\uB2E4. Hi! This is Park Jeongwoong's GitHub Blog.",
      title: "Articles",
      siteTitle: "\uC6C5's \uBE14\uB85C\uADF8"
    }), /*#__PURE__*/jsx_runtime_.jsx("main", {
      children: isLoading ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (globalStyles_module_default()).loader,
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (globalStyles_module_default()).loader_text,
          children: "Loading..."
        })
      }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Articles_module_default()).Articles,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Articles_module_default()).Articles__left,
          children: /*#__PURE__*/jsx_runtime_.jsx(Articles_Category/* default */.Z, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (Articles_module_default()).Articles__right,
          children: /*#__PURE__*/jsx_runtime_.jsx(Articles_List, {})
        })]
      })
    })]
  });
}

/* harmony default export */ const articles = (Articles);
async function getStaticProps() {
  return {
    props: {
      test: "Hello, this is Test Data"
    }
  };
}

/***/ }),

/***/ 2187:
/***/ ((module) => {

// Exports
module.exports = {
	"Articles__List": "Articles__List_Articles__List__2kDaU",
	"Articles__List__Selected": "Articles__List_Articles__List__Selected__3uc9r",
	"Articles__List__Article": "Articles__List_Articles__List__Article__20nrI",
	"Article__Title": "Articles__List_Article__Title__36lUc",
	"Article__Category_Date": "Articles__List_Article__Category_Date__1AVcd",
	"Article__Date": "Articles__List_Article__Date__3MvIL"
};


/***/ }),

/***/ 263:
/***/ ((module) => {

// Exports
module.exports = {
	"Articles": "Articles_Articles__1wA5T",
	"Articles__left": "Articles_Articles__left__2MxIY",
	"Articles__right": "Articles_Articles__right__1r7J-"
};


/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [502,192,219], () => (__webpack_exec__(8178)));
module.exports = __webpack_exports__;

})();