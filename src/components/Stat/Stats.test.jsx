import { render, screen } from "@testing-library/react";
import Stats from "./Stats";

it('should render input and button for stats', () => {
    const pres = render(<Stats />);
    const input = screen.getByTestId('catchphrase-input');
    const button = screen.getByRole('button');
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(pres).toMatchSnapshot();
});