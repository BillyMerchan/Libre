import { cleanup, render, fireEvent, act } from "@testing-library/react"; 
import { MemoryRouter, Routes, Route } from "react-router-dom";

import SignIn from "./SignIn";
import Home from "../home/home";
import Register from "../Register/Register";

afterEach(() => {
    cleanup(); 
}); 

describe(SignIn, () => {
    it("should test for correct login functionality", () => {
        const { getAllByRole, debug } = render(
            <MemoryRouter>
                <Routes> 
                    <Route path='/' id='home' element={<Home />} /> 
                    <Route path='/register' id='register' element={<Register />} /> 
                    <Route path='/signIn' id='signIn' element={<SignIn />} />
                </Routes>
            </MemoryRouter>
        );

        const buttons = getAllByRole('link'); 
        console.log(buttons); 

        debug(); 


    });
}); 