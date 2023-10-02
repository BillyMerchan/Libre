import { render, cleanup } from '@testing-library/react';
import FAQ from './FAQ';
import { MemoryRouter } from 'react-router-dom';

afterEach(() => {
    cleanup(); 
})

describe(FAQ, () => {
    it("should contain the following text", () => {
        const { getByTestId } = render(
            <MemoryRouter>
                <FAQ />
            </MemoryRouter>
        ); 

        const element = getByTestId("FAQ"); 
        expect(element).toBeInTheDocument(); 
        expect(element.textContent).toEqual("Frequently Asked Questions");

    }); 
}); 