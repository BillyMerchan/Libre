import { render, cleanup, fireEvent, act } from '@testing-library/react'; 
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import Home from '../home/home';
import Register from './Register';
import SignIn from '../SignIn/SignIn';

afterEach(() => {
    cleanup(); 
}); 

describe(Register, () => {
    it("should test for correct registering functionality with valid fields", () => {
        const { getByTestId, getAllByRole, getByPlaceholderText, debug } = render(
            <MemoryRouter>
                <Routes>
                    <Route path='/' id='home' element={<Home/>} />
                    <Route path='/register' id='register' element={<Register/>} />
                </Routes>
            </MemoryRouter>
        );
        
        // go to the register page 
        const registerButton = getAllByRole('button')[0]; 
        act(() => fireEvent.click(registerButton));     

        // input the form fields 
        const inputName = getByPlaceholderText("Name");
        expect(inputName).toBeInTheDocument(); 
        expect(inputName.className).toEqual("InputR"); 
        expect(inputName.type).toEqual("text"); 
        fireEvent.change(inputName, { target: { value: "Bob" }}); 
        expect(inputName.value).toEqual("Bob"); 

        const inputEmail = getByPlaceholderText("Email"); 
        expect(inputEmail).toBeInTheDocument(); 
        expect(inputEmail.className).toEqual("InputR");    
        expect(inputEmail.type).toEqual("email"); 
        fireEvent.change(inputEmail, { target: { value: "Bob@gmail.com"}});
        expect(inputEmail.value).toEqual("Bob@gmail.com"); 

        const inputPass = getByPlaceholderText("Password"); 
        expect(inputPass).toBeInTheDocument(); 
        expect(inputPass.className).toEqual("InputR");          
        expect(inputPass.type).toEqual("password"); 
        fireEvent.change(inputPass, { target: { value: "bobpass" }}); 
        expect(inputPass.value).toEqual("bobpass"); 

        // test if the submission works... 
        const handleOnSubmitMock = jest.fn(); 
        const formElement = getByTestId("formElement");
        formElement.onsubmit = handleOnSubmitMock; 
        const submitElement = getAllByRole("button")[0]; 
        fireEvent.click(submitElement); 
        expect(handleOnSubmitMock).toHaveBeenCalled(); 
    
        // debug(); 
    });

    it("should test if it goes to the Login Page if the user has an account", () => {
        const { getByText, getAllByText, getAllByRole, debug } = render(
            <MemoryRouter>
                <Routes>
                    <Route path='/' id='home' element={<Home/>} />
                    <Route path='/register' id='register' element={<Register/>} />
                    <Route path='/signIn' id='signIn' element={<SignIn />} /> 
                </Routes>
            </MemoryRouter>
        );
        
        const registerButton = getAllByRole('button')[0]
        act(() => fireEvent.click(registerButton));
        expect(getAllByText("Register").length).toBeGreaterThan(1); 

        const switchButton = getByText("Already have an account?");
        fireEvent.click(switchButton); 
        expect(getAllByText("Login").length).toBeGreaterThan(1); 

        // debug();     
    }); 
}); 