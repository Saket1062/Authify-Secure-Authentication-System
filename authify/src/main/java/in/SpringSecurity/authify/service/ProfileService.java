package in.SpringSecurity.authify.service;

import in.SpringSecurity.authify.io.ProfileRequest;
import in.SpringSecurity.authify.io.ProfileResponse;

public interface ProfileService {

    ProfileResponse createProfile(ProfileRequest request);

    ProfileResponse getProfile(String email);
    String getName(String email);
    void sendResetOtp(String email);

    void resetPassword(String email, String otp, String newPassword);

    void sendOtp(String email);

    void verifyOtp(String email, String otp);
}
