export const registerEmail = (user) => {
  const subject = "Welcome to Our Platform!";
  const htmlContent = `
        <html>
          <body style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
            <div style="background-color: #f7f7f7; padding: 20px; border-radius: 8px; max-width: 600px; margin: auto;">
              <h2 style="text-align: center; color: hsla(210, 29%, 24%, 1.00);">Welcome to Our Platform!</h2>
              <p style="font-size: 16px;">Hi <strong>${user.full_name}</strong>,</p>
              <p style="font-size: 16px;">
                Welcome to our platform! We're excited to have you join us. Feel free to explore all the features.
              </p>
              <p style="font-size: 16px;">
                If you have any questions, don’t hesitate to reach out to our support team.
              </p>
              <p style="font-size: 16px;">
                Best regards,<br>
                <strong>The Team</strong>
              </p>
            </div>
          </body>
        </html>
      `;

  return { subject, htmlContent };
};

export const forgetPasswordEmail = (user) => {
  const subject = "Forget Password!";
  const text = `
  <html>
    <body style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <div style="background-color: #f7f7f7; padding: 20px; border-radius: 8px; max-width: 600px; margin: auto;">
        <h2 style="text-align: center; color: #2c3e50;">Password Reset Request</h2>
        <p style="font-size: 16px;">Hi <strong>${user.full_name}</strong>,</p>
        <p style="font-size: 16px;">
          We received a request to reset your password. Please use the following OTP to reset your password:
        </p>
        <div style="background-color: #2ecc71; color: white; font-size: 24px; font-weight: bold; padding: 10px; text-align: center; border-radius: 4px;">
          ${user.otp}
        </div>
        <p style="font-size: 16px; margin-top: 20px;">
          This OTP will expire in 10 minutes.
        </p>
        <p style="font-size: 16px;">
          If you didn't request a password reset, please ignore this email.
        </p>
        <p style="font-size: 16px;">
          Best regards,<br>
          The Team
        </p>
      </div>
    </body>
  </html>
`;

  return { subject, text };
};

export const sendPasswordChangeEmail = (user) => {
  const subject = "Your Password Has Been Changed";
  const text = `
        <html>
          <body style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
            <div style="background-color: #f7f7f7; padding: 20px; border-radius: 8px; max-width: 600px; margin: auto;">
              <h2 style="text-align: center; color: hsla(210, 29%, 24%, 1.00);">Your Password Has Been Changed</h2>
              <p style="font-size: 16px;">Hi <strong>${user.full_name}</strong>,</p>
              <p style="font-size: 16px;">
                We wanted to inform you that your password has been successfully changed.
              </p>
              <p style="font-size: 16px;">
                If you did not request this change or if this was done by mistake, please contact our support team immediately at <a href="mailto:support@example.com" style="color: #007bff; text-decoration: none;">support@example.com</a>.
              </p>
              <p style="font-size: 16px;">
                Best regards,<br>
                <strong>The Team</strong>
              </p>
              <div style="text-align: center; margin-top: 20px;">
                <a href="mailto:support@example.com" style="display: inline-block; background-color: #007bff; color: #fff; padding: 10px 20px; font-size: 16px; text-decoration: none; border-radius: 5px;">Contact Support</a>
              </div>
            </div>
          </body>
        </html>
      `;

  return { subject, text };
};
