package com.vycode.vyos.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
@AllArgsConstructor
public enum ErrorCode {
    CONTACT_NOT_FOUND(HttpStatus.NOT_FOUND, "Contato não encontrado"),
    EMAIL_ALREADY_EXISTS(HttpStatus.CONFLICT, "E-mail já cadastrado"),
    INVALID_STATUS_TRANSITION(HttpStatus.UNPROCESSABLE_ENTITY, "Transição de status inválida");

    private final HttpStatus status;
    private final String defaultMessage;

}
