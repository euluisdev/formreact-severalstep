import { 
    BsFillEmojiHeartEyesFill, 
    BsFillEmojiSmileFill, 
    BsFillEmojiNeutralFill, 
    BsFillEmojiFrownFill
} from "react-icons/bs";

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
            <h2>Falta pouco...</h2>
            <p>
                A sua avaliação é muito importante, e com ela, você receberá um cupom de desconto de 15%, para sua próxima compra.
            </p>
            <p>
                Para concluir sua avaliação, basta clicar no botão Enviar, que se encontra abaixo.
            </p>
            <h3>Um breve resumo da sua avaliação {data.name}:</h3>
            <p className="review-data">
                <span>Satisfação com o produto:</span>
                <span className="show-emoji">{emojiDataHandler[data.review]}</span>
            </p>
            <p className="review-data">
                <span>Comentário:</span>
                {data.comment}
            </p>
        </div>
    )
}

export default Thanks;