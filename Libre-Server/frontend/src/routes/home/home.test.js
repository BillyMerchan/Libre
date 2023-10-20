import { render, cleanup, fireEvent, act } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import Home from "./home";
import Map from "../map/map"; 
import Register from "../Register/Register";

afterEach(() => {
    cleanup(); 
});

describe("Testing Home Component", () => {
    it("should tests if the register and map buttons work respectively", () => {
        const { getAllByRole, getByText, getAllByText, debug } = render(
            <MemoryRouter>
                <Routes>
                    <Route path='/' id='home' element={<Home/>} />
                    <Route path='/register' id='register' element={<Register/>} />
                    <Route path='/map' id='map' element={<Map/>} />
                </Routes>
            </MemoryRouter>
        );
        
        const buttons = getAllByRole('button'); 
        act(() => fireEvent.click(buttons[0]));  
        const registerText = getAllByText("Register"); 
        expect(registerText[0].textContent).toEqual("Register"); 
        const homeElement = getAllByRole("link")[0];
        expect(homeElement.href).toEqual("http://localhost/");  
        act(() => fireEvent.click(homeElement));
        const mapElement = getByText("View Map"); 
        act(() => fireEvent.click(mapElement)); 
        expect(getAllByRole("img").length).toBeGreaterThan(0); 
        const homeElement2 = getAllByRole("link")[0];
        expect(homeElement2.href).toEqual("http://localhost/");
        act(() => fireEvent.click(homeElement2)); 
        debug();  
    });
}); 