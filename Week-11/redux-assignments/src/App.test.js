import { render, screen ,fireEvent} from '@testing-library/react';
import App from './App';

test('Main switching between assignments button should be rendered',()=>{
    render(<App/>)
    const buttonEle = screen.getByRole('button',{name:/switch to/i})
    expect(buttonEle).toBeInTheDocument()
})

test('Room component heading should be rendered',()=>{
    render(<App/>)
    const headingEle = screen.getByText(/The room is/i) 
    expect(headingEle).toBeInTheDocument();
})

test('Room component flip button should be rendered',()=>{
    render(<App/>)
    const buttonEle = screen.getByRole('button',{name:/flip/i}) 
    expect(buttonEle).toBeInTheDocument();
})

test('Steps component heading should be rendered on click of switch button',()=>{
    render(<App/>)

    const buttonEle = screen.getByRole('button',{name:/switch to/i}) 
    fireEvent.click(buttonEle)

    const headingEle = screen.getByText(/you've walked/i) 
    expect(headingEle).toBeInTheDocument();

})

test('Steps component Add steps button should be rendered on click of switch button',()=>{
    render(<App/>)

    const buttonEle = screen.getByRole('button',{name:/switch to/i}) 
    fireEvent.click(buttonEle)

    const addStepsButtonEle = screen.getByRole('button',{name:/add/i})
    expect(addStepsButtonEle).toBeInTheDocument()

})
test('Steps component Reset steps button should be rendered on click of switch button',()=>{
    render(<App/>)

    const buttonEle = screen.getByRole('button',{name:/switch to/i}) 
    fireEvent.click(buttonEle)

    const resetStepsButton = screen.getByRole('button',{name:/reset/i})
    expect(resetStepsButton).toBeInTheDocument()

})