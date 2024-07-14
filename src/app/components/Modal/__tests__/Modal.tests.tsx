import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Modal from "../Modal";
import "@testing-library/jest-dom";

jest.mock("../../AddUser/AddUserForm", () => ({ onSubmit, onClose }) => {
    return <div data-testid="mock-add-user">
        <button data-testid='mock-close-button' onClick={onClose}>Close</button>
        <button data-testid='mock-submit-button' onClick={onSubmit}>Submit</button>
    </div>;
});

jest.mock("@/app/hooks/useOutsideClick", () => {
    return jest.fn()
})

describe("Modal component", () => {
    const mockOnClose = jest.fn();
    const mockOnSubmit = jest.fn();

    beforeEach(() => {
        render(
            <Modal isOpen={true} onClose={mockOnClose} onSubmit={mockOnSubmit} />
        );
        jest.clearAllMocks();
    });
    it("should render component", () => {
        expect(document.querySelector("#add-user-modal")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "\u0078" })).toBeInTheDocument();
        expect(screen.getByText("사용자 추가")).toBeInTheDocument();
        expect(screen.getByTestId("mock-add-user")).toBeInTheDocument();
    });

    it("should call onClose function", () => {
        const button = screen.getByTestId('mock-close-button');
        fireEvent.click(button);
        expect(mockOnClose).toHaveBeenCalledTimes(1)
    });

    it('passes onClose and onSubmit to AddUserForm', () => {
        const closeButton = screen.getByRole('button', { name: 'Close' });
        const submitButton = screen.getByRole('button', { name: 'Submit' });

        fireEvent.click(closeButton);
        expect(mockOnClose).toHaveBeenCalledTimes(1);

        fireEvent.click(submitButton);
        expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    });
});
