package com.vycode.vyos.exception;

import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.Instant;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler {


    @ExceptionHandler(ContactNotFound.class)
    public ResponseEntity<ApiError> handleContactNotFound(ContactNotFound ex) {
        ErrorCode errorCode = ex.getErrorCode();
        var body = new ApiError(Instant.now(), 404, errorCode.name(), ex.getMessage(), "contatos/aplication/GetByIdUseCase", null);
        return ResponseEntity.status(errorCode.getStatus()).body(body);
    }
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ApiError> handleValidation(MethodArgumentNotValidException ex, HttpServletRequest req) {
        var fields = ex.getBindingResult().getFieldErrors().stream()
                .map(f -> new ApiError.FieldError(f.getField(), f.getDefaultMessage()))
                .toList();
        var body = new ApiError(Instant.now(), 400, "VALIDATION_ERROR",
                "Dados inválidos", req.getRequestURI(), fields);
        return ResponseEntity.badRequest().body(body);
    }
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ApiError> handleUnexpected(Exception ex, HttpServletRequest req) {
        log.error("Erro inesperado em {}", req.getRequestURI(), ex);
        var body = new ApiError(Instant.now(), 500, "INTERNAL_ERROR",
                "Erro interno. Tente novamente mais tarde.", req.getRequestURI(), null);
        return ResponseEntity.internalServerError().body(body);
    }
   

}
