import { 
    BsFillEmojiHeartEyesFill, 
    BsFillEmojiSmileFill, 
    BsFillEmojiNeutralFill, 
    BsFillEmojiFrownFill
} from "react-icons/bs";

import { BiHourglass } from "react-icons/bi";

import './Thanks.css';

const emojiDataHandler = {
    unsatisfied: <BsFillEmojiFrownFill />, 
    neutral: <BsFillEmojiNeutralFill />, 
    satisfied: <BsFillEmojiSmileFill />, 
    very_satisfied: <BsFillEmojiHeartEyesFill />
}

const Thanks = ({ data }) => {
    return (
        <div className="thanks-container">
            <h2>Falta pouco <BiHourglass /></h2>
            <p>
                A sua avaliação é muito importante, e com ela, você receberá um cupom de desconto de 15%, para sua próxima compra.
            </p>
            <p>
                Para concluir sua avaliação, basta clicar no botão Enviar, que se encontra abaixo.
            </p>
            <h3>Um resumo da sua avaliação, <span className="show-name">{data.name}</span>:</h3>
            <p className="review-data">
                <span>Satisfação com o produto:</span>
                <span className="show-emoji">{emojiDataHandler[data.review]}</span>
            </p>
            <p className="review-data">
                <span>Comentário:</span>
                <span className="show-comment"> {data.comment}</span>
            </p>
        </div>
    )
}

export default Thanks;