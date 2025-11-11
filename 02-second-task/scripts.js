const formDataContainer = document.querySelector('.form-container')
const validationRules = {
  name: (value) => /^[A-Za-z\s'-]{4,}$/.test(value),
  surname: (value) => /^[A-Za-z\s'-]{4,}$/.test(value),
  phone: (value) => {
    const hasPlus = value.includes('+');
    const digitsOnly = value.replace(/\D/g, '');
    if (hasPlus) {
      return digitsOnly.length >= 10 && digitsOnly.length <= 15;
    } else {
      return digitsOnly.length === 10;
    }
  },
  email: (value) => /^[^\s@]+@gmail\.com$/.test(value),
  password: (value) => /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d]).+$/.test(value),
  repeatpassword: (value) => {
    const passwordInput = document.querySelector('[name="password"]');
    if (!passwordInput) return false;
    const passwordValue = passwordInput.value;
    const isPasswordValid = validationRules.password(passwordValue);
    return (passwordInput && value === passwordInput.value) && value !== '' && isPasswordValid;
  }
};

formDataContainer.addEventListener('submit', function(event) {
  event.preventDefault();

  let isValid = true;
  
  formData.forEach(item => {
      const fieldName = item.title.toLowerCase().replace(' ', '');
      const input = formDataContainer.querySelector(`[name="${fieldName}"]`);
      const errorSpan = input.nextElementSibling;

      const title = document.querySelector(`[data-field="${fieldName}"]`);

      const validator = validationRules[fieldName];

      const isFieldValid = validator(input.value);
      if (!isFieldValid) {
        errorSpan.style.display = 'block';
        isValid = false;
        input.style.borderColor = 'rgba(255, 100, 100, 1)';
        title.style.color = 'rgba(255, 100, 100, 1)';

      } else {
        errorSpan.style.display = 'none';
        input.style.borderColor = '';
        title.style.color = '';
      }
  });

  if (isValid) {

      document.querySelector('.block-form').style.display = 'none';
      
      const successMessage = document.getElementById('successMessage');
      successMessage.style.display = 'block';
  }
});
