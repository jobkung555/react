import styled from "styled-components";
import img from '../Assets/images/AdobeStock_354035582.png'

const Box = styled.div`
    height: 80px;
    display: flex;
    align-items: end;
    overflow: hidden;
    margin-top: -30px;
    margin-bottom: 5px;
`

const Btn = styled.button`
    border: 0;
    width: 100px;
    height: 50px;
    background: #890023;
    color: #fff;
    position: relative;
    border-radius: 10px;
    cursor: pointer;

    &:hover > span{
        transform: translate(100%,-50%);
    }
    &:hover > div{
        top: -50%;
        bottom: 0;
    }
`

const BtnText = styled.span`
    position: absolute;
    transform: translate(-50%,-50%);
    transition: 0.3s all ease-in-out;
`

const BtnImg = styled.div`
    background-image: url(${img});
    width: 75px;
    height: 75px;
    background-size: cover;
    background-repeat: no-repeat;
    transition: 0.3s all ease-in-out;
    position: absolute;
    top: 100%;
    left: -10px;
`;

export const Btnanimation = () => {
    return (
        <>
        <Box>
            <Btn>
                <BtnText>
                    test
                </BtnText>
                <BtnImg/>
            </Btn>
        </Box>
        </>
    )
}