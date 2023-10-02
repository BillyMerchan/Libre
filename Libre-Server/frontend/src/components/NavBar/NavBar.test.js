import { cleanup, render } from '@testing-library/react'; 
import NavBar from "./Navbar";
import { MemoryRouter } from 'react-router-dom';

afterEach(() => {
    cleanup(); 
})

describe(NavBar, () => {
    it("should test for navbar text content", () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>         
        ); 

        const element = getByTestId('navbar');
        expect(element).toBeInTheDocument(); 
        expect(element.textContent).toEqual("DemoMapFAQSign In"); 
    }); 

    it("should test if it contains the image", () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <NavBar /> 
            </MemoryRouter>
        ); 

        const element = getByTestId('navbarLogo');
        expect(element).toBeInTheDocument(); 
        expect(element).toContainHTML('<img src="new_logo.svg" />');
    }); 
});