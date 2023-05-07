import styled from "styled-components";

export const Container = styled.div`
    p {
        font-size: 1.8rem;
        font-weight: 400;
        line-height: 140%;
        text-align: center;
    }

    .ingredients {
        padding: 1rem 3rem;
        border-radius: 1rem;
        background-color: ${({ theme }) => theme.COLORS.BLUE_300};
    }
`;