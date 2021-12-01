import { render, screen } from "@testing-library/react";
import BuilderContainer from "./BuilderContainer";

it('should render container with all presentational components', () => {
    const {container} = render(<BuilderContainer catchPhraseArr={['hello', 'goodbye']}/>);

    const selectHead = screen.getByLabelText(/Head/);
    const selectTorso = screen.getByLabelText(/Torso/);
    const selectBottom = screen.getByLabelText(/Bottom/);
    const headImg = screen.getByLabelText(/head/);
    const torsoImg = screen.getByLabelText(/torso/);
    const bottomImg = screen.getByLabelText(/bottom/);
    const input = screen.getByLabelText('catchphrase-input');
    const button = screen.getByRole('button');
    const changeCount = screen.getByLabelText('change-count')
    const list = screen.getByLabelText('catch-list');

    expect(headImg).toBeInTheDocument();
    expect(torsoImg).toBeInTheDocument();
    expect(bottomImg).toBeInTheDocument();
    expect(selectHead).toBeInTheDocument();
    expect(selectTorso).toBeInTheDocument();
    expect(selectBottom).toBeInTheDocument();
    expect(changeCount).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(container).toMatchSnapshot();
})