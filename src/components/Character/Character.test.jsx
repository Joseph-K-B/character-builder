import { render, screen } from "@testing-library/react";
import Character from "./Character";

it('should render all elements on character page', () => {
    const {container} = render(<Character />);
    const headImg = screen.getByLabelText(/head/);
    const torsoImg = screen.getByLabelText(/torso/);
    const bottomImg = screen.getByLabelText(/bottom/);

    expect(headImg).toBeInTheDocument();
    expect(torsoImg).toBeInTheDocument();
    expect(bottomImg).toBeInTheDocument();
    expect (container).toMatchSnapshot();
});
