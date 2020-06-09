import styled from "styled-components"

export const Styles = styled.div`
    padding-top: 30%;

    .title {
        text-align: center;
        font-weight: 700;
    }

    .background-card {
        padding: 5%;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    }

    .project-card {
        margin: 3%;
    }

    .project-card h4 {
        font-weight: 700;
    }
    
    .project-card h5 {
        font-weight: 300;
    }

    .img-wrapper {
        margin: 3% 0;
        transition: all 0.15s linear;
    }

    .img-wrapper:hover {
        transform: scale(1.015);
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
        transition: all 0.15s linear;
    }

    .description-link {
        color: #007bff;
    }

    .project-row {
        display: flex;
        flex-direction: row;
    }

    .read-more {
        color: #007bff!important;
    }

    @media only screen and (min-width: 294px) and (max-width: 321px) {
        padding-top: 10%;
    }

    @media only screen and (min-width: 322px) and (max-width: 409px) {
        padding-top: 35%;
    }

    @media only screen and (min-width: 410px) and (max-width: 767px) {
        padding-top: 53%;
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
        padding-top: 40%;
    }

    @media only screen and (max-width: 991px) {
        .project-row {
            flex-direction: column;
        }

        .project-card {
            border-bottom: 5px dotted;
            padding-bottom: 7%;
        }

        .project-row:last-child .project-card:last-child {
            border-bottom: none;
            padding-bottom: none;
        }
    }
`