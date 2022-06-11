<!-- Please remove this file from your project -->
<template>
  <div class="about-contact">
    <div id="contact-half" class="half-contact is-contact">
      <div class="form-loader">
        <div class="form-loader-content">
          <div class="stripe-loader">
            <div class="stripe"></div>
            <div class="stripe"></div>
            <div class="stripe"></div>
          </div>
        </div>
        <div class="form-message-content">
          <div class="form-message">Default Message</div>
        </div>
      </div>
      <div class="form-loader-before"></div>
      <div class="giga-text">Contact</div>
      <div class="contact-info">

        <div class="inner-container">
          <form id="contact-form" method="post" action="https://riccardozanutta.com/mailer.php"
            class="the-form no-smoothState">
            <div class="input required"><input type="text" id="name" name="name"><label class="label">Name</label></div>
            <div class="input required email"><input type="text" id="email" name="email"><label
                class="label">E-mail</label></div>
            <div class="input required"><textarea id="message" name="message"></textarea><label
                class="label">Message</label></div>
            <div class="inner-container"><button type="submit" disabled class="the-button submit-button"><span
                  class="button-text">Send
                  Message</span>
                <div class="button-mask"></div>
              </button></div>
          </form>
        </div>
        <div class="close-contact"><span></span><span></span></div>
      </div>
    </div>
    <div class="half-contact is-about">
      <div class="giga-text">Contact</div>
      <div class="about-speed"></div>
      <div class="contact-info">
        <h3 class="h4 about-me-title">Let’s talk.</h3>
        <!-- <p class="h5 about-me-subtitle">New projects, freelance inquiries, or even a coffee 🤣.</p> -->

        <p class="about-me-text">New <strong>projects</strong>,
          <strong> freelance inquiries</strong>, or even a coffee.
        </p>

        <div class="reach-me">
          <h3 class="h4 about-me-title">How to reach me:</h3>
          <p class="about-me-text">
            By <strong>filling </strong>out the <strong>form</strong> below or through the following <strong>accounts</strong>. <strong>Happy</strong> to communicate with <strong>you</strong>.
            
          </p>
          <br>
          <div class="reach-me-icons">
            <a href="https://instagram.com/taha.bouras" target="_blank">
              <img
                src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white"
                target="_blank">
            </a>
            <a href="https://www.facebook.com/profile.php?id=100007522123943" target="_blank">
              <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white"
                target="_blank">
            </a>
            <a href="mailto:tahadevbou@gmail.com">
              <img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white"
                target="_blank">
            </a>
            <a href="https://www.linkedin.com/in/taha-bouras/" target="_blank">
              <img
                src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                target="_blank">
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm'
}
</script>
