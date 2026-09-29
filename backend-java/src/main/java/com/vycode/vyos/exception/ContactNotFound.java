package com.vycode.vyos.exception;

public class ContactNotFound extends RuntimeException {
    private final ErrorCode errorCode;

    public ContactNotFound(ErrorCode errorCode) {
        super(errorCode.getDefaultMessage());
        this.errorCode = errorCode;
    }

    public ContactNotFound(ErrorCode errorCode, String message) {
        super(message);
        this.errorCode = errorCode;
    }

    public ErrorCode getErrorCode() {
        return errorCode;
    }
}
