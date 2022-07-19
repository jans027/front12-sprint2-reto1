import styled from "styled-components";





export const HomeStyled = styled.main`
            h3{
                width: clamp(360px, 60vw, 800px);
                margin:1em auto;
                font-size: 1.5em;
            }
            footer{
                display: flex;
                justify-content: space-between;
                padding: 1em;
                color: gray;
                font-size: 1.6em;
            }
`

export const Section1 = styled.section`
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1em .8em;
            background-color: #778da9;
            border-radius: 0 0 1.5em 1.5em;
            div{
                line-height: 1.2em;
                padding: 5em 0 0 0;
            }

`
export const Div1 = styled.div`
            font-size: 1.3em;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 5em;
`

export const Section2 = styled.section`

            margin: 0 auto;
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            width: clamp(370px, 60vw, 800px);
`
export const Card1 = styled.div`
            div{
                padding:.5em;
                line-break:.1em;
                span{
                    font-size: 1.2em;
                }
                p{
                    margin: 0;
                    font-size: .8em;
                }
            }

`

export const Section3 = styled.section`
                width: clamp(360px, 60vw, 800px);
                margin: 0 auto;
                
`
export const Card2 = styled.div`
                background-color: aliceblue;
                border: 1px solid aqua;
                border-radius: 2em;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 .5em;
                margin:.8em 0;
                img{
                    width: 3em;
                } 
                span{
                    font-size: 1.3em;
                }
                p{
                    width: 250px;
                }
                h6{
                    width: 3em;
                    font-size: 1em;
                    color: aqua;
                }
`











