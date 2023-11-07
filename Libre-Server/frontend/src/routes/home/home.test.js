import { render, cleanup, fireEvent, act, getByAltText, getByRole } from "@testing-library/react";
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
    it("should tests if the register and map buttons work respectively", () => {
        const { getAllByRole, getByText, getAllByText, getByRole, debug } = render(
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
        
        const buttons = getAllByRole('button'); 
        act(() => fireEvent.click(buttons[0]));   
        const registerText = getAllByText("Register"); 
        expect(registerText[0].textContent).toEqual("Register"); 

        const homeElement1 = getAllByRole("link")[0];
        expect(homeElement1.href).toEqual("http://localhost/");  
        act(() => fireEvent.click(homeElement1));

        const mapElement = getByText("View Map"); 
        act(() => fireEvent.click(mapElement)); 
        expect(getAllByRole("img").length).toBeGreaterThan(0); 

        const homeElement2 = getAllByRole("link")[0];
        expect(homeElement2.href).toEqual("http://localhost/");
        act(() => fireEvent.click(homeElement2)); 

        const FAQelement = getAllByRole("link")[2];
        expect(FAQelement.href).toEqual("http://localhost/FAQ");
        act(() => fireEvent.click(FAQelement));
        expect(getByText("Frequently Asked Questions")).toBeInTheDocument();   

        const homeElement3 = getAllByRole("link")[0]; 
        expect(homeElement3.href).toEqual("http://localhost/"); 
        act(() => fireEvent.click(homeElement3));

        const loginElement = getAllByRole("link")[3]; 
        expect(loginElement.href).toEqual("http://localhost/SignIn")
        act(() => fireEvent.click(loginElement)); 
        expect(getAllByText("Login").length).toBeGreaterThanOrEqual(1); 

        const homeElement4 = getAllByRole("link")[0];
        expect(homeElement4.href).toEqual("http://localhost/"); 
        act(() => fireEvent.click(homeElement4)); 
        expect(getByText("Welcome to Libre")).toBeInTheDocument(); 
        expect(getByText("Other Resources")).toBeInTheDocument(); 
        expect(getByRole("img").src).toEqual("http://localhost/new_logo.svg"); 

        debug();  
    });
}); 