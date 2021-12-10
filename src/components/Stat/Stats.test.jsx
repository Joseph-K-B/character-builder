import { render, screen } from "@testing-library/react";
import Stats from "./Stats";

it('should render input and button for stats', () => {
    const {container} = render(<Stats />);
    const input = screen.getByLabelText('catchphrase-input');
    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(container).toMatchSnapshot();
});