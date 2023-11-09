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
        const { getByTestId, getAllByText, getAllByRole, getByPlaceholderText, debug } = render(
            <MemoryRouter>
                <Routes> 
                    <Route path='/' id='home' element={<Home />} /> 
                    <Route path='/register' id='register' element={<Register />} /> 
                    <Route path='/signIn' id='signIn' element={<SignIn />} />
                </Routes>
            </MemoryRouter>
        );

        // go to the login page 
        const loginButton = getAllByRole('link')[3];
        act(() => fireEvent.click(loginButton)); 
        expect(getAllByText("Login").length).toBeGreaterThan(1);  

        // input important information
        const inputEmail = getByPlaceholderText('Email'); 
        expect(inputEmail.type).toEqual('email');
        fireEvent.change(inputEmail, { target: { value: "bob@gmail.com"}}); 
        expect(inputEmail.value).toEqual("bob@gmail.com"); 
        
        const inputPass = getByPlaceholderText('Password'); 
        expect(inputPass.type).toEqual("password"); 
        fireEvent.change(inputPass, { target: { value: "bobpass" }}); 
        expect(inputPass.value).toEqual("bobpass"); 

        // now mock a submit to see if the handleSubmit for the form works 
        const handleOnSubmitMock = jest.fn(); 
        const formElement = getByTestId('formElement'); 
        formElement.onsubmit = handleOnSubmitMock; 
        fireEvent.submit(formElement); 
        expect(handleOnSubmitMock).toHaveBeenCalled(); 

        debug(); 
    });

    it("should redirect to the register page if user does not have an account", () => {
        const { getByText, getAllByText, getAllByRole, debug } = render(
            <MemoryRouter>
                <Routes>
                    <Route path='/' id="home" element={<Home />} />
                    <Route path='/register' id='register' element={<Register />} />
                    <Route path="/signIn" id="signIn" element={<SignIn />} />
                </Routes>
            </MemoryRouter>
        ); 
        
        // go to the login page 
        const loginButton = getAllByRole('link')[3]; 
        act(() => fireEvent.click(loginButton)); 
        expect(getAllByText("Login").length).toBeGreaterThan(1); 

        // go to the register page 
        const registerButton = getAllByRole("button")[0]; 
        act(() => fireEvent.click(registerButton)); 
        expect(getByText("Register")).toBeInTheDocument(); 

        // debug(); 
    }); 
}); 