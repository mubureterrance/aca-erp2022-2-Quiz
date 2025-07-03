export const data = [
  {
    question: "What hook is used to manage state in functional React components?",
    option1: "useEffect",
    option2: "useState",
    option3: "useContext",
    option4: "useReducer",
    ans: 2,
    concept: "useState Hook",
    explanation: "useState is the primary hook for managing local state in functional components."
  },
  {
    question: "What is the purpose of the useEffect hook?",
    option1: "To manage component state",
    option2: "To perform side effects in functional components",
    option3: "To create custom hooks",
    option4: "To handle user events",
    ans: 2,
    concept: "useEffect Hook",
    explanation: "useEffect handles side effects like API calls, timers, and cleanup operations."
  },
  {
    question: "Which TypeScript feature ensures type safety for component props?",
    option1: "Interfaces",
    option2: "Classes",
    option3: "Enums",
    option4: "Generics",
    ans: 1,
    concept: "TypeScript Interfaces",
    explanation: "Interfaces define the shape of objects and ensure type safety for props and data structures."
  },
  {
    question: "What is the correct syntax for conditional rendering in React?",
    option1: "if (condition) { return <div>Content</div>; }",
    option2: "{condition ? <div>True</div> : <div>False</div>}",
    option3: "{condition && <div>Content</div>}",
    option4: "Both B and C",
    ans: 4,
    concept: "Conditional Rendering",
    explanation: "React supports both ternary operators and logical AND for conditional rendering."
  },
  {
    question: "How do you handle events in React with TypeScript?",
    option1: "onClick={(e) => handleClick(e)}",
    option2: "onClick={(e: React.MouseEvent) => handleClick(e)}",
    option3: "onSubmit={(e: React.FormEvent) => handleSubmit(e)}",
    option4: "All of the above",
    ans: 4,
    concept: "Event Handling with TypeScript",
    explanation: "TypeScript provides specific event types for better type safety in event handlers."
  },
  {
    question: "What is the purpose of the key prop in React lists?",
    option1: "To style list items",
    option2: "To help React identify which items have changed",
    option3: "To sort the list",
    option4: "To access list items",
    ans: 2,
    concept: "React Keys",
    explanation: "Keys help React identify which items have changed, are added, or are removed for efficient updates."
  },
  {
    question: "Which CSS framework is commonly used with React for styling?",
    option1: "Bootstrap",
    option2: "Tailwind CSS",
    option3: "Material-UI",
    option4: "All of the above",
    ans: 4,
    concept: "CSS Framework Integration",
    explanation: "React works well with various CSS frameworks for styling components."
  },
  {
    question: "What is the correct way to import React in a TypeScript file?",
    option1: "import React from 'react';",
    option2: "import * as React from 'react';",
    option3: "const React = require('react');",
    option4: "Both A and B",
    ans: 4,
    concept: "ES6 Imports",
    explanation: "Both default import and namespace import syntaxes are valid for importing React."
  },
  {
    question: "How do you prevent the default behavior of form submission in React?",
    option1: "e.preventDefault()",
    option2: "e.stopPropagation()",
    option3: "return false",
    option4: "e.cancelBubble = true",
    ans: 1,
    concept: "Event Prevention",
    explanation: "preventDefault() stops the default behavior of events like form submission."
  },
  {
    question: "What is the purpose of array destructuring in JavaScript/TypeScript?",
    option1: "To create new arrays",
    option2: "To extract values from arrays into variables",
    option3: "To sort arrays",
    option4: "To filter arrays",
    ans: 2,
    concept: "Array Destructuring",
    explanation: "Destructuring allows extracting values from arrays and objects into separate variables."
  },
  {
    question: "What does the spread operator (...) do with arrays?",
    option1: "Removes elements",
    option2: "Sorts elements",
    option3: "Expands array elements",
    option4: "Filters elements",
    ans: 3,
    concept: "Spread Operator",
    explanation: "The spread operator expands array elements, useful for copying and merging arrays."
  },
  {
    question: "Which method is used to transform each element of an array?",
    option1: "forEach",
    option2: "map",
    option3: "filter",
    option4: "reduce",
    ans: 2,
    concept: "Array.map()",
    explanation: "map() creates a new array with results of calling a function on every element."
  },
  {
    question: "What is the purpose of the filter() method on arrays?",
    option1: "To sort array elements",
    option2: "To create a new array with elements that pass a test",
    option3: "To find a single element",
    option4: "To transform elements",
    ans: 2,
    concept: "Array.filter()",
    explanation: "filter() creates a new array with all elements that pass a provided test function."
  },
  {
    question: "What is JSX in React?",
    option1: "A JavaScript library",
    option2: "A syntax extension that allows HTML-like code in JavaScript",
    option3: "A CSS framework",
    option4: "A testing tool",
    ans: 2,
    concept: "JSX Syntax",
    explanation: "JSX is a syntax extension that allows writing HTML-like code in JavaScript/TypeScript."
  },
  {
    question: "How do you pass data from parent to child components in React?",
    option1: "Through state",
    option2: "Through props",
    option3: "Through context",
    option4: "Through refs",
    ans: 2,
    concept: "Props",
    explanation: "Props are the primary way to pass data from parent to child components."
  },
  {
    question: "What is the correct way to update state in React?",
    option1: "state.value = newValue",
    option2: "setState(newValue)",
    option3: "this.state = newValue",
    option4: "updateState(newValue)",
    ans: 2,
    concept: "State Updates",
    explanation: "State should only be updated using the setState function from useState hook."
  },
  {
    question: "Which icon library is commonly used with React applications?",
    option1: "Font Awesome",
    option2: "Lucide React",
    option3: "Heroicons",
    option4: "All of the above",
    ans: 4,
    concept: "Icon Libraries",
    explanation: "Various icon libraries can be integrated with React for consistent iconography."
  },
  {
    question: "What is the purpose of the className attribute in JSX?",
    option1: "To add CSS classes to elements",
    option2: "To identify elements",
    option3: "To bind event handlers",
    option4: "To set inline styles",
    ans: 1,
    concept: "CSS Classes in JSX",
    explanation: "className is used instead of class to add CSS classes to JSX elements."
  },
  {
    question: "How do you create a custom hook in React?",
    option1: "function useCustomHook() { return useState(); }",
    option2: "const useCustomHook = () => { return useState(); }",
    option3: "Both A and B",
    option4: "Custom hooks are not possible",
    ans: 3,
    concept: "Custom Hooks",
    explanation: "Custom hooks are functions that start with 'use' and can call other hooks."
  },
  {
    question: "What is the purpose of the React Fragment?",
    option1: "To group elements without adding extra DOM nodes",
    option2: "To create reusable components",
    option3: "To manage state",
    option4: "To handle events",
    ans: 1,
    concept: "React Fragments",
    explanation: "Fragments let you group elements without adding extra DOM nodes."
  },
  {
    question: "Which TypeScript utility type makes all properties optional?",
    option1: "Required<T>",
    option2: "Partial<T>",
    option3: "Pick<T, K>",
    option4: "Omit<T, K>",
    ans: 2,
    concept: "TypeScript Utility Types",
    explanation: "Partial<T> makes all properties of type T optional."
  },
  {
    question: "What is the correct way to handle asynchronous operations in React?",
    option1: "Using async/await in useEffect",
    option2: "Using promises with .then()",
    option3: "Using separate async functions",
    option4: "All of the above",
    ans: 4,
    concept: "Asynchronous Operations",
    explanation: "React supports various patterns for handling async operations in components."
  },
  {
    question: "What is the purpose of the dependency array in useEffect?",
    option1: "To list required imports",
    option2: "To control when the effect runs",
    option3: "To handle errors",
    option4: "To clean up resources",
    ans: 2,
    concept: "useEffect Dependencies",
    explanation: "The dependency array controls when useEffect runs based on value changes."
  },
  {
    question: "How do you type a function parameter in TypeScript?",
    option1: "function myFunc(param: string) {}",
    option2: "function myFunc(param) : string {}",
    option3: "function myFunc(string param) {}",
    option4: "function myFunc(param as string) {}",
    ans: 1,
    concept: "Function Parameter Types",
    explanation: "Parameter types are specified with a colon after the parameter name."
  },
  {
    question: "What is the correct way to handle form inputs in React?",
    option1: "Using uncontrolled components with refs",
    option2: "Using controlled components with state",
    option3: "Using both approaches",
    option4: "Forms are not supported in React",
    ans: 3,
    concept: "Form Handling",
    explanation: "React supports both controlled and uncontrolled approaches for form inputs."
  },
  {
    question: "Which CSS property is used for responsive design in Tailwind CSS?",
    option1: "Media queries",
    option2: "Responsive prefixes (sm:, md:, lg:)",
    option3: "Flexbox",
    option4: "Grid",
    ans: 2,
    concept: "Responsive Design",
    explanation: "Tailwind uses responsive prefixes to apply styles at different screen sizes."
  },
  {
    question: "What is the purpose of the return statement in React components?",
    option1: "To exit the function",
    option2: "To return the JSX to be rendered",
    option3: "To return component state",
    option4: "To return props",
    ans: 2,
    concept: "Component Return",
    explanation: "React components return JSX that describes what should be rendered."
  },
  {
    question: "How do you import specific functions from a module in TypeScript?",
    option1: "import { function1, function2 } from 'module';",
    option2: "import * as module from 'module';",
    option3: "import module from 'module';",
    option4: "const { function1 } = require('module');",
    ans: 1,
    concept: "Named Imports",
    explanation: "Named imports allow importing specific functions or variables from a module."
  },
  {
    question: "What is the purpose of the onClick event handler?",
    option1: "To handle mouse clicks",
    option2: "To handle form submissions",
    option3: "To handle keyboard events",
    option4: "To handle page loads",
    ans: 1,
    concept: "Click Events",
    explanation: "onClick handles mouse click events on elements."
  },
  {
    question: "What is the correct way to add CSS classes conditionally in React?",
    option1: "className={condition ? 'class1' : 'class2'}",
    option2: "className={`base-class ${condition ? 'extra-class' : ''}`}",
    option3: "className={classNames('base', { 'extra': condition })}",
    option4: "All of the above",
    ans: 4,
    concept: "Conditional CSS Classes",
    explanation: "Multiple patterns exist for conditionally applying CSS classes in React."
  },
  {
    question: "What is the purpose of the map() function's second parameter?",
    option1: "The current element",
    option2: "The index",
    option3: "The array",
    option4: "The callback function",
    ans: 2,
    concept: "Array Map Index",
    explanation: "The second parameter of map() callback is the index of the current element."
  },
  {
    question: "How do you handle component unmounting in useEffect?",
    option1: "Return a cleanup function",
    option2: "Use componentWillUnmount",
    option3: "Call clearEffect()",
    option4: "Use useCleanup hook",
    ans: 1,
    concept: "useEffect Cleanup",
    explanation: "Returning a function from useEffect handles cleanup when component unmounts."
  },
  {
    question: "What is the correct way to define default props in TypeScript?",
    option1: "Using defaultProps",
    option2: "Using default parameters",
    option3: "Using the ?? operator",
    option4: "All of the above",
    ans: 4,
    concept: "Default Props",
    explanation: "TypeScript supports multiple ways to define default values for props."
  },
  {
    question: "What is the purpose of the useState hook's initial value?",
    option1: "To set the maximum value",
    option2: "To set the initial state value",
    option3: "To set the data type",
    option4: "To set validation rules",
    ans: 2,
    concept: "useState Initial Value",
    explanation: "The initial value parameter sets the initial state when the component first mounts."
  },
  {
    question: "How do you prevent a component from re-rendering unnecessarily?",
    option1: "React.memo",
    option2: "useMemo",
    option3: "useCallback",
    option4: "All of the above",
    ans: 4,
    concept: "Performance Optimization",
    explanation: "React provides several tools to optimize component rendering performance."
  },
  {
    question: "What is the purpose of the key attribute when rendering lists?",
    option1: "To access list items",
    option2: "To help React track changes efficiently",
    option3: "To style list items",
    option4: "To sort the list",
    ans: 2,
    concept: "React List Keys",
    explanation: "Keys help React identify which items have changed for efficient updates."
  },
  {
    question: "What is the difference between interface and type in TypeScript?",
    option1: "Interface is for objects, type is for primitives",
    option2: "Interface can be extended, type cannot",
    option3: "They are mostly interchangeable with slight differences",
    option4: "Type is deprecated",
    ans: 3,
    concept: "Interface vs Type",
    explanation: "Interface and type are mostly interchangeable with some specific differences."
  },
  {
    question: "How do you handle errors in React components?",
    option1: "Using try-catch blocks",
    option2: "Using Error Boundaries",
    option3: "Using the useError hook",
    option4: "Both A and B",
    ans: 4,
    concept: "Error Handling",
    explanation: "React supports both try-catch for async operations and Error Boundaries for component errors."
  },
  {
    question: "What is the purpose of the useCallback hook?",
    option1: "To memoize expensive calculations",
    option2: "To memoize callback functions",
    option3: "To handle async operations",
    option4: "To manage component state",
    ans: 2,
    concept: "useCallback Hook",
    explanation: "useCallback memoizes callback functions to prevent unnecessary re-renders."
  },
  {
    question: "How do you type an array in TypeScript?",
    option1: "Array<type>",
    option2: "type[]",
    option3: "Both A and B",
    option4: "array<type>",
    ans: 3,
    concept: "Array Types",
    explanation: "TypeScript supports both Array<type> and type[] syntax for array types."
  },
  {
    question: "What is the correct way to handle multiple state updates?",
    option1: "Call setState multiple times",
    option2: "Use a single setState with an object",
    option3: "Use useReducer for complex state",
    option4: "All approaches are valid",
    ans: 4,
    concept: "State Management",
    explanation: "React supports multiple patterns for managing state updates."
  },
  {
    question: "What is the purpose of the htmlFor attribute in JSX?",
    option1: "To link labels to form inputs",
    option2: "To create hyperlinks",
    option3: "To reference other elements",
    option4: "To set HTML attributes",
    ans: 1,
    concept: "Form Labels",
    explanation: "htmlFor links labels to form inputs for accessibility (equivalent to HTML's 'for')."
  },
  {
    question: "How do you handle component lifecycle in functional components?",
    option1: "Using lifecycle methods",
    option2: "Using useEffect hook",
    option3: "Using useState hook",
    option4: "Using useContext hook",
    ans: 2,
    concept: "Component Lifecycle",
    explanation: "useEffect hook handles all lifecycle events in functional components."
  },
  {
    question: "What is the purpose of the React.StrictMode?",
    option1: "To enable strict type checking",
    option2: "To highlight potential problems in development",
    option3: "To improve performance",
    option4: "To enable new features",
    ans: 2,
    concept: "React StrictMode",
    explanation: "StrictMode helps identify potential problems and deprecated features in development."
  },
  {
    question: "How do you pass multiple props to a component efficiently?",
    option1: "Pass each prop individually",
    option2: "Use the spread operator with an object",
    option3: "Use a single object prop",
    option4: "Both B and C",
    ans: 4,
    concept: "Props Spreading",
    explanation: "Both spread operator and object props are efficient ways to pass multiple props."
  },
  {
    question: "What is the correct way to handle boolean props in TypeScript?",
    option1: "isActive: boolean",
    option2: "isActive?: boolean",
    option3: "isActive: boolean = false",
    option4: "All of the above",
    ans: 4,
    concept: "Boolean Props",
    explanation: "TypeScript supports required, optional, and default boolean props."
  },
  {
    question: "How do you optimize bundle size in React applications?",
    option1: "Code splitting",
    option2: "Tree shaking",
    option3: "Lazy loading",
    option4: "All of the above",
    ans: 4,
    concept: "Bundle Optimization",
    explanation: "Multiple techniques exist to optimize React application bundle sizes."
  },
  {
    question: "What is the purpose of the useMemo hook?",
    option1: "To memoize expensive calculations",
    option2: "To memoize callback functions",
    option3: "To manage component state",
    option4: "To handle side effects",
    ans: 1,
    concept: "useMemo Hook",
    explanation: "useMemo memoizes expensive calculations to prevent unnecessary recalculations."
  },
  {
    question: "How do you ensure accessibility in React applications?",
    option1: "Using semantic HTML elements",
    option2: "Adding ARIA attributes",
    option3: "Ensuring keyboard navigation",
    option4: "All of the above",
    ans: 4,
    concept: "Accessibility",
    explanation: "Accessibility requires attention to semantic HTML, ARIA attributes, and keyboard navigation."
  }
];