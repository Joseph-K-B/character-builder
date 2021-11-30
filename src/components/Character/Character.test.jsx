import { render, screen } from "@testing-library/react";
import Character from "./Character";

it('should render all elements on character page', () => {
    const pres = render(<Character />);
    const headImg = screen.getByTestId(/head/);
    const torsoImg = screen.getByTestId(/torso/);
    const bottomImg = screen.getByTestId(/bottom/);
    expect(headImg).toBeInTheDocument();
    expect(torsoImg).toBeInTheDocument();
    expect(bottomImg).toBeInTheDocument();
    expect (pres).toMatchSnapshot();
});
