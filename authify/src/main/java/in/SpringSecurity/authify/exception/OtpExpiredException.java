package in.SpringSecurity.authify.exception;

public class OtpExpiredException extends RuntimeException{
    public OtpExpiredException(String msg){
        super(msg);
    }
}
