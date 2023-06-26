// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Get the waitlist form element
const waitlistForm = document.getElementById('waitlistForm');

// Listen for form submission
waitlistForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission

  // Get the email input value
  const emailInput = document.getElementById('emailInput');
  const email = emailInput.value;

  // Save the email to Firebase
  const waitlistRef = database.ref('mail/emailWaitlist');
  waitlistRef.push(email)
    .then(() => {
      // Clear the email input
      emailInput.value = '';
      alert('Thank you! You have been added to the waitlist.');
    })
    .catch((error) => {
      console.error('Error saving email:', error);
      alert('An error occurred. Please try again later.');
    });
});
