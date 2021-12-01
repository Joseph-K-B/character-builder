import { render, screen } from "@testing-library/react";
import StatList from "./StatsList";


it('should render unordered list of catchphrases', () => {
    const {container} = render(<StatList catchPhraseArr={['hello', 'goodbye']}/>);
    const changeCount = screen.getByLabelText('change-count')
    const list = screen.getByLabelText('catch-list');
    const listItems = screen.getAllByTestId('list-items');

    expect(changeCount).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(listItems).toBeDefined();
    expect(container).toMatchSnapshot();
});