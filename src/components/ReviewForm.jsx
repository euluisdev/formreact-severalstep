import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill
} from "react-icons/bs";

import './ReviewForm.css';


const ReviewForm = ({ data, updateFieldHandler }) => {
    return (
        <div className="review-form">
            <div className="form-control score-container">
                <label className="radio-container">
                    <input 
                        type="radio"
                        value='unsatisfied'
                        name="review"
                        required 
                        checked={data.review === 'unsatisfied'} 
                        onChange={(e) => updateFieldHandler('review', e.target.value)} 
                    />
                    <BsFillEmojiFrownFill />
                    <p>Insatisfeito</p>
                </label>
                <label className="radio-container">
                    <input 
                        type="radio" 
                        value='neutral' 
                        name="review" 
                        required 
                        checked={data.review === 'neutral'} 
                        onChange={(e) => updateFieldHandler('review', e.target.value)} 
                        />
                    <BsFillEmojiNeutralFill />
                    <p>Poderia ser melhor</p>
                </label>
                <label className="radio-container">
                    <input 
                        type="radio" 
                        value='satisfied' 
                        name="review" 
                        required 
                        checked={data.review === 'satisfield'} 
                        onChange={(e) => updateFieldHandler('satisfield', e.target.value)} 
                        />
                    <BsFillEmojiSmileFill />
                    <p>Satisfeito</p>
                </label>
                <label className="radio-container">
                    <input 
                        type="radio" 
                        value='very_satisfied' 
                        name="review" 
                        required 
                        checked={data.review === 'very_satisfied'} 
                        onChange={(e) => updateFieldHandler('review', e.target.value)} 
                        />
                    <BsFillEmojiHeartEyesFill />
                    <p>Muito ssatisfeito</p>
                </label>
            </div>
            <div className="form-control">
                <label htmlFor="comment"><p>Comentário:</p></label>
                <textarea name="comment" id="comment" placeholder="Conte como foi sua expriência..." required>
                </textarea>
            </div>
        </div>
    )
}

export default ReviewForm;