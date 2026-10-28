/* ==========================================================================
   İletişim formu doğrulaması
   Sunucu bağlantısı yok: geçerli gönderimde sadece başarı mesajı gösterilir.
   ========================================================================== */

const form = document.getElementById("contact-form");
const successMessage = document.getElementById("form-success");

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Her alan için kural: değeri alır, hata varsa mesaj, yoksa boş metin döner
const validators = {
  name: (value) => (value ? "" : "Lütfen adınızı yazın."),
  email: (value) => {
    if (!value) return "Lütfen e-posta adresinizi yazın.";
    if (!EMAIL_PATTERN.test(value)) return "Lütfen geçerli bir e-posta adresi girin (örn. ad@site.com).";
    return "";
  },
  message: (value) => (value ? "" : "Lütfen bir mesaj yazın."),
};

function showError(field, message) {
  const error = document.getElementById(`${field.id}-error`);
  error.textContent = message;
  field.setAttribute("aria-invalid", "true");
}

function clearError(field) {
  document.getElementById(`${field.id}-error`).textContent = "";
  field.removeAttribute("aria-invalid");
}

// Alanı doğrular, hatalıysa hata mesajını gösterir. Geçerliyse true döner.
function validateField(field) {
  const message = validators[field.name](field.value.trim());
  if (message) {
    showError(field, message);
    return false;
  }
  clearError(field);
  return true;
}

function hideSuccess() {
  successMessage.hidden = true;
  successMessage.textContent = "";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  hideSuccess();

  const fields = Array.from(form.elements).filter((el) => el.name in validators);
  const invalidFields = fields.filter((field) => !validateField(field));

  if (invalidFields.length > 0) {
    invalidFields[0].focus();
    return;
  }

  const name = form.elements.name.value.trim();
  form.reset();
  successMessage.textContent = `Teşekkürler ${name}! Mesajınız bize ulaştı, en kısa sürede dönüş yapacağız.`;
  successMessage.hidden = false;
});

// Kullanıcı yazmaya başlayınca o alanın hatası ve eski başarı mesajı kalkar
form.addEventListener("input", (event) => {
  if (event.target.name in validators) {
    clearError(event.target);
    hideSuccess();
  }
});
