import { render, screen } from "@testing-library/react"
import Picker from "./Picker"

it('should render picker component', () => {
    const pres = render(<Picker />);
    const selectHead = screen.getByLabelText(/Head/);
    expect(selectHead).toBeInTheDocument();
    expect(pres).toMatchSnapshot();
})