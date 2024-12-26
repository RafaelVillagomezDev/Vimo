import styled from 'styled-components';
import { devices } from '../../../styles/mixin_styledComponent';

export const PostMain = styled.div`

    width: 100%;
    padding: 2rem;
    @media only screen and (${devices.sm}) {
        padding: 3rem;
    }
`;

export const PostSubtitle = styled.h2`
    font-family: 'Rokkitt', serif;
    font-size: 10vw;
    font-weight: 500;
    color: white;
    padding-bottom: 2rem;
    text-align: center;
    @media only screen and (${devices.sm}) {
        text-align: start;
    }
`;

export const PostContainer = styled.div`
    width: 100%;
    height: 100%;
    max-height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-bottom: 3rem;
    @media only screen and (${devices.sm}) {
        flex-direction: row;
    }
`;

export const PostContainerRight=styled(PostContainer)`
    flex-direction: column;
    @media only screen and (${devices.sm}) {
        flex-direction: row-reverse;
    }
`

export const PostImg = styled.img`
    height: 100%;
    flex-shrink: 0;
    border-radius: 15px;
`;

export const PostBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    max-height: 300px;
    padding-right: 10px;
    color: bla;
    scrollbar-color: red transparent;
    scrollbar-width: thin;
    @media only screen and (${devices.sm}) {
        color: white;
    }
`;

export const PostTitle = styled.h2`
    color: #fff;
    font-family: 'Roboto';
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    align-items: center;
    text-align: center;
    padding: 1rem;
`;

export const PostText = styled.p`
    color: #fff;
    word-wrap: break-word;
    font-family: 'Roboto';
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    padding: 1rem;
`;
