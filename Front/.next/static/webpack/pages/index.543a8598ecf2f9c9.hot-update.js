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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Menu */ \"./components/Menu.js\");\n//FORMULARIO DA PAGINA CLIENTE\n\nvar _s = $RefreshSig$();\n\n\n\nconst espacoStyle = {\n    marginRight: 25\n};\n//funcao para cadastrar o cliente\nfunction cliente() {\n    _s();\n    //cliente e desc_cliente receberem um valor vazio\n    const [dataForm, setDataForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        cliente: \"\",\n        desc_cliente: \"\"\n    });\n    //pega o valor do input pelo name\n    const onChangeInput = (e)=>setDataForm({\n            ...dataForm,\n            [e.target.name]: e.target.value\n        });\n    //quando clicar no botao faça a função abaixo\n    const sendCliente = async (e)=>{\n        //nao atualizar a pagina\n        e.preventDefault();\n        //console.log(dataForm.cliente);\n        console.log(dataForm.desc_cliente);\n        //validar os campos se estao vazios, menor ou igual a 0\n        if (dataForm.cliente === \"\") {\n            alert(\"ERRO! preencha o codigo do cliente\");\n        } else if (dataForm.cliente <= \"0\") {\n            alert(\"Apenas numeros maiores que 0!\");\n        } else if (dataForm.desc_cliente === \"\") {\n            alert(\"ERRO! preencha a descri\\xe7\\xe3o do cliente\");\n        } else {\n            //rota para o http do link cliente\n            const res = await fetch(\"http://localhost:8000/add-cliente\", {\n                method: \"POST\",\n                body: JSON.stringify(dataForm),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            //esperar a resposta da rota\n            const responseEnv = await res.json();\n            //validar se a resposta da rota deu erro ou fou completada\n            if (responseEnv.erro) {\n                alert(\"ERRO *\");\n                console.log(responseEnv.mensagem);\n            } else {\n                alert(\"Cliente cadastrado com sucesso!!\");\n                console.log(responseEnv.mensagem);\n            }\n            //resetar os campos\n            setDataForm({\n                cliente: \"\",\n                desc_cliente: \"\"\n            });\n        }\n    };\n    //Parte da pagina web\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charSet: \"utf-8\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                        lineNumber: 76,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"robots\",\n                        content: \"index, follow\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                        lineNumber: 77,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Site sobre...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                        lineNumber: 78,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"author\",\n                        content: \"Invata_RIO\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                        lineNumber: 79,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                        lineNumber: 80,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Cliente\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                        lineNumber: 81,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                lineNumber: 75,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                lineNumber: 83,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"Cad-Cliente\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                            lineNumber: 87,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: sendCliente,\n                            children: [\n                                \"Cliente:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    style: espacoStyle,\n                                    type: \"number\",\n                                    id: \"cliente\",\n                                    name: \"cliente\",\n                                    onChange: onChangeInput,\n                                    value: dataForm.cliente\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                                    lineNumber: 91,\n                                    columnNumber: 25\n                                }, this),\n                                \"Descri\\xe7\\xe3o:\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    style: espacoStyle,\n                                    type: \"text\",\n                                    id: \"desc_cliente\",\n                                    name: \"desc_cliente\",\n                                    onChange: onChangeInput,\n                                    value: dataForm.desc_cliente\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"blocobtn\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                                            lineNumber: 96,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"btn\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"submit\",\n                                                children: \"Enviar\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                                                lineNumber: 98,\n                                                columnNumber: 29\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                                            lineNumber: 97,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"btn\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"button\",\n                                                children: \"alterar\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                                                lineNumber: 101,\n                                                columnNumber: 29\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                                            lineNumber: 100,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"btn\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"reset\",\n                                                children: \"consultar\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                                                lineNumber: 104,\n                                                columnNumber: 29\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                                            lineNumber: 103,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"btn\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"reset\",\n                                                children: \"excluir\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                                                lineNumber: 107,\n                                                columnNumber: 29\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                                            lineNumber: 106,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                            lineNumber: 88,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                    lineNumber: 86,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, this),\n            \"P\\xc1GINA Clientes\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n        lineNumber: 74,\n        columnNumber: 9\n    }, this);\n}\n_s(cliente, \"cvReGeSGzQirwgosKyevXJDcz4I=\");\n/*export async function getServerSideProps() {\r\n    const response = await fetch(`http://localhost:8000/`);\r\n    const data = await response.json();\r\n    //console.log(data);\r\n\r\n    return { props: { data } };\r\n}*/ /* harmony default export */ __webpack_exports__[\"default\"] = (cliente); //npm run dev\n // npm install --save-dev nodemon\n //08/11/2023\n //npm install json-server\n //https://www.youtube.com/watch?v=KCcSzv1RmuI\n //crud react celke\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBUzs7Ozs7Ozs7Ozs7c0RBRXRCLDhEQUFDWjs0Q0FBSU0sV0FBVTtzREFDZiw0RUFBQ1M7Z0RBQU9ILE1BQUs7MERBQVM7Ozs7Ozs7Ozs7O3NEQUV0Qiw4REFBQ1o7NENBQUlNLFdBQVU7c0RBQ2YsNEVBQUNTO2dEQUFPSCxNQUFLOzBEQUFROzs7Ozs7Ozs7OztzREFFckIsOERBQUNaOzRDQUFJTSxXQUFVO3NEQUNmLDRFQUFDUztnREFBT0gsTUFBSzswREFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVMzQjs7Ozs7OztBQUt0QjtHQTVHU3JDO0FBK0dUOzs7Ozs7Q0FNQyxHQUVELCtEQUFlQSxPQUFPQSxFQUFDLENBR3ZCLGFBQWE7Q0FFYixpQ0FBaUM7Q0FHakMsWUFBWTtDQUNaLHlCQUF5QjtDQUN6Qiw2Q0FBNkM7Q0FFN0Msa0JBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiLy9GT1JNVUxBUklPIERBIFBBR0lOQSBDTElFTlRFXHJcblxyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb21wb25lbnRzL01lbnUnXHJcblxyXG5jb25zdCBlc3BhY29TdHlsZSA9IHtcclxuICAgIG1hcmdpblJpZ2h0OiAyNVxyXG59XHJcblxyXG4vL2Z1bmNhbyBwYXJhIGNhZGFzdHJhciBvIGNsaWVudGVcclxuZnVuY3Rpb24gY2xpZW50ZSgpIHtcclxuXHJcbiAgICAvL2NsaWVudGUgZSBkZXNjX2NsaWVudGUgcmVjZWJlcmVtIHVtIHZhbG9yIHZhemlvXHJcbiAgICBjb25zdCBbZGF0YUZvcm0sIHNldERhdGFGb3JtXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBjbGllbnRlOiAnJyxcclxuICAgICAgICBkZXNjX2NsaWVudGU6ICcnLFxyXG4gICAgfSlcclxuXHJcbiAgICAvL3BlZ2EgbyB2YWxvciBkbyBpbnB1dCBwZWxvIG5hbWVcclxuICAgIGNvbnN0IG9uQ2hhbmdlSW5wdXQgPSBlID0+IHNldERhdGFGb3JtKHsgLi4uZGF0YUZvcm0sIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcblxyXG4gICAgLy9xdWFuZG8gY2xpY2FyIG5vIGJvdGFvIGZhw6dhIGEgZnVuw6fDo28gYWJhaXhvXHJcbiAgICBjb25zdCBzZW5kQ2xpZW50ZSA9IGFzeW5jIGUgPT4ge1xyXG5cclxuICAgICAgICAvL25hbyBhdHVhbGl6YXIgYSBwYWdpbmFcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhkYXRhRm9ybS5jbGllbnRlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhRm9ybS5kZXNjX2NsaWVudGUpO1xyXG5cclxuICAgICAgICAvL3ZhbGlkYXIgb3MgY2FtcG9zIHNlIGVzdGFvIHZhemlvcywgbWVub3Igb3UgaWd1YWwgYSAwXHJcbiAgICAgICAgaWYoZGF0YUZvcm0uY2xpZW50ZSA9PT0gJycpe1xyXG4gICAgICAgICAgICBhbGVydChcIkVSUk8hIHByZWVuY2hhIG8gY29kaWdvIGRvIGNsaWVudGVcIilcclxuICAgICAgICB9ZWxzZSBpZihkYXRhRm9ybS5jbGllbnRlIDw9ICcwJyl7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiQXBlbmFzIG51bWVyb3MgbWFpb3JlcyBxdWUgMCFcIilcclxuICAgICAgICB9ZWxzZSBpZihkYXRhRm9ybS5kZXNjX2NsaWVudGUgPT09ICcnKXtcclxuICAgICAgICAgICAgYWxlcnQoXCJFUlJPISBwcmVlbmNoYSBhIGRlc2NyacOnw6NvIGRvIGNsaWVudGVcIilcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vcm90YSBwYXJhIG8gaHR0cCBkbyBsaW5rIGNsaWVudGVcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FkZC1jbGllbnRlJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YUZvcm0pLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL2VzcGVyYXIgYSByZXNwb3N0YSBkYSByb3RhXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2VFbnYgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgICAvL3ZhbGlkYXIgc2UgYSByZXNwb3N0YSBkYSByb3RhIGRldSBlcnJvIG91IGZvdSBjb21wbGV0YWRhXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlRW52LmVycm8pIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJFUlJPICpcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRW52Lm1lbnNhZ2VtKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiQ2xpZW50ZSBjYWRhc3RyYWRvIGNvbSBzdWNlc3NvISFcIik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRW52Lm1lbnNhZ2VtKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9yZXNldGFyIG9zIGNhbXBvc1xyXG4gICAgICAgIHNldERhdGFGb3JtKHtcclxuICAgICAgICAgICAgY2xpZW50ZTogJycsXHJcbiAgICAgICAgICAgIGRlc2NfY2xpZW50ZTogJydcclxuICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICAvL1BhcnRlIGRhIHBhZ2luYSB3ZWJcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwiaW5kZXgsIGZvbGxvd1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiU2l0ZSBzb2JyZS4uLlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIkludmF0YV9SSU9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkNsaWVudGU8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nQ2FkLUNsaWVudGUnPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3NlbmRDbGllbnRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsaWVudGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e2VzcGFjb1N0eWxlfSB0eXBlPVwibnVtYmVyXCIgaWQ9XCJjbGllbnRlXCIgbmFtZT1cImNsaWVudGVcIiBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0gdmFsdWU9e2RhdGFGb3JtLmNsaWVudGV9PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVzY3Jpw6fDo286XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e2VzcGFjb1N0eWxlfSB0eXBlPVwidGV4dFwiIGlkPVwiZGVzY19jbGllbnRlXCIgbmFtZT1cImRlc2NfY2xpZW50ZVwiIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fSB2YWx1ZT17ZGF0YUZvcm0uZGVzY19jbGllbnRlfT48L2lucHV0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2NvYnRuJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0bic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+RW52aWFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidG4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nPmFsdGVyYXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidG4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdyZXNldCc+Y29uc3VsdGFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidG4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdyZXNldCc+ZXhjbHVpcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgUMOBR0lOQSBDbGllbnRlc1xyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbi8qZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9gKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgIHJldHVybiB7IHByb3BzOiB7IGRhdGEgfSB9O1xyXG59Ki9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudGU7XHJcblxyXG5cclxuLy9ucG0gcnVuIGRldlxyXG5cclxuLy8gbnBtIGluc3RhbGwgLS1zYXZlLWRldiBub2RlbW9uXHJcblxyXG5cclxuLy8wOC8xMS8yMDIzXHJcbi8vbnBtIGluc3RhbGwganNvbi1zZXJ2ZXJcclxuLy9odHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUtDY1N6djFSbXVJXHJcblxyXG4vL2NydWQgcmVhY3QgY2Vsa2UiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIZWFkIiwiTWVudSIsImVzcGFjb1N0eWxlIiwibWFyZ2luUmlnaHQiLCJjbGllbnRlIiwiZGF0YUZvcm0iLCJzZXREYXRhRm9ybSIsImRlc2NfY2xpZW50ZSIsIm9uQ2hhbmdlSW5wdXQiLCJlIiwidGFyZ2V0IiwibmFtZSIsInZhbHVlIiwic2VuZENsaWVudGUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJhbGVydCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2VFbnYiLCJqc29uIiwiZXJybyIsIm1lbnNhZ2VtIiwiZGl2IiwibWV0YSIsImNoYXJTZXQiLCJjb250ZW50IiwidGl0bGUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiYnIiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInN0eWxlIiwidHlwZSIsImlkIiwib25DaGFuZ2UiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});