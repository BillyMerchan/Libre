import { getByTestId, render, cleanup } from "@testing-library/react"; 
import Home from "./home";
import { MemoryRouter } from "react-router-dom";

afterEach(() => {
    cleanup(); 
});

describe(Home, () => {
    it("should display a welcoming text", () => {
    //     const { getByTestId } = render(
    //         <MemoryRouter> 
    //             <Home />
    //         </MemoryRouter>
    //     ); 

    //     const element = getByTestId('firstHeading');  
    //     expect(element).toBeInTheDocument(); 
    //     expect(element.textContent).toEqual("Welcome to Libre"); 
    // });

    // it("should contain text about Libre", () => {
    //     const { getByTestId } = render (
    //         <MemoryRouter>
    //             <Home /> 
    //         </MemoryRouter>
    //     );

    //     const element = getByTestId('text-overlay');
    //     expect(element).toBeInTheDocument(); 
    //     expect(element.textContent).toEqual("Secure a study room at RPI Folsom Library" + 
    //     " Libre is a platform allowing students to reserve individual study rooms in" + 
    //     " university libraries. This project was thought of as a solution to combat the" + 
    //     " hassle students face when trying to find an open study room at RPI. Students" + 
    //     " have the ability to view which rooms are empty via a map, coloring in the occupied" + 
    //     " rooms while lighting up the empty rooms.");

    });   

}); 