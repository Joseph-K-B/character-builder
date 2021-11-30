import { render, screen } from "@testing-library/react"
import Picker from "./Picker"

it('should render picker component', () => {
    const pres = render(<Picker />);
    const selectHead = screen.getByLabelText(/Head/);
    expect(selectHead).toBeInTheDocument();
    const selectTorso = screen.getByLabelText(/Torso/);
    expect(selectTorso).toBeInTheDocument();
    const selectBottom = screen.getByLabelText(/Bottom/);
    expect(selectBottom).toBeInTheDocument();
    expect(pres).toMatchSnapshot();
})