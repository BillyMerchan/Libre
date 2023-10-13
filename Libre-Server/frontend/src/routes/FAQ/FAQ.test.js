import { render, cleanup, fireEvent } from '@testing-library/react';
import FAQ from './FAQ';
import { MemoryRouter } from 'react-router-dom';

afterEach(() => {
    cleanup(); 
})

describe(FAQ, () => {
    test("should test if the onClick event updates the accordian state variable", () => {
        const { getByText, getAllByTestId } = render( 
            <MemoryRouter>
                <FAQ />
            </MemoryRouter>
        ); 

        const questionOne = getByText("Who created Libre?"); 
        const questionTwo = getByText("How are rooms detected?");
        const questionThree = getByText("How often does the map update?");
        const answers = getAllByTestId("answer");

        expect(questionOne).toBeInTheDocument(); 
        expect(questionTwo).toBeInTheDocument(); 
        expect(questionThree).toBeInTheDocument(); 

        fireEvent.click(questionOne); 
        expect(questionOne.className).toEqual("accordion input active");
        fireEvent.click(questionOne);
        expect(questionOne.className).toEqual("accordion input ");

        fireEvent.click(questionTwo); 
        expect(questionTwo.className).toEqual("accordion input active");
        fireEvent.click(questionTwo);
        expect(questionTwo.className).toEqual("accordion input ");

        fireEvent.click(questionThree);
        expect(questionThree.className).toEqual("accordion input active");
        fireEvent.click(questionThree); 
        expect(questionThree.className).toEqual("accordion input ");
        
        fireEvent.click(questionOne);
        expect(questionOne.className).toEqual("accordion input active"); 
        fireEvent.click(questionThree);
        expect(questionOne.className).toEqual("accordion input ");
        expect(questionThree.className).toEqual("accordion input active");

        fireEvent.click(questionOne); 
        expect(answers[0].className).toEqual("panel show");
        fireEvent.click(questionOne);
        expect(answers[0].className).toEqual("panel ");

        fireEvent.click(questionTwo);
        expect(answers[1].className).toEqual("panel show");
        fireEvent.click(questionTwo);
        expect(answers[1].className).toEqual("panel ");

        fireEvent.click(questionThree);
        expect(answers[2].className).toEqual("panel show");
        fireEvent.click(questionThree);
        expect(answers[2].className).toEqual("panel "); 

        fireEvent.click(questionOne);  
        expect(answers[0].className).toEqual("panel show"); 
        fireEvent.click(questionTwo);
        expect(answers[1].className).toEqual("panel show");
        expect(answers[0].className).toEqual("panel "); 
    }); 
}); 