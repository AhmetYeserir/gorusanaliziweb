import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>İletişim</h1>
      <p>
        Projemiz hakkında daha fazla bilgi almak veya bizimle iletişime geçmek
        için aşağıdaki formu doldurabilirsiniz.
      </p>
      <form>
        <label for="name">Adınız:</label>
        <input type="text" id="name" name="name" required />
        <br />
        <label for="email">E-posta:</label>
        <input type="email" id="email" name="email" required />
        <br />
        <label for="message">Mesajınız:</label>
        <textarea id="message" name="message" required></textarea>
        <br />
        <button type="submit">Gönder</button>
      </form>
    </div>
  );
};

export default Contact;
