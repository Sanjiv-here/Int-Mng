import React from 'react';

function SubmitButton(props) {

    const handleSubmit = async () => {
        try {
          const response = await axios.post('http://localhost:5000/api/submit-organization', {
            // Add your organization data here
          });
    
          if (response.status === 200) {
            console.log('Organization data submitted successfully');
            props.onClick();
          } else {
            console.error('Error submitting organization data');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };


  return (
    <div className=" self-center p-2 ">
      <button
        className="w-full bg-white hover:bg-gray-100 text-sky-600 font-bold py-2 px-4 rounded"
        type="submit"
        onClick={props.onClick}
      >
        {props.label}
      </button>
    </div>
  );
}

export default SubmitButton;
