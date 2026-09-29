package com.vycode.vyos.exception;

public class ContactNotFound extends RuntimeException {
  public ContactNotFound(String message) {
    super(message);
  }
}
