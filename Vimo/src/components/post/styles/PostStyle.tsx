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
    font-family: 'Poppins', sans-serif;
    font-size: 5vw;
    font-weight: 500;
    color: black;
    padding-bottom: 2rem;
    text-align: center;
    @media only screen and (${devices.sm}) {
        text-align: start;
    }
`;

export const PostContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    padding-bottom: 3rem;
`;

export const PostFigure = styled.figure``;

export const PostFigcaption = styled.figcaption`
    color: black;
    font-family: 'fangsong';
`;

export const PostImg = styled.img`
    flex-shrink: 0;
    border-radius: 15px;
    height: 250px;
    @media only screen and (${devices.sm}) {
        border-radius: 0px;
    }
`;

export const PostTitle = styled.h2`
    color: black;
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    align-items: center;
    text-align: center;
    padding: 1rem;
`;

export const PostText = styled.p`
    color: black;
    word-wrap: break-word;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
    padding: 1rem;
    font-size: 16px;
    @media only screen and (${devices.sm}) {
        font-size: 20px;
    }
`;

export const PostBoardBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-right: 10px;
    color: black;
    @media only screen and (${devices.sm}) {
        color: black;
    }
`;

export const PostQuote = styled.q`
    font-weight: 600;
    font-style: oblique;
`;
export const PostList = styled.ul``;

export const PostListItem = styled.li``;

export const PostSpan = styled.span`
    display: inline-flex;
    column-gap: 12px;
    font-family: 'Rokkitt', serif;
    font-size: 25px;
`;
