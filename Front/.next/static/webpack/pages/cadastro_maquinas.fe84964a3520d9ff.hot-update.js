"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/cadastro_maquinas",{

/***/ "./pages/cadastro_maquinas.js":
/*!************************************!*\
  !*** ./pages/cadastro_maquinas.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Menu */ \"./components/Menu.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst espacoStyle = {\n    marginRight: 25\n};\nfunction cadastro_maquinas() {\n    _s();\n    const [dataForm, setDataForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        cod_maquina: \"\",\n        nome_maquina: \"\"\n    });\n    const onChangeInput = (e)=>setDataForm({\n            ...dataForm,\n            [e.target.name]: e.target.value\n        });\n    const sendCadMaquina = async (e)=>{\n        e.preventDefault();\n        console.log(dataForm.cod_maquina);\n        console.log(dataForm.nome_maquina);\n        try {\n            const res = await fetch(\"http://localhost:8000/add-cad-maquinas\", {\n                method: \"POST\",\n                body: JSON.stringify(dataForm),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            const responseEnv = await res.json();\n            if (responseEnv.erro) {\n                alert(x);\n                console.log(responseEnv.mensagem);\n            } else {\n                console.log(responseEnv.mensagem);\n            }\n            setDataForm({\n                cod_maquina: \"\",\n                nome_maquina: \"\"\n            });\n        } catch (err) {\n            console.log(\"ERRO: Tente novamente\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charSet: \"utf-8\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\cadastro_maquinas.js\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"robots\",\n                        content: \"index, follow\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\cadastro_maquinas.js\",\n                        lineNumber: 53,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Site sobre...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\cadastro_maquinas.js\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"author\",\n                        content: \"Invata_RIO\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\cadastro_maquinas.js\",\n                        lineNumber: 55,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\cadastro_maquinas.js\",\n                        lineNumber: 56,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Cadastro Maquinas\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\cadastro_maquinas.js\",\n                        lineNumber: 57,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\cadastro_maquinas.js\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\cadastro_maquinas.js\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"Cad_Maquinas\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: sendCadMaquina,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\cadastro_maquinas.js\",\n                                lineNumber: 64,\n                                columnNumber: 21\n                            }, this),\n                            \"Codigo Maquina:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                style: espacoStyle,\n                                type: \"number\",\n                                id: \"cod_maquina\",\n                                name: \"cod_maquina\",\n                                onChange: onChangeInput,\n                                value: dataForm.cod_maquina\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\cadastro_maquinas.js\",\n                                lineNumber: 67,\n                                columnNumber: 21\n                            }, this),\n                            \"Nome da Maquina:\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                style: espacoStyle,\n                                type: \"number\",\n                                id: \"nome_maquina\",\n                                name: \"nome_maquina\",\n                                onChange: onChangeInput,\n                                value: dataForm.nome_maquina\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\cadastro_maquinas.js\",\n                                lineNumber: 70,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                name: \"botaoEnviar\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\cadastro_maquinas.js\",\n                                        lineNumber: 73,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        children: \"Enviar\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\cadastro_maquinas.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\cadastro_maquinas.js\",\n                                lineNumber: 72,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\cadastro_maquinas.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\cadastro_maquinas.js\",\n                    lineNumber: 62,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\cadastro_maquinas.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, this),\n            \"P\\xc1GINA Cadastro Maquinas\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Usu\\xe1rio\\\\Desktop\\\\zz\\\\Front\\\\pages\\\\cadastro_maquinas.js\",\n        lineNumber: 50,\n        columnNumber: 12\n    }, this);\n}\n_s(cadastro_maquinas, \"W1gloRXWpu+q1hVvUJ5uU5lBAcc=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (cadastro_maquinas);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYWRhc3Ryb19tYXF1aW5hcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdDO0FBQ0o7QUFDUztBQUVyQyxNQUFNRyxjQUFjO0lBQ2hCQyxhQUFhO0FBQ2pCO0FBRUEsU0FBU0M7O0lBRUwsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO1FBQ3JDUSxhQUFhO1FBQ2JDLGNBQWM7SUFDbEI7SUFFQSxNQUFNQyxnQkFBZ0JDLENBQUFBLElBQUtKLFlBQVk7WUFBRSxHQUFHRCxRQUFRO1lBQUUsQ0FBQ0ssRUFBRUMsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRUYsRUFBRUMsTUFBTSxDQUFDRSxLQUFLO1FBQUM7SUFFdEYsTUFBTUMsaUJBQWlCLE9BQU1KO1FBQ3pCQSxFQUFFSyxjQUFjO1FBQ2hCQyxRQUFRQyxHQUFHLENBQUNaLFNBQVNFLFdBQVc7UUFDaENTLFFBQVFDLEdBQUcsQ0FBQ1osU0FBU0csWUFBWTtRQUVqQyxJQUFJO1lBQ0EsTUFBTVUsTUFBTSxNQUFNQyxNQUFNLDBDQUEwQztnQkFDOURDLFFBQVE7Z0JBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ2xCO2dCQUNyQm1CLFNBQVM7b0JBQUUsZ0JBQWdCO2dCQUFtQjtZQUNsRDtZQUVBLE1BQU1DLGNBQWMsTUFBTVAsSUFBSVEsSUFBSTtZQUVsQyxJQUFJRCxZQUFZRSxJQUFJLEVBQUU7Z0JBQ2xCQyxNQUFNQztnQkFDTmIsUUFBUUMsR0FBRyxDQUFDUSxZQUFZSyxRQUFRO1lBQ3BDLE9BQU87Z0JBQ0hkLFFBQVFDLEdBQUcsQ0FBQ1EsWUFBWUssUUFBUTtZQUNwQztZQUVBeEIsWUFBWTtnQkFDUkMsYUFBYTtnQkFDYkMsY0FBYztZQUNsQjtRQUdKLEVBQUUsT0FBT3VCLEtBQUs7WUFDVmYsUUFBUUMsR0FBRyxDQUFDO1FBQ2hCO0lBQ0o7SUFFQSxxQkFBTyw4REFBQ2U7OzBCQUNKLDhEQUFDaEMsa0RBQUlBOztrQ0FDRCw4REFBQ2lDO3dCQUFLQyxTQUFROzs7Ozs7a0NBQ2QsOERBQUNEO3dCQUFLckIsTUFBSzt3QkFBU3VCLFNBQVE7Ozs7OztrQ0FDNUIsOERBQUNGO3dCQUFLckIsTUFBSzt3QkFBY3VCLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLckIsTUFBSzt3QkFBU3VCLFNBQVE7Ozs7OztrQ0FDNUIsOERBQUNGO3dCQUFLckIsTUFBSzt3QkFBV3VCLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO2tDQUFNOzs7Ozs7Ozs7Ozs7MEJBRVgsOERBQUNuQyx3REFBSUE7Ozs7OzBCQUNMLDhEQUFDb0M7Z0JBQVFDLFdBQVU7MEJBRWYsNEVBQUNOOzhCQUNHLDRFQUFDTzt3QkFBS0MsVUFBVTFCOzswQ0FDWiw4REFBQzJCOzs7Ozs0QkFBSzswQ0FHTiw4REFBQ0M7Z0NBQU1DLE9BQU96QztnQ0FBYTBDLE1BQUs7Z0NBQVNDLElBQUc7Z0NBQWNqQyxNQUFLO2dDQUFja0MsVUFBVXJDO2dDQUFlSSxPQUFPUixTQUFTRSxXQUFXOzs7Ozs7NEJBQVU7MENBRzNJLDhEQUFDbUM7Z0NBQU1DLE9BQU96QztnQ0FBYTBDLE1BQUs7Z0NBQVNDLElBQUc7Z0NBQWVqQyxNQUFLO2dDQUFla0MsVUFBVXJDO2dDQUFlSSxPQUFPUixTQUFTRyxZQUFZOzs7Ozs7MENBRXBJLDhEQUFDd0I7Z0NBQUlwQixNQUFLOztrREFDTiw4REFBQzZCOzs7OztrREFDRCw4REFBQ007a0RBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJZDs7Ozs7OztBQUdsQjtHQXhFUzNDO0FBMEVULCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FkYXN0cm9fbWFxdWluYXMuanM/MDMyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvTWVudSdcclxuXHJcbmNvbnN0IGVzcGFjb1N0eWxlID0ge1xyXG4gICAgbWFyZ2luUmlnaHQ6IDI1XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhZGFzdHJvX21hcXVpbmFzKCkge1xyXG5cclxuICAgIGNvbnN0IFtkYXRhRm9ybSwgc2V0RGF0YUZvcm1dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGNvZF9tYXF1aW5hOiAnJyxcclxuICAgICAgICBub21lX21hcXVpbmE6ICcnLFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUlucHV0ID0gZSA9PiBzZXREYXRhRm9ybSh7IC4uLmRhdGFGb3JtLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICAgIGNvbnN0IHNlbmRDYWRNYXF1aW5hID0gYXN5bmMgZSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFGb3JtLmNvZF9tYXF1aW5hKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhRm9ybS5ub21lX21hcXVpbmEpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FkZC1jYWQtbWFxdWluYXMnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGFGb3JtKSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VFbnYgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlRW52LmVycm8pIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KHgpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZUVudi5tZW5zYWdlbSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRW52Lm1lbnNhZ2VtKVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzZXREYXRhRm9ybSh7XHJcbiAgICAgICAgICAgICAgICBjb2RfbWFxdWluYTogJycsXHJcbiAgICAgICAgICAgICAgICBub21lX21hcXVpbmE6ICcnXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRVJSTzogVGVudGUgbm92YW1lbnRlXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8ZGl2PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJpbmRleCwgZm9sbG93XCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlNpdGUgc29icmUuLi5cIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIkludmF0YV9SSU9cIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgICAgIDx0aXRsZT5DYWRhc3RybyBNYXF1aW5hczwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdDYWRfTWFxdWluYXMnPlxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzZW5kQ2FkTWFxdWluYX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIENvZGlnbyBNYXF1aW5hOlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17ZXNwYWNvU3R5bGV9IHR5cGU9XCJudW1iZXJcIiBpZD1cImNvZF9tYXF1aW5hXCIgbmFtZT1cImNvZF9tYXF1aW5hXCIgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9IHZhbHVlPXtkYXRhRm9ybS5jb2RfbWFxdWluYX0+PC9pbnB1dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgTm9tZSBkYSBNYXF1aW5hOlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17ZXNwYWNvU3R5bGV9IHR5cGU9XCJudW1iZXJcIiBpZD1cIm5vbWVfbWFxdWluYVwiIG5hbWU9XCJub21lX21hcXVpbmFcIiBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0gdmFsdWU9e2RhdGFGb3JtLm5vbWVfbWFxdWluYX0+PC9pbnB1dD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBuYW1lPVwiYm90YW9FbnZpYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+RW52aWFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICBQw4FHSU5BIENhZGFzdHJvIE1hcXVpbmFzXHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2FkYXN0cm9fbWFxdWluYXM7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSGVhZCIsIk1lbnUiLCJlc3BhY29TdHlsZSIsIm1hcmdpblJpZ2h0IiwiY2FkYXN0cm9fbWFxdWluYXMiLCJkYXRhRm9ybSIsInNldERhdGFGb3JtIiwiY29kX21hcXVpbmEiLCJub21lX21hcXVpbmEiLCJvbkNoYW5nZUlucHV0IiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNlbmRDYWRNYXF1aW5hIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXNwb25zZUVudiIsImpzb24iLCJlcnJvIiwiYWxlcnQiLCJ4IiwibWVuc2FnZW0iLCJlcnIiLCJkaXYiLCJtZXRhIiwiY2hhclNldCIsImNvbnRlbnQiLCJ0aXRsZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJiciIsImlucHV0Iiwic3R5bGUiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/cadastro_maquinas.js\n"));

/***/ })

});