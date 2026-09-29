package com.vycode.vyos.exception;

import org.springframework.validation.FieldError;

import java.time.Instant;
import java.util.List;

public record ApiError(
        Instant timestamp,
        int status,
        String code,
        String message,
        String path,
        List<FieldError> errors
) {
    public record FieldError(String field, String message) {}
}
