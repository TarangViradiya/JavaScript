export const quizQuestions = {

    html: {
        easy: [
            { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Markup Language", "Home Tool Markup Language", "Hyperlinks Markup Language"], answer: "Hyper Text Markup Language" },
            { question: "Which tag is used for the largest heading?", options: ["<h6>", "<h1>", "<head>", "<title>"], answer: "<h1>" },
            { question: "Which tag creates a line break?", options: ["<lb>", "<br>", "<break>", "<line>"], answer: "<br>" },
            { question: "Which tag creates a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], answer: "<a>" },
            { question: "Which tag is used to display an image?", options: ["<image>", "<img>", "<pic>", "<src>"], answer: "<img>" }
        ],

        medium: [
            { question: "Which attribute provides alternate text for images?", options: ["title", "alt", "src", "href"], answer: "alt" },
            { question: "Which tag defines a table row?", options: ["<tr>", "<td>", "<th>", "<table>"], answer: "<tr>" },
            { question: "How do you comment in HTML?", options: ["//", "/* */", "<!-- -->", "#"], answer: "<!-- -->" },
            { question: "Which element contains meta information?", options: ["<body>", "<html>", "<head>", "<meta>"], answer: "<head>" },
            { question: "Which input type hides typed text?", options: ["text", "hidden", "password", "secure"], answer: "password" }
        ],

        hard: [
            { question: "Which element is the root of an HTML document?", options: ["<body>", "<head>", "<html>", "<main>"], answer: "<html>" },
            { question: "Which tag embeds JavaScript?", options: ["<js>", "<script>", "<code>", "<javascript>"], answer: "<script>" },
            { question: "Which attribute opens a link in a new tab?", options: ["new", "open", "target", "href"], answer: "target" },
            { question: "Which tag defines navigation links?", options: ["<nav>", "<menu>", "<header>", "<section>"], answer: "<nav>" },
            { question: "Which tag defines semantic footer?", options: ["<bottom>", "<footer>", "<end>", "<section>"], answer: "<footer>" }
        ]
    },

    css: {
        easy: [
            { question: "What does CSS stand for?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Color Style Sheets", "Computer Style Sheets"], answer: "Cascading Style Sheets" },
            { question: "Which property changes text color?", options: ["text-color", "font-color", "color", "style"], answer: "color" },
            { question: "Which symbol selects a class?", options: ["#", ".", "*", "&"], answer: "." },
            { question: "Which property sets background color?", options: ["background", "bgcolor", "background-color", "color"], answer: "background-color" },
            { question: "Which property makes text bold?", options: ["font-weight", "font-style", "text-bold", "weight"], answer: "font-weight" }
        ],

        medium: [
            { question: "How do you select an id?", options: ["#id", ".id", "id()", "*id"], answer: "#id" },
            { question: "Which property creates rounded corners?", options: ["corner-radius", "border-radius", "radius", "curve"], answer: "border-radius" },
            { question: "Which property controls element visibility?", options: ["display", "opacity", "visibility", "show"], answer: "visibility" },
            { question: "Which unit is relative to parent?", options: ["px", "em", "cm", "pt"], answer: "em" },
            { question: "Which property controls text alignment?", options: ["align", "text-align", "position", "float"], answer: "text-align" }
        ],

        hard: [
            { question: "Which property creates flex layout?", options: ["display:flex", "flexbox", "position:flex", "layout:flex"], answer: "display:flex" },
            { question: "Which pseudo-class applies on hover?", options: [":active", ":hover", ":focus", ":visited"], answer: ":hover" },
            { question: "Which property controls stacking order?", options: ["index", "layer", "z-index", "depth"], answer: "z-index" },
            { question: "Which property hides overflow content?", options: ["overflow:hidden", "display:none", "visibility:hidden", "clip"], answer: "overflow:hidden" },
            { question: "Which function applies shadow to text?", options: ["box-shadow", "text-shadow", "shadow()", "font-shadow"], answer: "text-shadow" }
        ]
    },

    js: {
        easy: [
            { question: "Which symbol is used for comments?", options: ["//", "#", "<!--", "**"], answer: "//" },
            { question: "Which keyword declares a variable?", options: ["var", "let", "const", "All"], answer: "All" },
            { question: "Which method prints to console?", options: ["log()", "print()", "console.log()", "write()"], answer: "console.log()" },
            { question: "Which data type stores true/false?", options: ["Boolean", "String", "Number", "Null"], answer: "Boolean" },
            { question: "Which operator adds values?", options: ["+", "-", "*", "/"], answer: "+" }
        ],

        medium: [
            { question: "Which operator checks strict equality?", options: ["==", "=", "===", "!="], answer: "===" },
            { question: "Which function delays execution?", options: ["setTimeout()", "setInterval()", "wait()", "delay()"], answer: "setTimeout()" },
            { question: "Which event triggers on click?", options: ["onpress", "onclick", "onhover", "onchange"], answer: "onclick" },
            { question: "Which loop runs at least once?", options: ["for", "while", "do...while", "foreach"], answer: "do...while" },
            { question: "Which keyword stops a loop?", options: ["stop", "break", "exit", "return"], answer: "break" }
        ],

        hard: [
            { question: "What is typeof null?", options: ["null", "object", "undefined", "number"], answer: "object" },
            { question: "Which method converts JSON to object?", options: ["parse()", "stringify()", "JSON.parse()", "convert()"], answer: "JSON.parse()" },
            { question: "Which scope does let have?", options: ["Global", "Function", "Block", "Script"], answer: "Block" },
            { question: "Which array method removes last element?", options: ["pop()", "shift()", "slice()", "splice()"], answer: "pop()" },
            { question: "Which keyword creates a promise?", options: ["async", "await", "new Promise", "then"], answer: "new Promise" }
        ]
    },

    react: {
        easy: [
            { question: "Who developed React?", options: ["Google", "Facebook", "Microsoft", "Twitter"], answer: "Facebook" },
            { question: "What is JSX?", options: ["HTML", "JavaScript XML", "CSS", "JSON"], answer: "JavaScript XML" },
            { question: "Which command creates React app?", options: ["npm start", "npm create-react-app", "npx create-react-app", "react init"], answer: "npx create-react-app" },
            { question: "What is a component?", options: ["Function", "UI block", "Variable", "Hook"], answer: "UI block" },
            { question: "Which hook manages state?", options: ["useEffect", "useState", "useRef", "useMemo"], answer: "useState" }
        ],

        medium: [
            { question: "What are props used for?", options: ["State", "Passing data", "Styling", "Routing"], answer: "Passing data" },
            { question: "Which hook handles side effects?", options: ["useState", "useEffect", "useContext", "useReducer"], answer: "useEffect" },
            { question: "Which method renders component?", options: ["React.render()", "ReactDOM.render()", "render()", "mount()"], answer: "ReactDOM.render()" },
            { question: "Which hook accesses DOM?", options: ["useDom", "useRef", "useState", "useEffect"], answer: "useRef" },
            { question: "What is virtual DOM?", options: ["Real DOM", "Copy of DOM", "Browser DOM", "Shadow DOM"], answer: "Copy of DOM" }
        ],

        hard: [
            { question: "Which lifecycle runs after mount?", options: ["componentDidMount", "render", "useEffect", "componentWillMount"], answer: "componentDidMount" },
            { question: "Which hook improves performance?", options: ["useMemo", "useState", "useEffect", "useRef"], answer: "useMemo" },
            { question: "What is key used for?", options: ["Styling", "Routing", "List identity", "Props"], answer: "List identity" },
            { question: "Which method updates state?", options: ["this.state()", "setState()", "update()", "changeState()"], answer: "setState()" },
            { question: "How to conditionally render?", options: ["if", "ternary", "&&", "All"], answer: "All" }
        ]
    }

};
