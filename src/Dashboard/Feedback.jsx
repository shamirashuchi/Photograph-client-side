import React from 'react';
import Swal from 'sweetalert2';

const Feedback = () => {
    const handlefeedback = () =>{
        console.log(2);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Feedback is send`,
                    showConfirmButton: false,
                    timer: 1500
                  })
    }
    return (
        <div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-yellow-400 font-semibold text-2xl">Give feedback to Instructor</span>
                </label>
                <textarea placeholder="feedback here" className="textarea  textarea-lg w-full max-w-full bg-base-200" ></textarea>
                </div>
                <button onClick={handlefeedback} className="btn btn-warning mt-10 ml-32">Done</button>
        </div>
    );
};

export default Feedback;