import { 
    BsFillEmojiHeartEyesFill, 
    BsFillEmojiSmileFill, 
    BsFillEmojiNeutralFill, 
    BsFillEmojiFrownFill
} from "react-icons/bs";


const ReviewForm = () => {
    return (
        <div className="review-form">
            <div className="form-control score-container">
            <label className="radio-container">
                    <input type="radio" value='unsatisfied' name="review" required />
                    <BsFillEmojiFrownFill />
                    <p>Insatisfeito</p>
                </label>
                <label className="radio-container">
                    <input type="radio" value='meutral' name="review" required />
                    <BsFillEmojiNeutralFill />
                    <p>Poderia ser melhor</p>
                </label>
                <label className="radio-container">
                    <input type="radio" value='satisfied' name="review" required />
                    <BsFillEmojiSmileFill />
                    <p>Satisfeito</p>
                </label>
                <label className="radio-container">
                    <input type="radio" value='very-satisfied' name="review" required checked />
                    <BsFillEmojiHeartEyesFill />
                    <p>Muito ssatisfeito</p>
                </label>
            </div>
            <div className="form-control">
                <label htmlFor="comment"><p>Comentário:</p></label>
                <textarea name="comment" id="comment" placeholder="Conte como foi sua expriência...">
                </textarea>
            </div>
        </div>
    )
}

export default ReviewForm;