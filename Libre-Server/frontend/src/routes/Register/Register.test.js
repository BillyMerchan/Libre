import { render, cleanup } from '@testing-library/react'; 
import { MemoryRouter } from 'react-router-dom';
import Register from './Register';

afterEach(() => {
    cleanup(); 
})

describe(Register, () => {
    test("for the text", () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <Register /> 
            </MemoryRouter>
        );  

        const element = getByTestId("register"); 
        expect(element).toBeInTheDocument(); 
        expect(element.textContent).toEqual("RegisterAlready have an account?"); 
    }); 

    test("testing the submit button", () = {
        

    });
}); 
