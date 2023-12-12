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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Menu/Menu */ \"./src/components/Menu/Menu.js\");\n/* harmony import */ var _src_components_Consult_apiCLiente__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Consult/apiCLiente */ \"./src/components/Consult/apiCLiente.js\");\n/* harmony import */ var _src_components_Excluir_clienteExcluir__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Excluir/clienteExcluir */ \"./src/components/Excluir/clienteExcluir.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n//FORMULARIO DA PAGINA CLIENTE\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst espacoStyle = {\n    marginRight: 25\n};\n//funcao para cadastrar o cliente\nfunction cliente() {\n    _s();\n    const [dadosBD, setdadosBD] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        cliente: \"\"\n    });\n    //cliente e desc_cliente receberem um valor vazio\n    const [dataForm, setDataForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        cliente: \"\",\n        desc_cliente: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:8000/api-tabCliente\").then((response)=>{\n            //Atribuir os registros no state data\n            console.log(response.data);\n            setdadosBD(response.data);\n        }).catch((err)=>{});\n    }, []);\n    //pega o valor do input pelo name\n    const onChangeInput = (e)=>setDataForm({\n            ...dataForm,\n            [e.target.name]: e.target.value\n        });\n    //quando clicar no botao faça a função abaixo\n    const sendCliente = async (e)=>{\n        //nao atualizar a pagina\n        e.preventDefault();\n        console.log(dataForm.cliente);\n        console.log(dataForm.desc_cliente);\n        //validar os campos se estao vazios, menor ou igual a 0\n        if (dataForm.cliente === \"\") {\n            alert(\"ERRO! preencha o codigo do cliente\");\n        } else if (dataForm.cliente <= \"0\") {\n            alert(\"Apenas numeros maiores que 0!\");\n        } else if (dataForm.desc_cliente === \"\") {\n            alert(\"ERRO! preencha a descri\\xe7\\xe3o do cliente\");\n        } else {\n            //rota para o http do link cliente\n            const res = await fetch(\"http://localhost:8000/add-cliente\", {\n                method: \"POST\",\n                body: JSON.stringify(dataForm),\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            //esperar a resposta da rota\n            const responseEnv = await res.json();\n            //validar se a resposta da rota deu erro ou fou completada\n            if (responseEnv.erro) {\n                alert(\"ERRO *\");\n                console.log(responseEnv.mensagem);\n            } else {\n                alert(\"Cliente cadastrado com sucesso!!\");\n                console.log(responseEnv.mensagem);\n            }\n            //resetar os campos\n            setDataForm({\n                cliente: \"\",\n                desc_cliente: \"\"\n            });\n        }\n    };\n    //variavel para o botao consultar\n    const [consultar, setConsultar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function handleClickConsultar() {\n        setConsultar(!consultar);\n    }\n    //Parte da pagina web\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        charSet: \"utf-8\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                        lineNumber: 103,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"robots\",\n                        content: \"index, follow\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                        lineNumber: 104,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Site sobre...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                        lineNumber: 105,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"author\",\n                        content: \"Invata_RIO\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                        lineNumber: 106,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                        lineNumber: 107,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Cliente\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                        lineNumber: 108,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                lineNumber: 102,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Menu_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                lineNumber: 110,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"Cad-Cliente\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                                lineNumber: 114,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: sendCliente,\n                                children: [\n                                    \"Cliente:\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        style: espacoStyle,\n                                        type: \"number\",\n                                        id: \"cliente\",\n                                        name: \"cliente\",\n                                        onChange: onChangeInput,\n                                        value: dataForm.cliente\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                                        lineNumber: 117,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                                        lineNumber: 118,\n                                        columnNumber: 25\n                                    }, this),\n                                    \"Descri\\xe7\\xe3o:\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        style: espacoStyle,\n                                        type: \"text\",\n                                        id: \"desc_cliente\",\n                                        name: \"desc_cliente\",\n                                        onChange: onChangeInput,\n                                        value: dataForm.desc_cliente\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                                        lineNumber: 120,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"blocobtn\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                                                lineNumber: 123,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"btn\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"submit\",\n                                                    children: \"Enviar\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                                                    lineNumber: 125,\n                                                    columnNumber: 29\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                                                lineNumber: 124,\n                                                columnNumber: 29\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"btn\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    type: \"button\",\n                                                    onClick: handleClickConsultar,\n                                                    children: \"consultar\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                                                    lineNumber: 128,\n                                                    columnNumber: 29\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                                                lineNumber: 127,\n                                                columnNumber: 29\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                                        lineNumber: 122,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                                lineNumber: 115,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                        lineNumber: 113,\n                        columnNumber: 17\n                    }, this),\n                    consultar === true && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Consult_apiCLiente__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                        lineNumber: 139,\n                        columnNumber: 21\n                    }, this),\n                    consultar === false && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                        lineNumber: 142,\n                        columnNumber: 42\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n                lineNumber: 111,\n                columnNumber: 13\n            }, this),\n            \"P\\xc1GINA Clientes\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Gabriela\\\\Desktop\\\\ProjetoRFID2023\\\\Projeto_RFID\\\\Front\\\\pages\\\\index.js\",\n        lineNumber: 101,\n        columnNumber: 9\n    }, this);\n}\n_s(cliente, \"VRhveCivomB8qiR6VSWIA+Js2ns=\");\n/*export async function getServerSideProps() {\r\n    const response = await fetch(`http://localhost:8000/`);\r\n    const data = await response.json();\r\n    //console.log(data);\r\n\r\n    return { props: { data } };\r\n}*/ /* harmony default export */ __webpack_exports__[\"default\"] = (cliente); //npm run dev\n // npm install --save-dev nodemon\n //08/11/2023\n //npm install json-server\n //https://www.youtube.com/watch?v=KCcSzv1RmuI\n //crud react celke\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDTzs7Ozs7MENBQ0QsOERBQUNDO2dDQUFLQyxVQUFVMUI7O29DQUFhO2tEQUVyQiw4REFBQzJCO3dDQUFNQyxPQUFPakQ7d0NBQWFrRCxNQUFLO3dDQUFTQyxJQUFHO3dDQUFVaEMsTUFBSzt3Q0FBVWlDLFVBQVVwQzt3Q0FBZUksT0FBT2YsU0FBU0gsT0FBTzs7Ozs7O2tEQUN6SCw4REFBQzJDOzs7OztvQ0FBSztrREFFRiw4REFBQ0c7d0NBQU1DLE9BQU9qRDt3Q0FBYWtELE1BQUs7d0NBQU9DLElBQUc7d0NBQWVoQyxNQUFLO3dDQUFlaUMsVUFBVXBDO3dDQUFlSSxPQUFPZixTQUFTRSxZQUFZOzs7Ozs7a0RBRXRJLDhEQUFDK0I7d0NBQUlNLFdBQVU7OzBEQUNYLDhEQUFDQzs7Ozs7MERBQ0QsOERBQUNQO2dEQUFJTSxXQUFVOzBEQUNmLDRFQUFDUztvREFBT0gsTUFBSzs4REFBUzs7Ozs7Ozs7Ozs7MERBRXRCLDhEQUFDWjtnREFBSU0sV0FBVTswREFDZiw0RUFBQ1M7b0RBQU9ILE1BQUs7b0RBQVNJLFNBQVNqQjs4REFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQVVoRUYsY0FBYyxzQkFDWCw4REFBQ3RDLDBFQUFPQTs7Ozs7b0JBR1hzQyxjQUFjLHVCQUFVLDhEQUFDRzs7Ozs7Ozs7Ozs7WUFFcEI7Ozs7Ozs7QUFLdEI7R0FySVNwQztBQXdJVDs7Ozs7O0NBTUMsR0FFRCwrREFBZUEsT0FBT0EsRUFBQyxDQUd2QixhQUFhO0NBRWIsaUNBQWlDO0NBR2pDLFlBQVk7Q0FDWix5QkFBeUI7Q0FDekIsNkNBQTZDO0NBRTdDLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vRk9STVVMQVJJTyBEQSBQQUdJTkEgQ0xJRU5URVxyXG5cclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9NZW51L01lbnUnXHJcbmltcG9ydCBDb25zdWx0IGZyb20gJy4uL3NyYy9jb21wb25lbnRzL0NvbnN1bHQvYXBpQ0xpZW50ZSdcclxuaW1wb3J0IEV4Y2x1aXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvRXhjbHVpci9jbGllbnRlRXhjbHVpcidcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuY29uc3QgZXNwYWNvU3R5bGUgPSB7XHJcbiAgICBtYXJnaW5SaWdodDogMjVcclxufVxyXG5cclxuLy9mdW5jYW8gcGFyYSBjYWRhc3RyYXIgbyBjbGllbnRlXHJcbmZ1bmN0aW9uIGNsaWVudGUoKSB7XHJcblxyXG4gICAgY29uc3QgW2RhZG9zQkQsIHNldGRhZG9zQkRdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGNsaWVudGU6ICcnLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy9jbGllbnRlIGUgZGVzY19jbGllbnRlIHJlY2ViZXJlbSB1bSB2YWxvciB2YXppb1xyXG4gICAgY29uc3QgW2RhdGFGb3JtLCBzZXREYXRhRm9ybV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgY2xpZW50ZTogJycsXHJcbiAgICAgICAgZGVzY19jbGllbnRlOiAnJyxcclxuICAgIH0pXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS10YWJDbGllbnRlXCIpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vQXRyaWJ1aXIgb3MgcmVnaXN0cm9zIG5vIHN0YXRlIGRhdGFcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgc2V0ZGFkb3NCRChyZXNwb25zZS5kYXRhKTtcclxuXHJcblxyXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgLy9wZWdhIG8gdmFsb3IgZG8gaW5wdXQgcGVsbyBuYW1lXHJcbiAgICBjb25zdCBvbkNoYW5nZUlucHV0ID0gZSA9PiBzZXREYXRhRm9ybSh7IC4uLmRhdGFGb3JtLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICAgIC8vcXVhbmRvIGNsaWNhciBubyBib3RhbyBmYcOnYSBhIGZ1bsOnw6NvIGFiYWl4b1xyXG4gICAgY29uc3Qgc2VuZENsaWVudGUgPSBhc3luYyBlID0+IHtcclxuXHJcbiAgICAgICAgLy9uYW8gYXR1YWxpemFyIGEgcGFnaW5hXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFGb3JtLmNsaWVudGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFGb3JtLmRlc2NfY2xpZW50ZSk7XHJcblxyXG4gICAgICAgIC8vdmFsaWRhciBvcyBjYW1wb3Mgc2UgZXN0YW8gdmF6aW9zLCBtZW5vciBvdSBpZ3VhbCBhIDBcclxuICAgICAgICBpZihkYXRhRm9ybS5jbGllbnRlID09PSAnJyl7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiRVJSTyEgcHJlZW5jaGEgbyBjb2RpZ28gZG8gY2xpZW50ZVwiKVxyXG4gICAgICAgIH1lbHNlIGlmKGRhdGFGb3JtLmNsaWVudGUgPD0gJzAnKXtcclxuICAgICAgICAgICAgYWxlcnQoXCJBcGVuYXMgbnVtZXJvcyBtYWlvcmVzIHF1ZSAwIVwiKVxyXG4gICAgICAgIH1lbHNlIGlmKGRhdGFGb3JtLmRlc2NfY2xpZW50ZSA9PT0gJycpe1xyXG4gICAgICAgICAgICBhbGVydChcIkVSUk8hIHByZWVuY2hhIGEgZGVzY3Jpw6fDo28gZG8gY2xpZW50ZVwiKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy9yb3RhIHBhcmEgbyBodHRwIGRvIGxpbmsgY2xpZW50ZVxyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwMDAvYWRkLWNsaWVudGUnLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhRm9ybSksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vZXNwZXJhciBhIHJlc3Bvc3RhIGRhIHJvdGFcclxuICAgICAgICBjb25zdCByZXNwb25zZUVudiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgIC8vdmFsaWRhciBzZSBhIHJlc3Bvc3RhIGRhIHJvdGEgZGV1IGVycm8gb3UgZm91IGNvbXBsZXRhZGFcclxuICAgICAgICBpZiAocmVzcG9uc2VFbnYuZXJybykge1xyXG4gICAgICAgICAgICBhbGVydChcIkVSUk8gKlwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VFbnYubWVuc2FnZW0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJDbGllbnRlIGNhZGFzdHJhZG8gY29tIHN1Y2Vzc28hIVwiKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VFbnYubWVuc2FnZW0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3Jlc2V0YXIgb3MgY2FtcG9zXHJcbiAgICAgICAgc2V0RGF0YUZvcm0oe1xyXG4gICAgICAgICAgICBjbGllbnRlOiAnJyxcclxuICAgICAgICAgICAgZGVzY19jbGllbnRlOiAnJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgICAvL3ZhcmlhdmVsIHBhcmEgbyBib3RhbyBjb25zdWx0YXJcclxuICAgICBjb25zdCBbY29uc3VsdGFyLCBzZXRDb25zdWx0YXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgICBmdW5jdGlvbiBoYW5kbGVDbGlja0NvbnN1bHRhcigpIHtcclxuICAgICAgICAgc2V0Q29uc3VsdGFyKCFjb25zdWx0YXIpO1xyXG4gICAgIH1cclxuXHJcbiAgICAvL1BhcnRlIGRhIHBhZ2luYSB3ZWJcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwiaW5kZXgsIGZvbGxvd1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiU2l0ZSBzb2JyZS4uLlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIkludmF0YV9SSU9cIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkNsaWVudGU8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxNZW51IC8+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nQ2FkLUNsaWVudGUnPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3NlbmRDbGllbnRlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsaWVudGU6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e2VzcGFjb1N0eWxlfSB0eXBlPVwibnVtYmVyXCIgaWQ9XCJjbGllbnRlXCIgbmFtZT1cImNsaWVudGVcIiBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH0gdmFsdWU9e2RhdGFGb3JtLmNsaWVudGV9PjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVzY3Jpw6fDo286XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e2VzcGFjb1N0eWxlfSB0eXBlPVwidGV4dFwiIGlkPVwiZGVzY19jbGllbnRlXCIgbmFtZT1cImRlc2NfY2xpZW50ZVwiIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fSB2YWx1ZT17ZGF0YUZvcm0uZGVzY19jbGllbnRlfT48L2lucHV0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Jsb2NvYnRuJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2J0bic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+RW52aWFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdidG4nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdidXR0b24nIG9uQ2xpY2s9e2hhbmRsZUNsaWNrQ29uc3VsdGFyfT5jb25zdWx0YXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHtjb25zdWx0YXIgPT09IHRydWUgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDb25zdWx0Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAge2NvbnN1bHRhciA9PT0gZmFsc2UgJiYgKDxkaXY+PC9kaXY+KX1cclxuXHJcbiAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgUMOBR0lOQSBDbGllbnRlc1xyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuXHJcbi8qZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9gKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgIHJldHVybiB7IHByb3BzOiB7IGRhdGEgfSB9O1xyXG59Ki9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudGU7XHJcblxyXG5cclxuLy9ucG0gcnVuIGRldlxyXG5cclxuLy8gbnBtIGluc3RhbGwgLS1zYXZlLWRldiBub2RlbW9uXHJcblxyXG5cclxuLy8wOC8xMS8yMDIzXHJcbi8vbnBtIGluc3RhbGwganNvbi1zZXJ2ZXJcclxuLy9odHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUtDY1N6djFSbXVJXHJcblxyXG4vL2NydWQgcmVhY3QgY2Vsa2UiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkIiwiTWVudSIsIkNvbnN1bHQiLCJFeGNsdWlyIiwiYXhpb3MiLCJlc3BhY29TdHlsZSIsIm1hcmdpblJpZ2h0IiwiY2xpZW50ZSIsImRhZG9zQkQiLCJzZXRkYWRvc0JEIiwiZGF0YUZvcm0iLCJzZXREYXRhRm9ybSIsImRlc2NfY2xpZW50ZSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY2F0Y2giLCJlcnIiLCJvbkNoYW5nZUlucHV0IiwiZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInNlbmRDbGllbnRlIiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwicmVzcG9uc2VFbnYiLCJqc29uIiwiZXJybyIsIm1lbnNhZ2VtIiwiY29uc3VsdGFyIiwic2V0Q29uc3VsdGFyIiwiaGFuZGxlQ2xpY2tDb25zdWx0YXIiLCJkaXYiLCJtZXRhIiwiY2hhclNldCIsImNvbnRlbnQiLCJ0aXRsZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJiciIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0Iiwic3R5bGUiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});