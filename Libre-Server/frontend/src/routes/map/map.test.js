import { render, cleanup } from "@testing-library/react";
import Map from "./map";
import { MemoryRouter } from "react-router-dom";

afterEach(() => {
    cleanup(); 
});

describe(Map, () => {
    it("should contain be in the document", () => {
    //     const { getByTestId } = render(
    //         <MemoryRouter>
    //             <Map />
    //         </MemoryRouter> 
    //     );
    
    //     const element = getByTestId('map'); 
    //     expect(element).toBeInTheDocument(); 
    });
}); 