import styled from "styled-components"

export const Styles = styled.div`
    padding-top: 17%;
    padding-left:  1.0875rem;
    padding-right:  1.0875rem;

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
        transition: all 0.15s linear;
    }

    .img-wrapper img {
        border-radius: 50%;
    }

    .img-wrapper:hover {
        transform: scale(1.1);
        transition: all 0.15s linear;
    }

    .description {
        text-align: center;
        max-width: 33rem;
    }

    .alias {
        font-weight: 300;
    }

    .webmakers-id {
        text-decoration: none;
        color: #5383d3!important;
    }

    .universitas-indonesia {
        text-decoration: none;
        color: #F4BC1C!important;
    }

    .accounts a:first-child svg {
        margin: -3.33px;
    }

    .accounts svg:hover, .accounts svg:focus {
        opacity: 0.7;
    }

    .accounts a {
        margin-right: 5%;
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