"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Menu */ \"./components/Menu.js\");\n//npm run dev\n// npm install --save-dev nodemon\n\nvar _s = $RefreshSig$();\n\n\n\nconst espacoStyle = {\n    marginRight: 25\n};\nfunction cliente() {\n    _s();\n    const [dataForm, setDataForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        cliente: \"\",\n        desc_cliente: \"\"\n    });\n    const onChangeInput = (e)=>setDataForm({\n            ...dataForm,\n            [e.target.name]: e.target.value\n        });\n    const sendCliente = async (e)=>{\n        e.preventDefault();\n        console.log(dataForm.cliente);\n        console.log(dataForm.desc_cliente);\n        const res = await fetch(\"http://localhost:8000/add-cliente\", {\n            method: \"POST\",\n            body: JSON.stringify(dataForm),\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        });\n        const responseEnv = await res.json();\n        if (responseEnv.erro) {\n            alert(\"ERRO\");\n        } else {\n            alert(\"Cliente cadastrado com sucesso!!\");\n        }\n        setDataForm({\n            cliente: \"\",\n            desc_cliente: \"\"\n        });\n    /*try {\r\n            const res = await fetch('http://localhost:8000/add-cad-maquinas', {\r\n                method: 'POST',\r\n                body: JSON.stringify(dataForm),\r\n                headers: { 'Content-Type': 'application/json' }\r\n            });\r\n\r\n            const responseEnv = await res.json();\r\n\r\n            if (responseEnv.erro) {\r\n                console.log(responseEnv.mensagem)\r\n            } else {\r\n                console.log(responseEnv.mensagem)\r\n            }\r\n\r\n            setDataForm({\r\n                cod_maquina: '',\r\n                nome_maquina: ''\r\n            });\r\n\r\n\r\n        } catch (err) {\r\n            console.log(\"ERRO: Tente novamente\")\r\n        }*/ };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charSet: \"utf-8\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\index.js\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"robots\",\n                        content: \"index, follow\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\index.js\",\n                        lineNumber: 75,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Site sobre...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\index.js\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"author\",\n                        content: \"Invata_RIO\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\index.js\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\index.js\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Cliente\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\index.js\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\index.js\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\index.js\",\n                lineNumber: 81,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"Cad-Cliente\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\index.js\",\n                            lineNumber: 85,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: sendCliente,\n                            children: [\n                                \"Cliente:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    style: espacoStyle,\n                                    type: \"number\",\n                                    id: \"cliente\",\n                                    name: \"cliente\",\n                                    onChange: onChangeInput,\n                                    value: dataForm.cliente\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\index.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\index.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 25\n                                }, this),\n                                \"Descri\\xe7\\xe3o:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    style: espacoStyle,\n                                    type: \"text\",\n                                    id: \"desc_cliente\",\n                                    name: \"desc_cliente\",\n                                    onChange: onChangeInput,\n                                    value: dataForm.desc_cliente\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\index.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\index.js\",\n                                            lineNumber: 94,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            children: \"Enviar\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\index.js\",\n                                            lineNumber: 95,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\index.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\index.js\",\n                            lineNumber: 86,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\index.js\",\n                    lineNumber: 83,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\index.js\",\n                lineNumber: 82,\n                columnNumber: 13\n            }, this),\n            \"P\\xc1GINA Clientes\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\index.js\",\n        lineNumber: 72,\n        columnNumber: 9\n    }, this);\n}\n_s(cliente, \"cvReGeSGzQirwgosKyevXJDcz4I=\");\n/*export async function getServerSideProps() {\r\n    const response = await fetch(`http://localhost:8000/`);\r\n    const data = await response.json();\r\n    //console.log(data);\r\n\r\n    return { props: { data } };\r\n}*/ /* harmony default export */ __webpack_exports__[\"default\"] = (cliente);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLGFBQWE7QUFFYixpQ0FBaUM7OztBQUNEO0FBQ0o7QUFDUztBQUdyQyxNQUFNRyxjQUFjO0lBQ2hCQyxhQUFhO0FBQ2pCO0FBRUEsU0FBU0M7O0lBRUwsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO1FBQ3JDSyxTQUFTO1FBQ1RHLGNBQWM7SUFDbEI7SUFFQSxNQUFNQyxnQkFBZ0JDLENBQUFBLElBQUtILFlBQVk7WUFBRSxHQUFHRCxRQUFRO1lBQUUsQ0FBQ0ksRUFBRUMsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRUYsRUFBRUMsTUFBTSxDQUFDRSxLQUFLO1FBQUM7SUFFdEYsTUFBTUMsY0FBYyxPQUFNSjtRQUN0QkEsRUFBRUssY0FBYztRQUNoQkMsUUFBUUMsR0FBRyxDQUFDWCxTQUFTRCxPQUFPO1FBQzVCVyxRQUFRQyxHQUFHLENBQUNYLFNBQVNFLFlBQVk7UUFFakMsTUFBTVUsTUFBTSxNQUFNQyxNQUFNLHFDQUFxQztZQUN6REMsUUFBUTtZQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUNqQjtZQUNyQmtCLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1FBQ2xEO1FBQ0EsTUFBTUMsY0FBYyxNQUFNUCxJQUFJUSxJQUFJO1FBRWxDLElBQUlELFlBQVlFLElBQUksRUFBRTtZQUNsQkMsTUFBTTtRQUNWLE9BQU87WUFDSEEsTUFBTTtRQUNWO1FBRUFyQixZQUFZO1lBQ1JGLFNBQVM7WUFDVEcsY0FBYztRQUNsQjtJQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQXVCQyxHQUNMO0lBRUEscUJBQ0ksOERBQUNxQjs7MEJBQ0csOERBQUM1QixrREFBSUE7O2tDQUNELDhEQUFDNkI7d0JBQUtDLFNBQVE7Ozs7OztrQ0FDZCw4REFBQ0Q7d0JBQUtsQixNQUFLO3dCQUFTb0IsU0FBUTs7Ozs7O2tDQUM1Qiw4REFBQ0Y7d0JBQUtsQixNQUFLO3dCQUFjb0IsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtsQixNQUFLO3dCQUFTb0IsU0FBUTs7Ozs7O2tDQUM1Qiw4REFBQ0Y7d0JBQUtsQixNQUFLO3dCQUFXb0IsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ0M7a0NBQU07Ozs7Ozs7Ozs7OzswQkFFWCw4REFBQy9CLHdEQUFJQTs7Ozs7MEJBQ0wsOERBQUNnQztnQkFBUUMsV0FBVTswQkFDZiw0RUFBQ047O3NDQUVHLDhEQUFDTzs7Ozs7c0NBQ0QsOERBQUNDOzRCQUFLQyxVQUFVeEI7O2dDQUFhOzhDQUVyQiw4REFBQ3lCO29DQUFNQyxPQUFPckM7b0NBQWFzQyxNQUFLO29DQUFTQyxJQUFHO29DQUFVOUIsTUFBSztvQ0FBVStCLFVBQVVsQztvQ0FBZUksT0FBT1AsU0FBU0QsT0FBTzs7Ozs7OzhDQUN6SCw4REFBQytCOzs7OztnQ0FBSzs4Q0FFRiw4REFBQ0c7b0NBQU1DLE9BQU9yQztvQ0FBYXNDLE1BQUs7b0NBQU9DLElBQUc7b0NBQWU5QixNQUFLO29DQUFlK0IsVUFBVWxDO29DQUFlSSxPQUFPUCxTQUFTRSxZQUFZOzs7Ozs7OENBRXRJLDhEQUFDcUI7O3NEQUNHLDhEQUFDTzs7Ozs7c0RBQ0QsOERBQUNROzRDQUFPSCxNQUFLO3NEQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU81Qjs7Ozs7OztBQUl0QjtHQTdGU3BDO0FBZ0dUOzs7Ozs7Q0FNQyxHQUVELCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiLy9ucG0gcnVuIGRldlxyXG5cclxuLy8gbnBtIGluc3RhbGwgLS1zYXZlLWRldiBub2RlbW9uXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9NZW51J1xyXG5cclxuXHJcbmNvbnN0IGVzcGFjb1N0eWxlID0ge1xyXG4gICAgbWFyZ2luUmlnaHQ6IDI1XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsaWVudGUoKSB7XHJcblxyXG4gICAgY29uc3QgW2RhdGFGb3JtLCBzZXREYXRhRm9ybV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgY2xpZW50ZTogJycsXHJcbiAgICAgICAgZGVzY19jbGllbnRlOiAnJyxcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VJbnB1dCA9IGUgPT4gc2V0RGF0YUZvcm0oeyAuLi5kYXRhRm9ybSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgICBjb25zdCBzZW5kQ2xpZW50ZSA9IGFzeW5jIGUgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhRm9ybS5jbGllbnRlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhRm9ybS5kZXNjX2NsaWVudGUpO1xyXG5cclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FkZC1jbGllbnRlJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YUZvcm0pLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlRW52ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlRW52LmVycm8pIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJFUlJPXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiQ2xpZW50ZSBjYWRhc3RyYWRvIGNvbSBzdWNlc3NvISFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXREYXRhRm9ybSh7XHJcbiAgICAgICAgICAgIGNsaWVudGU6ICcnLFxyXG4gICAgICAgICAgICBkZXNjX2NsaWVudGU6ICcnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8qdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hZGQtY2FkLW1hcXVpbmFzJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhRm9ybSksXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRW52ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZUVudi5lcnJvKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUVudi5tZW5zYWdlbSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRW52Lm1lbnNhZ2VtKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXREYXRhRm9ybSh7XHJcbiAgICAgICAgICAgICAgICBjb2RfbWFxdWluYTogJycsXHJcbiAgICAgICAgICAgICAgICBub21lX21hcXVpbmE6ICcnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJSTzogVGVudGUgbm92YW1lbnRlXCIpXHJcbiAgICAgICAgfSovXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJpbmRleCwgZm9sbG93XCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJTaXRlIHNvYnJlLi4uXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PVwiSW52YXRhX1JJT1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Q2xpZW50ZTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPE1lbnUgLz5cclxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdDYWQtQ2xpZW50ZSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17c2VuZENsaWVudGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xpZW50ZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17ZXNwYWNvU3R5bGV9IHR5cGU9XCJudW1iZXJcIiBpZD1cImNsaWVudGVcIiBuYW1lPVwiY2xpZW50ZVwiIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fSB2YWx1ZT17ZGF0YUZvcm0uY2xpZW50ZX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNjcmnDp8OjbzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17ZXNwYWNvU3R5bGV9IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkZXNjX2NsaWVudGVcIiBuYW1lPVwiZGVzY19jbGllbnRlXCIgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9IHZhbHVlPXtkYXRhRm9ybS5kZXNjX2NsaWVudGV9PjwvaW5wdXQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+RW52aWFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgIFDDgUdJTkEgQ2xpZW50ZXNcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbi8qZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9gKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgIHJldHVybiB7IHByb3BzOiB7IGRhdGEgfSB9O1xyXG59Ki9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudGU7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSGVhZCIsIk1lbnUiLCJlc3BhY29TdHlsZSIsIm1hcmdpblJpZ2h0IiwiY2xpZW50ZSIsImRhdGFGb3JtIiwic2V0RGF0YUZvcm0iLCJkZXNjX2NsaWVudGUiLCJvbkNoYW5nZUlucHV0IiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNlbmRDbGllbnRlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXNwb25zZUVudiIsImpzb24iLCJlcnJvIiwiYWxlcnQiLCJkaXYiLCJtZXRhIiwiY2hhclNldCIsImNvbnRlbnQiLCJ0aXRsZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJiciIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0Iiwic3R5bGUiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});