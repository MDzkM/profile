import styled from "styled-components"

export const Styles = styled.div`
    padding-top: 17%;

    .profile-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .img-wrapper {
        width: 30%;
        height: 30%;
        margin: 0 0 5%;
    }

    .img-wrapper img {
        border-radius: 50%;
    }

    .description {
        text-align: center;
        max-width: 33rem;
    }

    .alias {
        font-weight: 300;
    }

    .universitas-indonesia {
        text-decoration: none;
        color: #F4BC1C!important;
    }

    .accounts a:first-child svg {
        margin: -3.33px;
    }

    .accounts svg {
        opacity: 0.7
    }

    .accounts svg:hover, .accounts svg:focus {
        opacity: 1
    }

    @media only screen and (min-width: 992px) {
        padding-top: 17%;

        .profile-container {
            flex-direction: row;
        }

        .img-wrapper {
            width: 25%;
            height: 25%;
            margin: 5% 5% 5% 0;
        }

        .description {
            text-align: left;
        }
    }
`