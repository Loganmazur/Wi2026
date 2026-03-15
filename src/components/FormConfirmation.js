
function FormConfirmation({ formData }) {
  return (
    <div style={{
      backgroundColor: '#f9f9f9',
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '30px',
      marginTop: '30px'
    }}>
      <h2>Thank You, {formData.name}!</h2>
      <p>Your message has been received. Here is a summary of what you submitted:</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li><strong>Name:</strong> {formData.name}</li>
        <li><strong>Email:</strong> {formData.email}</li>
        <li><strong>Phone:</strong> {formData.phone || 'Not provided'}</li>
        <li><strong>Country:</strong> {formData.country}</li>
        <li><strong>Topic:</strong> {formData.topic}</li>
        <li><strong>Message:</strong> {formData.message}</li>
      </ul>
    </div>
  );
}


export default FormConfirmation;