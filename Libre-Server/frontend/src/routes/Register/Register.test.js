import { render, cleanup, fireEvent } from '@testing-library/react'; 
import { MemoryRouter } from 'react-router-dom';
import Register from './Register';

afterEach(() => {
    cleanup(); 
}); 

describe(Register, () => {
    test("tests if form elements' attributes are valid", () => {
        const { getByPlaceholderText } = render(
            <MemoryRouter>
                <Register />
            </MemoryRouter>
        );  
        
        const inputName = getByPlaceholderText("Name");
        const inputEmail = getByPlaceholderText("Email"); 
        const inputPass = getByPlaceholderText("Password"); 
        
        expect(inputName).toBeInTheDocument(); 
        expect(inputEmail).toBeInTheDocument(); 
        expect(inputPass).toBeInTheDocument(); 

        expect(inputName.className).toEqual("InputR"); 
        expect(inputEmail.className).toEqual("InputR");    
        expect(inputPass.className).toEqual("InputR");          

        expect(inputName.type).toEqual("text"); 
        expect(inputEmail.type).toEqual("email"); 
        expect(inputPass.type).toEqual("password"); 
    });

    test("tests if the inputs changes the information properly", () => {
        const { getByPlaceholderText, getAllByRole } = render(
            <MemoryRouter>
                <Register />
            </MemoryRouter>
        );  
        
        const inputName = getByPlaceholderText("Name");
        const inputEmail = getByPlaceholderText("Email"); 
        const inputPass = getByPlaceholderText("Password"); 
    
        fireEvent.change(inputName, { target: { value: "Bob" }}); 
        expect(inputName.value).toEqual("Bob"); 

        fireEvent.change(inputEmail, { target: { value: "Bob@gmail.com"}});
        expect(inputEmail.value).toEqual("Bob@gmail.com"); 

        fireEvent.change(inputPass, { target: { value: "bobpass" }}); 
        expect(inputPass.value).toEqual("bobpass"); 
    });
}); 
