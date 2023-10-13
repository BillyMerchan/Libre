import { cleanup, render, fireEvent } from "@testing-library/react"; 
import { MemoryRouter } from "react-router-dom";
import SignIn from "./SignIn";

afterEach(() => {
    cleanup(); 
}); 

describe(SignIn, () => {
    test("for the attributes of the input elements", () => {
        const { getByPlaceholderText } = render(
            <MemoryRouter>
                <SignIn />
            </MemoryRouter>
        );

        const inputEmail = getByPlaceholderText('Email'); 
        const inputPass = getByPlaceholderText('Password');

        expect(inputEmail).toBeInTheDocument(); 
        expect(inputPass).toBeInTheDocument(); 

        expect(inputEmail.type).toEqual("email");
        expect(inputPass.type).toEqual("password"); 
    });

    test("for the value if the a user enters information into the form", () => {
        const { getByPlaceholderText } = render(
            <MemoryRouter>
                <SignIn />
            </MemoryRouter>
        );

        const inputEmail = getByPlaceholderText("Email"); 
        const inputPass = getByPlaceholderText("Password"); 

        fireEvent.change(inputEmail, { target: { value: "bob@gmail.com" }}); 
        expect(inputEmail.value).toEqual("bob@gmail.com"); 

        fireEvent.change(inputPass, { target: { value: "bobpass" }});
        expect(inputPass.value).toEqual("bobpass");
    }); 
}); 