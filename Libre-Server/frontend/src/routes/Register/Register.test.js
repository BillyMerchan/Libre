import { render, cleanup, fireEvent, act } from '@testing-library/react'; 
import { MemoryRouter, Routes, Route } from 'react-router-dom';

import Home from '../home/home';
import Register from './Register';
import SignIn from '../SignIn/SignIn';

afterEach(() => {
    cleanup(); 
}); 

describe(Register, () => {
    it("should test for correct registering functionality", () => {
        const { getAllByRole, getByPlaceholderText, getByTestId, debug } = render(
            <MemoryRouter>
                <Routes>
                    <Route path='/' id='home' element={<Home/>} />
                    <Route path='/register' id='register' element={<Register/>} />
                    <Route path='/signIn' id='signIn' element={<SignIn />} /> 
                </Routes>
            </MemoryRouter>
        );
        
        const buttons = getAllByRole('button'); 
        act(() => fireEvent.click(buttons[0])); 

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

        const form = getByTestId("registerForm"); 
        act(() => fireEvent.submit(form)); 

        debug(); 
    });
}); 
