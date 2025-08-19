package in.SpringSecurity.authify.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;
    private final TemplateEngine templateEngine;

    @Value("${spring.mail.properties.mail.smtp.from}")
    private String fromEmail;

    public void sendWelcomeEmail(String toEmail, String name) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(fromEmail);
        message.setTo(toEmail);
        message.setSubject("Welcome to Sri Mahalakshmi Enterprises 🚀");

        String body = String.format(
                "Hi %s,\n\n"
                        + "We’re excited to have you on board! 🎉\n\n"
                        + "Your account has been successfully created, and you can now log in to start exploring our platform.\n\n"
                        + "If you have any questions or need assistance, feel free to reach out—we’re here to help.\n\n"
                        + "Warm regards,\n"
                        + "The Mahalakshmi Enterprises Team\n"
                        + "— Saket Agarwal",
                name
        );

        message.setText(body);
        mailSender.send(message);
    }

//    public void sendResetOtpEmail(String toEmail, String otp) {
//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setFrom(fromEmail);
//        message.setTo(toEmail);
//        message.setSubject("Password Reset OTP");
//        message.setText("Your OTP for resetting your password is "+otp+". Use this OTP to proceed with resetting your password.");
//        mailSender.send(message);
//    }
//
//    public void sendOtpEmail(String toEmail, String otp) {
//        SimpleMailMessage message = new SimpleMailMessage();
//        message.setFrom(fromEmail);
//        message.setTo(toEmail);
//        message.setSubject("Account Verification OTP");
//        message.setText("Your OTP is "+otp+". Verify your account using this OTP.");
//        mailSender.send(message);
//    }

    public void sendOtpEmail(String toEmail, String otp) throws MessagingException {
        Context context = new Context();
        context.setVariable("email", toEmail);
        context.setVariable("otp", otp);

        String process = templateEngine.process("verify-email", context);
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage);

        helper.setFrom(fromEmail);
        helper.setTo(toEmail);
        helper.setSubject("🔐Your One-Time Password (OTP) for Account Verification");
        helper.setText(process, true);

        mailSender.send(mimeMessage);
    }

    public void sendResetOtpEmail(String toEmail, String otp) throws MessagingException {
        Context context = new Context();
        context.setVariable("email", toEmail);
        context.setVariable("otp", otp);

        String process = templateEngine.process("password-reset-email", context);
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(mimeMessage);

        helper.setFrom(fromEmail);
        helper.setTo(toEmail);
        helper.setSubject("Forgot your password?");
        helper.setText(process, true);

        mailSender.send(mimeMessage);
    }
}
