import {
    Container,
    TextAreaWrapper,
    TextArea,
    BtnWrapper,
    BeautifyBtn
} from './RequestBody.styled'

const RequestBody = ({ data, setData }) => {

    const beautifyJson = () => {
        try {
            var json = JSON.parse(data);
            if (typeof json === 'object') {
                // setData(JSON.stringify(data, undefined, 4));

                setData(data.map(e => JSON.stringify(e, undefined, 4).replace(/{|}/g, '')).join(',\n'))
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <Container>
            <BtnWrapper>
                <BeautifyBtn type='button' onClick={beautifyJson}>
                    Beautify
                </BeautifyBtn>
            </BtnWrapper>
            <TextAreaWrapper>
                <TextArea value={data} onChange={(e) => setData(e.target.value)} />
            </TextAreaWrapper>
        </Container>
    )
}

export default RequestBody