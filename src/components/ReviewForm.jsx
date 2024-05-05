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
                    <p>Insatisfeito</p>
                </label>
            </div>
        </div>
    )
}

export default ReviewForm;