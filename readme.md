named export : if want to export many things from one file then use this export 
Syntax : export name_constant = ........
named import : import {name_constant} from <path>


# Lecture - 5
# React hooks 
 - normal JS utility function , hooks always start with use_________
 - two important hooks : 
    useState() - used to generate super powerful State variable.  ( for filtering , updating in react page, if you want to make your variables dynamic -> use useState   )
        - react updates whhole component and render that component once again.
        - never create usestate outside the components ( hooks can only be called inside body component)  

        - try to create hooks at top.
        - never create hooks inside if else block.( will create inconsistency in code ) 

    useEffect() - function takes two args -> first function , second array
        used in fetching data dynamically( second approach)
         - this useeffect function will call after the components has been render everytime (without dependency array ) (BASIC NATURE).
         - if dependency array -> (if empty array) , useeffect is called on initiaL render JUST ONCE.
         - if we are puttinh anything inside dependency array (it is not empty ) , then useeffect called everytime that array changes.


# Lecture - 6 
- monolith architecture : 
    ((api inside) (ui code)(authentication)(database)(sms))(working togther)(have to use same language)

- micro service architecture : 
    (backend service )(ui)(auth)(db)(sms) (independent serivce) (can use different language : according to there convenience)
    How these services will work together : workes on own specific ports , calls services according to there working ports, connecteed with ports(url)

- how to fetch data dynamically : 
    1) . load page -> call api -> render
    2) . Load -> render -> API -> render(always will use sthis approach -> better ux)(react has one of the best render mechanism)



# Lecture : 7
## Creating Router
* Creating Routers( different pages)
* will use  library for it -> react router dom librery ( cmd => npm i react-router-dom)
* in App. js we have to create routing configuration.(import create browser router) cofiguration means some info that will define what will happen on a  specific route.
* import createBrowerRouter and RouterProvider from react-router-dom
(* rafce)
* react-router-dom provide us a hook -> useRouteError -> this hook gives more information of error, can show specific erro to user.

* In react if you want to route pages dont use anchor tags.
* Use link component in react -> it does not load whole page.<Link to ="/about">About Us <Link/>(Singal page application)

* two types of routing in web apps;
    - client side routing (not making network call -> this is client side routing ,  just components are getting exchanged )[we are implementing client side routing]
    - server side routing ( you make a call and it make a call from server )
 # Dynamic Routing : 
    - path : "/page/:dynID"


# Lecture : 8
## Class Baesd Components.
    - its a normal  js class. 
    - syntax : 
        import React from "react";
        class ClassName extends React.Component{
            render(){
                return {
                    ....
                }
            }//render method will return piece of jsx which will render on page.
        }
        // can export using normal syntax
    - How to recieve props : we have to create constructer and that constructer will recieve the props  
        - syntax : 
            constructor(props){
                super (props);
                console.log(props)
            }
        - why writing super props : --------HW-------
    - Now , how to use that props inside class?
        - Syntax : 
            <div> {this.props.name} </div> 
          
    - Creating State Variable  :  state is created whenever instance of class is created ( Instance of class => loading a class base component on webpage is like creating new instance of the class)
        - syntax :
            // in constructor 
            this.state = {
                count:0,
                count2:0,
                .....
            };

            /// how to use
            this.state.count
    
    - How can we update these state variables  
        - never directly update state variable.
        - syntax: 
            this.setState({
                count : this.state.count + 1;//updating state variables 
            })
    - first constructor will be called then ender method will called , then componentDidMount() function called.
    - use of componentDidMount() : this is use to make api call.(why inside it => so that page will fierst render then call api , it will not stuck in calling api , does not have to wait fo api call) {< Study react life cycle />}
    - react batches reander phse(because commit phase is very expensive ) if there are more then two child. ( two phases => render phase , commit phase).
    - whole life cycle : 
        * ---MOUNTING----
        * Constructor called
        * Render with dummy data
            <HTML dummy>
        * ComponenteDidMont()
            API call
            <this.setState -> State variable is updated>
        * -----UPDATE-----
            render with API data
            <HTML (new API data)>
        * ComponentDidUpdate()
         

# Lecture : 9
## Optimizing project
* Single Responsibility principle : single identity should have singal responsibility.
* Custom Hooks :  ( custom hooks make code more readable , more reusable , more modular which helps in debugging )
    - when creating hooks always start name with "use"(smaller case)
    - create sepaprate file for each hook, and name that file exact same as name of hook(better way).

* Chunking / code splitting / Dynamic bundling /lazy loading/on demand loading: 
    - syntax : 
        - const name = lazy(()=>import("./path"));
        - suspense component : wrap component in suspense for syncronization


# Lecture : 10
## CSS
* MUI
* tailwind


