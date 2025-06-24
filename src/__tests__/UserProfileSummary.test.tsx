import { render, screen } from "@testing-library/react";
import { UserProfileCard } from "@/components/profile/UserProfileInfo";

const mockUser = {
    name: "Ahmed Gamal",
    level: 7,
    xp: 520,
    avatar: "/avatar.jpg",
};

describe("UserProfileSummary", () => {
    it("renders user info", () => {
        render(<UserProfileCard user={mockUser} />);
        expect(screen.getByText("Ahmed Gamal")).toBeInTheDocument();
        expect(screen.getByText("Level 7")).toBeInTheDocument();
    });
});