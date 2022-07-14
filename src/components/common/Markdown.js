import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { withThemeContext } from '../../context/ThemeContext'
import { toIdName } from '../../util/StringUtil'
import Link from './Link'
import { Code, H1, H2, H3, P } from './Text'

const Li = (props) =>
    <li {...props} children="">
        <P style={{ marginBottom: 4, marginTop: 4 }}>
            {props.children}
        </P>
    </li>

const ImgContainer = styled.div`
    margin-left: 0;
    margin-right: 0;
    margin-top: 16px;

    * {
        display: flex;
        flex-direction: column; 
        align-items: center;
        max-width: 100%;
        max-height: 33vh;
        // TODO: full width on mobile
    }
`
const ImgCaption = styled.div`
    font-style: italic;
    opacity: 0.8
`
const Img = (props) => <ImgContainer className='img'>
    <a href={props.src} target="_blank"><img {...props} /></a>
    <ImgCaption>{props.alt}</ImgCaption>
</ImgContainer>

const HeaderWrapper = styled(Code)`
    &::before {
        content: "§";
        display: inline-block;
        position: absolute;
        left: -8px;
        transform: translateY(-2px);
        opacity: 0.3;
        font-weight: normal;
        color: ${({ themeContext }) => themeContext.secondary};
        transition: 0.2s;
    }
    &:hover::before {
        opacity: 1;
    }

    @media (hover: none) {
        &::before {
            content: "" 
        }
        &::before {
            display: inline-block;
            position: static;
            content: "§";
            transform: translateY(-2px);
            margin-right: 8px;
            opacity: 0.5;
            font-weight: normal;
            color: ${({ themeContext }) => themeContext.secondary};
        }
    }
`

const HeaderItem = withThemeContext(props =>
    <a href={'#' + props.id} themeContext={props.themeContext}>
        <HeaderWrapper {...props}>
            {props.children}
        </HeaderWrapper>
    </a>)

const Markdown = props => <ReactMarkdown components={{
    a: ({ ...props }) => <Link to={props.href} {...props} highlight underline />,
    p: ({ ...props }) => <P {...props} />,
    h1: ({ ...props }) => <H1><HeaderItem {...props} id={toIdName(props.children)} /></H1>,
    h2: ({ ...props }) => <H2><HeaderItem {...props} id={toIdName(props.children)} /></H2>,
    h3: ({ ...props }) => <H3><HeaderItem {...props} id={toIdName(props.children)} /></H3>,
    li: ({ ...props }) => <Li {...props} />,
    img: ({ ...props }) => <Img {...props} />,
    ul: ({ ...props }) => <ul {...props} style={{ marginTop: 0 }} />
}} {...props} />

export default Markdown