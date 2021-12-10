import { render, screen } from "@testing-library/react"
import Picker from "./Picker"

it('should render picker component', () => {
    const {container} = render(<Picker />);
    const selectHead = screen.getByLabelText(/Head/);
    const selectTorso = screen.getByLabelText(/Torso/);
    const selectBottom = screen.getByLabelText(/Bottom/);

    expect(selectHead).toBeInTheDocument();
    expect(selectTorso).toBeInTheDocument();
    expect(selectBottom).toBeInTheDocument();
    expect(container).toMatchSnapshot();
});