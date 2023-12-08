import { render, cleanup, fireEvent, act } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import Home from "./home";
import FAQ from "../FAQ/FAQ";
import Map from "../map/map"; 
import SignIn from "../SignIn/SignIn";
import Register from "../Register/Register";

afterEach(() => {
    cleanup();
import { render, cleanup, fireEvent, act } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import Home from "./home";
import FAQ from "../FAQ/FAQ";
import Map from "../map/map";
import SignIn from "../SignIn/SignIn";
import Register from "../Register/Register";

afterEach(() => {
    cleanup();
});

describe("Testing Home Component", () => {
    it("should test a normal user experience with the buttons working correctly", () => {
        // render the routing so user can properly navigate throughout the page
        const { getByRole, getAllByRole, getByText, getAllByText, debug } = render(
            <MemoryRouter>
                <Routes>
                    <Route path='/' id='home' element={<Home/>} />
                    <Route path='/map' id='map' element={<Map/>} />
                    <Route path='/faq' id='faq' element={<FAQ/>} />
                    <Route path='/signIn' id='signIn' element={<SignIn />} />
                    <Route path='/register' id='register' element={<Register/>} />
                </Routes>
            </MemoryRouter>
        );

        // query for the register button to test if it navigates to the register page
        const registerButton = getAllByRole('button')[0];
        console.log("HERE:", registerButton.href);
        act(() => fireEvent.click(registerButton));
        expect(getAllByText("Register")[0].textContent).toEqual("Register");

        // query for the icon to test if it redirects back to the home page
        const homeElement1 = getAllByRole("link")[0];
        act(() => fireEvent.click(homeElement1));
        expect(getByText('Welcome to Libre')).toBeInTheDocument();

        // query for the map button to test if it navigates to the map page
        const mapButton = getByText("View Map");
        act(() => fireEvent.click(mapButton));
        expect(getAllByRole("img").length).toBeGreaterThan(0);

        // query for the icon to test if it redirects back to the home page
        const homeElement2 = getAllByRole("link")[0];
        expect(homeElement2.href).toEqual("http://localhost/");
        act(() => fireEvent.click(homeElement2));
        expect(getByText("Welcome to Libre")).toBeInTheDocument();

        // query for the FAQ button to test if it navigates to the FAQ page
        const FAQelement = getAllByRole("link")[2];
        expect(FAQelement.href).toEqual("http://localhost/FAQ");
        act(() => fireEvent.click(FAQelement));
        expect(getByText("Frequently Asked Questions")).toBeInTheDocument();

        // query to go back to the home page
        const homeElement3 = getAllByRole("link")[0];
        expect(homeElement3.href).toEqual("http://localhost/");
        act(() => fireEvent.click(homeElement3));
        expect(getByText("Welcome to Libre")).toBeInTheDocument();

        // query to go to the login page
        const loginElement = getAllByRole("link")[3];
        expect(loginElement.href).toEqual("http://localhost/SignIn")
        act(() => fireEvent.click(loginElement));
        expect(getAllByText("Login").length).toBeGreaterThanOrEqual(1);

        // query to go back to the home page and test the home page itself
        const homeElement4 = getAllByRole("link")[0];
        expect(homeElement4.href).toEqual("http://localhost/");
        act(() => fireEvent.click(homeElement4));
        expect(getByText("Welcome to Libre")).toBeInTheDocument();
        expect(getByText("Other Resources")).toBeInTheDocument();
        expect(getByRole("img").src).toEqual("http://localhost/new_logo.svg");
        // testing the navbar...
        expect(getByText("Map")).toBeInTheDocument();
        expect(getByText("FAQ")).toBeInTheDocument();
        expect(getByText("Login")).toBeInTheDocument();

        debug();
    });
});
});

describe("Testing Home Component", () => {
    it("should test a normal user experience with the buttons working correctly", () => {
        // render the routing so user can properly navigate throughout the page 
        const { getByRole, getAllByRole, getByText, getAllByText, debug } = render(
            <MemoryRouter>
                <Routes>
                    <Route path='/' id='home' element={<Home/>} />
                    <Route path='/map' id='map' element={<Map/>} />
                    <Route path='/faq' id='faq' element={<FAQ/>} />
                    <Route path='/signIn' id='signIn' element={<SignIn />} />
                    <Route path='/register' id='register' element={<Register/>} />
                </Routes>
            </MemoryRouter>
        );
        
        // query for the register button to test if it navigates to the register page 
        const registerButton = getAllByRole('button')[0]; 
        console.log("HERE:", registerButton.href); 
        act(() => fireEvent.click(registerButton));   
        expect(getAllByText("Register")[0].textContent).toEqual("Register");  

        // query for the icon to test if it redirects back to the home page 
        const homeElement1 = getAllByRole("link")[0];
        act(() => fireEvent.click(homeElement1));
        expect(getByText('Welcome to Libre')).toBeInTheDocument(); 

        // query for the map button to test if it navigates to the map page 
        const mapButton = getByText("View Map"); 
        act(() => fireEvent.click(mapButton)); 
        expect(getAllByRole("img").length).toBeGreaterThan(0); 

        // query for the icon to test if it redirects back to the home page 
        const homeElement2 = getAllByRole("link")[0];
        expect(homeElement2.href).toEqual("http://localhost/");
        act(() => fireEvent.click(homeElement2)); 
        expect(getByText("Welcome to Libre")).toBeInTheDocument(); 

        // query for the FAQ button to test if it navigates to the FAQ page 
        const FAQelement = getAllByRole("link")[2];
        expect(FAQelement.href).toEqual("http://localhost/FAQ");
        act(() => fireEvent.click(FAQelement));
        expect(getByText("Frequently Asked Questions")).toBeInTheDocument();   

        // query to go back to the home page 
        const homeElement3 = getAllByRole("link")[0]; 
        expect(homeElement3.href).toEqual("http://localhost/"); 
        act(() => fireEvent.click(homeElement3));
        expect(getByText("Welcome to Libre")).toBeInTheDocument(); 
        
        // query to go to the login page 
        const loginElement = getAllByRole("link")[3]; 
        expect(loginElement.href).toEqual("http://localhost/SignIn")
        act(() => fireEvent.click(loginElement)); 
        expect(getAllByText("Login").length).toBeGreaterThanOrEqual(1); 

        // query to go back to the home page and test the home page itself 
        const homeElement4 = getAllByRole("link")[0];
        expect(homeElement4.href).toEqual("http://localhost/"); 
        act(() => fireEvent.click(homeElement4)); 
        expect(getByText("Welcome to Libre")).toBeInTheDocument(); 
        expect(getByText("Other Resources")).toBeInTheDocument(); 
        expect(getByRole("img").src).toEqual("http://localhost/new_logo.svg"); 
        // testing the navbar...
        expect(getByText("Map")).toBeInTheDocument(); 
        expect(getByText("FAQ")).toBeInTheDocument(); 
        expect(getByText("Login")).toBeInTheDocument(); 

        debug();  
    });
});
