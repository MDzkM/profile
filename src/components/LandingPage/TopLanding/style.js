import styled from "styled-components"

export const Styles = styled.div`
    padding-top: 13%;
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
        color: #5383d3!important;
    }

    .universitas-indonesia {
        color: #F4BC1C!important;
    }

    .find-out {
        color: #007bff!important;
        text-decoration: none;
        transition: all 0.25s linear;
    }

    .find-out code {
        font-family: "Open Sans", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    .accounts {
        margin-top: 5%;
        margin-left: 4.5%;
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
            width: 30%;
            height: 30%;
            margin: 5% 5% 5% 0;
        }

        .description {
            text-align: left;
        }

        .accounts {
            margin-top: 3%;
            margin-left: 0;
        }
    }

    @media only screen and (min-width: 1024px) and (min-height: 1366px) {
        .accounts {
            margin-top: 4%;
            margin-left: 0;
        }
    }

    @media only screen and (min-width: 768px) and (min-height: 1024px) {
        .accounts {
            margin-top: 3%;
        }
    }
`