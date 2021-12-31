### Front-end Technologies
- HTML
- CSS
- JavaScript
- Bootstrap  framework
- Angular
- ReactJS


### Back-end Technologies
- Node.js
   - express.js
   - nodemoon
   - cors
   - dotenv
- PHP
- C#
- Java
- Python


### Data base
- MongoDb
- Mysql
- SQLite
- Firebase
- Postgressql
- Oracle

+ VCS(Source code management)
    - Distributed VCS
        - GIT,Mercurial
    - Remote (Central) VCS
        - Github,Bitbucket

### Git
- git init
- git add filename
- git add filename1 filename100
- git add . or git add --all
- git status
- Do git configurations(set user.name and user.email)
- commit data with commit message
- push the data into github

### HTML5
- Hyper Text Makeup Language
- three categories of elements
    - semantic Elements
        - header
        - section
        - article
        - aside
        - footer
        - table
    - Block Level Elements
        - it will occupy entire width if the browser
        - header1 to header6
        - paragraphs
        - division
        - all sematic elements are block level but all block level are not sematic elements
        - text will start from new line

    - Inline Elements
        - span
        - img
        - anther element
        - nav
        - forms(registration forms)
        - input
        - text area
        - legend
        - sup
        - sub
        - unorder list
        - order list



Task:
=====
- Audio element
- video element
- meter
- canvas
- datalist
- progress
- select(drop down)

### css
+ Cascading Style Sheets-to beautify the project
+ Types of CSS
  - Inline CSS
  - Internal CSS
  - External CSS
+ Syntax of css:
 
 '''
selector{
    css properties
}
'''
### Selectors

+ simple selectors
   - Universal selector(*)
   - By element name
   - Grouping selector(,)
   - Class selector(.)
   - Id selector(#)
+ Combinators 
   - Descendent selector( )-to apply styles for particular elements 
   - Child selector (>)-to apply style for parent and child
   - Adjacent Sibling selector(+)
   - General sibling selector(~)
+ Pseudo class selector
+ Pseudo element selector
+ Attribute selector


### Box modal
+ margin
+ Border
+ padding
    - padding:10px(for all adjacent sides)
    - padding :10px 30px(10px for top and bottom;30px for left and right)
    - padding:10px 300px 50px(10px for top;300px for right and left;50px for bottom)
    - padding:10px 30px 40px 0px(top,right,bottom,left)
+ width
   -1rem:16px
### Responsive Web Design-change layout with respect to 

### Flex-box
+ display
   - none
   - inline
   - block
   - inline-block
+ position
    - static 
    - relative
    - absolute
    - fixed
    - sticky
+ aligin content
+ align-items
+ align self






### Animations
### Responsive Web Design
### Flex-box
- display
   - flex
   - justify-content
   - flex-direction
   - flex-flow
### Media Queries

- Extra small devices(mobiles)
    - max-width:600px
- Small devices(Large phones,small tabs)
    - min-width:600px
    - max-width:768px
- Medium devices(small laptops)
    - min-width:768px
    - max-width:992px
- Large devices(desktops,large laptops)
    - min-width:992px
    - max-width:1200px
- Extra large devices(LED)
    - min-width:1200px



``` 
@media only screen (min-width:320px(breakpoint value)) and (max-width:500px){
    css code
}
```
### Bootstrap 4.6
- It is a CSS framework

Task 3:
====
- navbar with response



- module(collection of functions,object and classes)
- Package(collection of modules)
- Library(collection of packages)
- framework(collection of Libraries)
+ module-->Package ---> Library --->Framework
 

 + Type of modes
   - offline
   - online
     - CDN links


+ background-color  - bg
+ text-white


+ margin for bootstrap(m-* (0-5))
    - 0 -->0rem
    - 1 -->0.25rem(4px)
    - 2 -->0.5rem(8px)
    - 3 -->1rem(16px)
    - 4 -->1.5rem(24px)
    - 5 -->3rem(48px)
    - margin-left --ml-5
    - margin in all directions --m
    - margin-top -- mt
    - margin-bottom --mb
    - margin-right --mr


+ padding(padding-left-->pl-5)

+ colors
   - primary
   - secondary
   - info
   - success
   - warning
   - danger
   - light
   - dark
   - white
+ We can use color classes for 
    - Buttons (btn btn-primary)
    - Text (text-white)
    - background (bg-secondary)
    - alerts (alert alert-primary)


+ Grid System
    - col-sm-12
    - sm(small devices)
    - md(medium devices)
    - lg(large devices)
    - xl(Extra large devices)


+ Modal
+ table

### Java Script-to apply dynamic behaviour to web page

+ In 1995 `Brenden Eich` introduced JavaScript (ES-262)
+ Javascript is loosly tuppled(no need to mention data type) and dynamic language
+ JavaScript is text-based programming language and it provides OOPS concept and we can run in 
  client-side and server-side(Node.side) for dynamic web applications
- ECMA-Script (European Computer Manufacture Association)(ES-6 version we use mostly)
   + features of ES-6:
   - let &const 
   - map()(default function-it takes less than 1min to get output)
   - arrow function
   - classes
   - spread operator
   - rest parameter
   
+ Datatypes
  - Number
  - BigInt(2^53-1)
  - String
  - Boolean
  - Undefine
  - Null
  - Object
  - Array



+ Variables- we use `var` to create variable
  - var,let&const
  - Scope
    - function level -->var
    - Block level -->let,const
  - Redefine -->var,let(better to take let)-cannot redefine using const
  - Redeclare -->var(cannot redeclare using let&const)

+ `typeof()`
+ Object
```
  {
      name:"Divya"
  }
```

+ Arrar

### Alerts

+ To generate notifications
  - alert
  - prompt(to take input from the user)
  - confirm

+ console statements
  - `console.log()`
  - `console.info()`
  - `console.warn()`
  - `console.error()`


+ spread operator

    - To change array elements from one array to another(swapping)
```
 
 ...variableName
```

+ Rest parameter
  - To handle function parameters
  ```
    ...parameter
  ```



+ Destructuring of Array & objects(to handle data)



+ Function
 - function with function name
 ```
  function demo(x,y){
    return(x+y)
  }
  demo()
  ```

  - Anonymous function
  ```
  let demo=(x,y)=> {
    return x*y
  }
  demo(3,4)
  ```
+ for-in
    - to get index values of an array
+ for-of
    - To get elements in an array
+ forEach() --> (ES-5)
  - it wont assign the value but it prints value
+ map() --> (ES-6)


### DOM
  - Document Object Modeling-load every node of HTML
  - document
  - histoy
  - window-to apply alerts
  - navigator-to store data in offline i.e in browser
+ DOM methods
 - `getElementById()`
 - `getElementByclassName()`
 - `querySelector()`
 - `createElement()`
 - `innerText`
 - `textContent`
 - `append`
 - `appendChild`
 - `innerHTML`
 - `setAttribute()`
 - `classList`
 - `style`
 - `src`


### JSON
+ JSON(Java Script Object Notation)
  - To exchange information between application(client) and server

```
{
  "name":"Divya",
  "salary":"12LPA",
  "Designation":"Junior Software Developer",
  "mobile":8179430548

}
```

+ Ajax call or Promises(fetch API) or axois


### ReactJS



### ReactJS Features
+ It is a Library
+ It follows component based Architecture
  - Functional component
      
function Functional(){
    return(
      <h1>Functional component</h1>  
    );
}

export default Functional;



  - Class component

    import React ,{Component} from "react";


class ClassComponent extends Component{
    render(){
        return(
            <h1>Class Component </h1>
        );
    }
}

export default ClassComponent;



  - Pure component
  - Higher Order Component
+ It provides Virtual DOM
+ It provides JSX(JavaScript and XML)
+ Unidirectional data flow(can send data from one component to another component)
+ Single Page Applications(index.html)



+ Props
    - To pass data from one component to another component we will use props
    - props are immutable(child component we can't change because all data will be stored in parent)
    + UnionBank(Functional component)
      - AndhraBank(Functional component)
      - CorporationBank(Class)


+ States

- In react to maintain information we will use states
- We can maintain states in class component only(Before react16.8 version)
- We can maintain states in functional components also using Hooks
- To take states in react,Try to create constructor above render method and  inside of claa component
- use `rconst` snippet
``` 
constructor(){
  super();
  this.state={

  }
}
```
- To update the state information in class component use `setState()`method

+ To update information in class component we have to follow component lifecycle
  - `componentWillReceiveProps()`
  - `componentWillMount()`
  - `componentDidMount()`
  - `shouldComponentUpdate()`--to update
  - `componentWillUpdate()`-before update
  - `componentDidUpdate()`-after update
  - `componentWillUnmount()`-action to perform before we close
  
### Hooks

+ From react 16.8 version Hooks(default methods) are introduced

- Parent-child1 --> child2 -->child3
- `useState()`-how to maintain data
- `useEffect()`
- `useMemo()`
- `useRef()`
- `useContext()`






+ Project Environment setup
  - [Download VisualStudioCode]('https://code.visualstudio.com/download')
  - [Download NodeJs]('https://nodejs.org/en/download/')
  - install NodeJS and check versions of `node` and `npm`
    - `node -v`
    - `npm -v`
  - `webpack` and `babel`
  - `create-react-app`
    - `npm(node package manager) install create-react-app`-using single command
      - `create-react-app projectname`
  - `npx create-react-app appname`(node package runner)

+ Index.html
+ Index.js
+ App.js
    + IndexPage
      - nav.js-nav component
      - body.js
      - footer.js
      + Home.js
        - nav
        - body
        - footer

+ Login.js
+ Register
+ About
+ Contact












### Refernce Links
- [Flaticon](https://www.flaticon.com/)
- 
- [color code](https://htmlcolorcodes.com/)
- [webaim](https://webaim.org/)-to check color contrast