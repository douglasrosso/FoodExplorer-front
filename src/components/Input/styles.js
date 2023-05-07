import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;

    width: 100%;
    border-radius: 5px;

    color: ${({ theme }) => theme.COLORS.GRAY_200};

    input {
        width: 100%;
        height: 4.8rem;

        padding: 1.6rem 1.4rem;
        border: none;
        border-radius: 0.5rem;

        color: ${({ theme }) => theme.COLORS.GRAY_200};
        background: ${({ theme }) => theme.COLORS.BLUE_600};
        opacity: 0.8;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_200};
        }
    }
    
    > svg {
        margin-left: 1.4rem;
    }
`;
