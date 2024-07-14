import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";

jest.mock('next/link', () => {
    // eslint-disable-next-line react/display-name
    return ({ children, href }: { children: React.ReactNode; href: string }) => (
        <a href={href}>{children}</a>
    );
})
describe("Header component", () => {
    it("should render correctly", () => {
        render(<Header isOpen={true} setIsOpen={() => { }} />)
        expect(screen.getByTestId('header')).toBeInTheDocument();
        expect(screen.getByText('Test app')).toBeInTheDocument();
        expect(screen.getByRole('button')).toHaveTextContent('\u{0078}'); // hamburger icon
    })

    it("toggles menu open state when button is clicked", () => {
        const mockSetIsOpen = jest.fn()
        render(<Header isOpen={true} setIsOpen={mockSetIsOpen} />)

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(mockSetIsOpen).toHaveBeenCalledWith(false)

    })

    it("displays close icon when menu is open", () => {
        render(<Header isOpen={true} setIsOpen={() => { }} />)
        expect(screen.getByRole('button')).toHaveTextContent('\u{0078}');
    })

    it('links to home page', () => {
        const mockSetIsOpen = jest.fn();
        render(<Header isOpen={false} setIsOpen={mockSetIsOpen} />);

        const link = screen.getByRole('link', { name: 'Test app' });
        expect(link).toHaveAttribute('href', '/');
    });


})