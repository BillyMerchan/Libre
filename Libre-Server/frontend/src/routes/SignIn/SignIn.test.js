import { cleanup, render } from "@testing-library/react"; 
import SignIn from "./SignIn";
import { MemoryRouter } from "react-router-dom";

afterEach(() => {
    cleanup(); 
}); 

describe(SignIn, () => {
    // eventually implement firevent to test button submit 

    it("should display Sign In", () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <SignIn />
            </MemoryRouter>
        ); 
        const element = getByTestId("login"); 
        expect(element).toBeInTheDocument(); 
        expect(element).toContainHTML(
            '<h1 data-testid="login">Log In <i class="fa fa-address-card-o"> </i> </h1>'
        );
        expect(element.textContent).toEqual("Log In   "); 
    }); 

    it("should display RCSID:", () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <SignIn />
            </MemoryRouter>
        );
        const strValue = getByTestId("rcs").textContent; 
        expect(strValue).toEqual("RCSID:");
    }); 

    it("should display Password:", () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <SignIn /> 
            </MemoryRouter>
        ); 
        const strValue = getByTestId("password").textContent; 
        expect(strValue).toEqual("Password:"); 
    }); 

    it("should display Forgot your Password?", () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <SignIn /> 
            </MemoryRouter>
        ); 
        const strValue = getByTestId("forgotPassword").textContent; 
        expect(strValue).toEqual("Forgot your Password?"); 
    }); 

    it("should display Submit", () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <SignIn /> 
            </MemoryRouter>
        );
        const strValue = getByTestId("submit").textContent; 
        expect(strValue).toEqual("Submit"); 
    }); 
}); 